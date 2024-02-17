var mLevel = document.querySelectorAll(".m-level");
var mobile_menu = document.getElementsByClassName("mobile-menu")[0];
var top_menu = document.getElementsByClassName("top-manu");
var mBlock = document.getElementsByClassName("m-block")[0];
function clickMenu(){
    mLevel[0].style.display = "block";
    console.log('hello');
}
function clickMenu2(){
    mLevel[1].style.display = "block";
    console.log('hello');
}
function topMenu(){
    mobile_menu.style.left = "0";
    mBlock.style.left = "0";
    top_menu[0].style.display = "none";
    top_menu[0].style.zIndex = "999";
    top_menu[1].style.display = "block";
    top_menu[1].style.color = "white";
    top_menu[1].style.zIndex = "999";
}
function topMenuClose(){
    mobile_menu.style.left = "";
    mBlock.style.left = "";
    top_menu[0].style.display = "";
    top_menu[1].style.display = "none";
}
var sBoxes = document.getElementsByClassName("s-boxes");
var count = 0;
var stopSlider = "";
function startSlider(){
    stopSlider = setInterval(
        function(){
            count++;
            for (i=0; i<sBoxes.length; i++){
                sBoxes[i].style.transform = `translateX(-${count*100}%)`;
            }
            if(count == sBoxes.length-1){
                StopNow();
            }
        },
        2000,
    )
}
function StopNow(){
    clearInterval(stopSlider);
}
var menuBg = document.querySelector(".menu-bg");
var mNav = document.querySelector("#nav");
document.addEventListener(
    "scroll",
    function(){
       if(window.scrollY >= 80){
        menuBg.style.opacity = 1;
        mNav.style.boxShadow = "none" ;
        mNav.classList.add("new-menu")
       }else{
        menuBg.style.opacity = 0;
        mNav.classList.remove("new-menu")
       }
    }
)
var itemsList = document.querySelectorAll(".items-list");
var foodItem = document.querySelectorAll(".food-item");
itemsList[0].style.display = "block";
foodItem[0].classList.add("items-bg");
console.log(itemsList);
function openList(event){
    for(i=0; i<itemsList.length; i++){
        itemsList[i].style.display = "";
    }
    for(i=0; i<itemsList.length; i++){
        foodItem[i].classList.remove("items-bg");
    }
    itemsList[event].style.display = "block";
    foodItem[event].classList.add("items-bg");
}
