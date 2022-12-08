const url = "http://localhost:8080/"
let list = document.getElementById("ticketList");

async function getAllTickets(){
   const response = await fetch(`${url}getTickets`, {
        method: 'GET'
   
   }
   )
   const tickets = await response.json();


   console.log(JSON.stringify(tickets));


   tickets.forEach(element => {
    let li = document.createElement("li");
            li.innerText = JSON.stringify(element);
            list.appendChild(li);
    
   })
};

getAllTickets();