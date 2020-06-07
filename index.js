"use strict";
(function(){
    window.addEventListener("load", init);
    
    function init(){
        document.getElementById("loading").classList.add("disappeared");
        initializeAllSlides();
        document.addEventListener("keydown", moveSlides);
        document.addEventListener("click", advanceSlides);
    }

    function initializeAllSlides(){
        let slides = document.querySelectorAll(".slide");
        for(let i = 0; i < slides.length; i++){
            slides[i].style.left = (i * 100) + "%";
            slides[i].style.zIndex = -i;
        }
    }

    function moveSlides(event){
        console.log(event.keyCode);
        if(event.keyCode === 39){ // Right arrow
            advanceSlides();
        }else if(event.keyCode === 37){ // Left arrow
            goBackSlides();
        }
    }

    function advanceSlides(){
        let slides = document.querySelectorAll(".slide");
        for(let i = 0; i < slides.length; i++){
            let x = slides[i].style.left;
            slides[i].style.left = (parseInt(x.slice(0, x.length - 1)) - 100) + "%";
        }
        document.getElementById("loading").classList.add("hidden");
    }

    function goBackSlides(){
        let slides = document.querySelectorAll(".slide");
        for(let i = 0; i < slides.length; i++){
            let x = slides[i].style.left;
            slides[i].style.left = (parseInt(x.slice(0, x.length - 1)) + 100) + "%";
        }
    }
})();