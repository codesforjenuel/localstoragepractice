let h1El = document.querySelector("h1")
let h2El = document.querySelector("h2")
let h3El = document.querySelector("h3")
let h4El = document.querySelector("h4")
let btnStore = document.querySelector("#store")
let btnRemove = document.querySelector("#remove")
let inputEl = document.querySelector("#input")
let stored = localStorage.getItem("textStoraged")

btnStore.addEventListener("click", function() {
  
localStorage.setItem("textStoraged",h1El.textContent = inputEl.value )
 
   
})
 if (stored) {
       h1El.textContent = stored
      
  }
btnRemove.addEventListener("click", function(){
  
   h1El.textContent = ""
    localStorage.removeItem("textStoraged")
})
