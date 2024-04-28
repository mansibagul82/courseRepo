let Department = document.querySelector("#Department")

let gender = document.querySelector("#gender")

let arr = []

let arr1 = []

let count = 1

let Salary = document.querySelector("#Salary")

let Tbody = document.querySelector("tbody")

let Button = document.querySelectorAll("button")

//Fetch Data using API
async function getdata(page="1"){
    try {
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`)
        let response = await res.json()
        arr = response.data
        showData(arr)
        console.log(response);
    } 
    catch (error) {
        
    }
}
getdata(1)

//show data function 
function showData(data){
    Tbody.innerHTML = ""
    data.map((item)=>{
          
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.gender}</td>
        <td>${item.department}</td>
        <td>${item.salary}</td>
    `
    Tbody.append(tr)
    })
}

// sorting functionality for salary
Salary.addEventListener('change', function(){
    if(Salary.value=="HTL"){
        let newdata = arr1.sort((a,b)=>b.salary-a.salary)
        showData(newdata)
    }else if(Salary.value=="LTH"){
        let newdata = arr1.sort((a,b)=>a.salary-b.salary)
        showData(newdata) 
    }
})

//pagination for next page
Button[1].addEventListener('click', function(){
    if(count<10){
        count+=1
        getdata(count)
    }else{
        Button [1].disabled   
    }
})

//pagination for previous page
Button [0].addEventListener('click', function(){
    if(count>1){
        count-=1
        getdata(count)
    }
    if(count<1){
        Button [0].disabled
        console.log(count);
    }
})



//filter for department
Department.addEventListener('change', function(){
    console.log(Department.value);
    fetchdata(Department.value)
})

//filter by gender 
gender.addEventListener('change', function(){

    console.log(arr1);
    let newdata = arr1.filter((item)=>item.gender==gender.value)
    showData(newdata)
        
})

async function FetchData1(){
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    let response = await res.json()
    arr1 = response.data
}
FetchData1()

async function fetchdata(vla){

    let newdata = arr1.filter((item)=>item.department==vla)
    showData(newdata)
}


