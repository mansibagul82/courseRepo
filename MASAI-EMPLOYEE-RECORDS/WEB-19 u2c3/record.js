// fill in javascript code here

document.addEventListener("DOMContentLoaded", function(){

    let form = document.querySelector("form");
    let tbody = document.querySelector("tbody");

    form.addEventListener("submit", function(event){
        
        event.preventDefault();

        let name = document.getElementById("name").value ;
        let employeeID = document.getElementById("employeeID").value ;
        let department = document.getElementById("department").value ;
        let experience = document.getElementById("exp").value ;
        let email = document.getElementById("email").value ;
        let mobileNum = document.getElementById("mbl").value ;
        let submit = document.getElementsByClassName("submit").value ;

        let personRole;

        if (experience > 5){
            personRole = "Senior"
        }
        else if (experience >= 2 && experience >= 5){
            personRole = "Junior"
        }
        else{
            personRole = "Fresher"
        }

        // "<h1> hello </h1>= innerHTML"
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${employeeID}</td>
            <td>${department}</td>
            <td>${experience}</td>
            <td>${email}</td>
            <td>${mobileNum}</td>
            <td>${personRole}</td>
            <td><button class="delete">Delete</button></td>
        `
        
        let deleteButton = row.querySelector(".delete")
        deleteButton.style.backgroundColor = "red"
        deleteButton.style.color = "white"
        deleteButton.style.fontFamily= "cursive"
        deleteButton.style.border = "none"
        deleteButton.style.borderRadius = "5px"
        deleteButton.style.padding = "3px"
        deleteButton.addEventListener("click", function(){
            row.remove()

        })
        
        tbody.append(row)
        form.reset()
    })

    // Bonus Function

    let filterSelect = document.getElementById("filterDepartment");
    filterSelect.addEventListener("change", function(){
        let selectDepartment = filterSelect.value ;
        let rows = tbody.querySelectorAll("tr");

        rows.forEach(function(row){
            // 3 col 
            let departmentCell = row.querySelector("td:nth-child(3)");

            if(selectDepartment == "" || selectDepartment == departmentCell.textContent){
                row.style.display = "table-row"
            }
            else{
                row.style.display = "none"
            }

        })
    })
})






