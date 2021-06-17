    //////////////https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick/////


    ////Check this solution/////
    /////https://stackoverflow.com/questions/59691028/nav-bar-w-burger-menu-as-open-close-button////
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
        
    optionButtonsElement.addEventListener('click', () => {
        deleteValue2();
        pullValue();
        
   
    });

    burger.addEventListener('click', () => {
     
        toggleFlag ? first() : second();
        toggleFlag = !toggleFlag;
   
    });
    
    let toggleFlag = true;


    function first(){
            nav.classList.toggle('nav-active');
            deleteValue2();
            if('nav-active') pullValue();
            

       
    
         //Burger Animation
        burger.classList.toggle('toggle');

    };



function second() { 
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle'); 
    deleteValue();
    };


    var delayInMilliseconds = 1000;

setTimeout(function deleteValue(){//a.remove();
    document.getElementById("inventory").innerHTML = "";}, delayInMilliseconds);
   

function deleteValue2(){//a.remove();
        document.getElementById("inventory").innerHTML = ""; }

 