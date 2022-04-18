




 $.get(`details.json`, function abc(response) {
    var productData = response
    ab(productData)


})


function ab(m){
   console.log(m.rcb[0].name)

   
        }

    
       

     
     function card(name,img,from,status,price,des,res){
        console.log(res)
     
 
     
     
     var a = document.getElementById("team-member")
     a.innerHTML+=`<div class="teams-cards" id=${res}>
     <img src=${img} alt="" class="img">
     <h2 class="name">${name}</h2>
     <h6 class="Player-count">${from}</h6>
      <h2 class="Top-Batter">${status}</h2> 
      <h2 class="Top-Bowler">${price}</h2> 
      <h2 class="title-won">${des}</h2> 
      
     </div>`
     
     
     
     
     }
    