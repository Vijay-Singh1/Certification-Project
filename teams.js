





var n="rcb"

$.get(`details.json`, function abc(response) {
    const obj = response;

  teamscard(obj[n])


   


})

function teamscard(res){
   
    for(i=0;i<=res.length-1;i++){
       
    

 
   
     

var a = document.getElementById("team-member")
     a.innerHTML+=`<div class="teams-cards" >
     <img src=${res[i].preview} alt="" class="img">
     <h2 class="name">${res[i].name}</h2>
     <h6 class="Player-count">${res[i].from}</h6>
      <h2 class="Top-Batter">${res[i].status}</h2> 
      <h2 class="Top-Bowler">${res[i].price}</h2> 
      <h2 class="title-won">${res[i].des}</h2> 
      
     </div>`
    }
    }
    

    

