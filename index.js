//selecting side navbar,menu icon

let sidenav = document.getElementById("sidenav")
let menu = document.getElementById("menuicon")
let closernav = document.getElementById("close-nav")

menu.addEventListener("click",function(){
    sidenav.style.right=0
})
closernav.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})
