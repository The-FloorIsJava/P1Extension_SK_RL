const url = "http://localhost:8080/"
let list = document.getElementById("employeeList");

async function getAllEmployees(){
   const response = await fetch(`${url}employees`, {
        method: 'GET'
   
   }
   )
   const employees = await response.json();


   console.log(JSON.stringify(employees));


   employees.forEach(element => {
    let li = document.createElement("li");
            li.innerText = JSON.stringify(element);
            list.appendChild(li);
    
   });

//    .then(response => {
//        console.log(response)
//        console.log(response.status)
//        if(response.status === 404){
//            throw new Error(response.text().then(body=>console.log(body)))
//        }
       
//        console.log(...response.headers)
//        return response.json();
//    })


//    const data = employees;


    
    //    data.forEach((item)=>{
    //        let li = document.createElement("li");
    //        li.innerText = JSON.stringify(item);
    //        list.appendChild(li);
    //      })

       
      
   }
  



getAllEmployees();