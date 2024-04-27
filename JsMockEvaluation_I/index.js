
let productContainer = document.getElementById("productContainer")

let input = document.querySelector("#navbar>div>input")

let searchBtn = document.querySelector("#navbarSearch")

let selectTag = document.querySelector("#avbarSelect")


const getData = async (API) =>{
    
    let res = await fetch(API)
    let data = await res.json()
    showData(data.data)

}

function showData(arr){

    productContainer.innerHTML = ""

    arr.forEach((ele, i) => {

        let div = document.createElement("div")
        div.style.borderRadius = "118px"
        div.style.marginBottom  = "4%"
        div.style.padding = "4%"
        div.style.backgroundColor = "rgb(230, 230, 230)"

        let image = document.createElement("img")
        image.src = ele.image

        let title = document.createElement("h3")
        title.innerText = ele.title

        let price = document.createElement("h3")
        price.innerText = ele.price

        div.append(image,title,price)

        productContainer.append(div)
    })

}

function searchData(){
    let value = input.value

    arr = products.filter(function(ele,i){
        return ele.title.toLowerCase() === value.toLowerCase()
    })

    console.log(arr)

    if (arr.length === 0){
        productContainer.innerHTML = "<h2> Product Not Found</h2>"

    }
    else{
        showData(arr)
    }
}

function sortData(){

    let value = selectTag.value;
    let arr;

    if (value === "asc"){
        arr = products.sort(function(a,b){
            return a.price - b.price
        })
    }
    else if (value === "desc"){
        arr = products.sort(function(a,b){
            return b.price - a.price
        })
    }

    showData(arr)
}

getData('https://fakestoreapi.com/products')