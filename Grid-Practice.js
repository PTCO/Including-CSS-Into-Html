let toggleStatus = false;
let Toggle = function(){
    let getAside = document.querySelector("aside");
    let getUl = document.querySelector("aside ul");
    let getUlTitle = document.querySelector("aside h2");
    let getLink = document.querySelectorAll("aside l li a");
    let w = window.innerWidth;
    if ( toggleStatus == false){
        getAside.style.width = "25vw";
        getUl.style.opacity = 1;
        getUlTitle.style.opacity = 1;
        getUl.style.overflow = "visible";
        getUl.style.visibility = "visible";
        let arraylength = getLink.length;
        for (let i = 0; i < arraylength; i++) {
            getLink[i].style.opacity = 1;
            
        }
        toggleStatus = true;
    }
    else if( toggleStatus == true){
        if(w >= 768 && w < 1024){
             getAside.style.width = "7.5vw";
        }
        else if(w >= 1024 ){
             getAside.style.width = "5.25vw";
        }
        else{
             getAside.style.width = "13vw";
        }
        getUlTitle.style.opacity = 0;
        getUl.style.opacity = 0;
        getUl.style.overflow = "hidden";
        getUl.style.visibility = "hidden";
        let arraylength = getLink.length;
        for (let i = 0; i < arraylength; i++) {
            getLink[i].style.opacity = 0;
            
        }
        toggleStatus = false;
    }
}