    //////////////https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick/////
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
        
    function call(){
        if(callOne) one();
       else two();
       callOne = !callOne;
    }
    
    var callOne  = true;

    burger.addEventListener('click', 
    function one(){
        
            
            nav.classList.toggle('nav-active');
          
            if('nav-active')pullValue();
            

            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
             });
         //Burger Animation
        burger.classList.toggle('toggle');

    });



function two() { deleteValue() };


