
let navbar = document.getElementById("navbar")

let tbcontainer = document.getElementById("container")

let department = document.getElementById("department")

let btnPrevious = document.getElementById("Previous")

let btnNext = document.getElementById("Next")

const getdata =(URL) => {
    fetch(URL)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        console.log(res.data)
        showdata(res.data)
    })

}

function showdata(data){

    data.forEach(function (ele, i){

        let row = document.createElement("tr")
        
        row.innerHTML =
        `<td>${ele.id}</td>
         <td>${ele.name}</td>
         <td>${ele.gender}</td>
         <td>${ele.department}</td>
         <td>${ele.salary}</td>
        `
        tbcontainer.append(row)
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
