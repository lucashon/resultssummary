const menu = [
    {
      "name": "cor",
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "name": "cor2",
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "name": "cor3",
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "name": "cor4",
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]




const sectionCenter = document.querySelector('.box2')

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItem(menu)


})

/**
 * mapeia as informações que foram listadoas anteriormente 
 * Função escreve no html trocando as informacções pelos valores do objeto
 * @param {*} menuItems 
 */
function displayMenuItem(menuItems){
    let displayMenu = menuItems.map(function(menu){
       console.log(menu)
        return ` <section class="box2">
       
        <div>
          <div class="objetos ${menu.name}">
              <img class="icon" src=${menu.icon}>
            <p class="category">${menu.category}</p>
            <p class="score">${menu.score}/100</p>
          </div>
        </div>
      </section>`
      })
  
     // JOIN - transforma tude em texto para o html entender
      displayMenu = displayMenu.join("")
      // console.log(displayMenu)
      // innerHTML - adiciona os elementos no html
      sectionCenter.innerHTML =  displayMenu
  
  }


  const btn = document.getElementById('btn')

  btn.addEventListener('mousemove', ()=>{
    btn.style.backgroundImage = 'linear-gradient(hsl(252, 80%, 59%), hsl(241, 73%, 52%))'
  })
  btn.addEventListener('mouseout', ()=>{
    btn.style.background = 'hsl(241, 81%, 54%)'
  })