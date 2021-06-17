function foo (){
    this.removeEventListener("click", foo, false);
     this.addEventListener("click", bar, false);
 }


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
        


    burger.addEventListener('click',  ()  => {
    ///burger.addEventListener('click' () => {
            //Toggle Nav
            (foo, false);
            nav.classList.toggle('nav-active');
          
            if('nav-active')pullValue();
            ///else deleteValue()
            //else deleteValue()


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
}


function bar (){deleteValue()

}


navSlide();

/////console.log(index /7);////
