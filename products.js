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

//Product search Functionality
let input = document.getElementById("input")
let Productcontainer = document.getElementById("product-container")

let productlist = Productcontainer.querySelectorAll("div")
 
input.addEventListener("keyup",function(){
  
    let resultvalue = event.target.value.toUpperCase()

   for(count=0;count<productlist.length;count=count+1)
    if(productlist[count].textContent.toUpperCase().indexOf(resultvalue)==-1)
    {
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }
})
