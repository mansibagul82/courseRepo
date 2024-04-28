
let navbar = document.getElementById("navbar")

let container = document.getElementById("container")

let btnPrevious = document.getElementById("Previous")

let btnNext = document.getElementById("Next")

const getdata = async (URL) => {
    let res = await fetch(URL)
    let data = await res.json()
    getpro = data
    showdata(getpro)

}

function showdata(arr){

    container.innerHTML = ""

    arr.forEach(function (ele, i){

        let div = document.createElement("div")

        let sNo = document.createElement("h3")
        sNo.textContent = ele.id

        let name = document.createElement("h3")
        name.textContent = ele.name

        let gender = document.createElement("h3")
        gender.textContent = ele.gender

        let department = document.createElement("h3")
        department.textContent = ele.department

        let salary = document.createElement("h3")
        salary.textContent = ele.salary
 
        div.append(sNo, name, gender, department, salary)

        container.append(div)
    });
}

btnPrevious.addEventListener('click', () => {
    pageNo = pageNo - 1
    if(pageNo > 0){
        getdata(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}limit=10`)
    }
    else{
        pageNo = 1
    }
})

btnNext.addEventListener('click', () => {
    pageNo =pageNo + 1
    getdata(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageNo}limit=10`)
})

function sorting(){
    let value = salary.value
    let narr 

    if(value === "asc"){
        narr = salary.sort(function(a,b){
            return a.salary - b.salary
        })
    }
    else if(value === "desc"){
        narr = salary.sort(function(a,b){
            return b.salary - a.salary
        })
    }

    showdata(narr)
}

getdata(' https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees')
