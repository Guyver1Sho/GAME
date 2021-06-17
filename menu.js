const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
        


    burger.addEventListener('click', () => {
    ///burger.addEventListener('click' () => {
            //Toggle Nav
            nav.classList.toggle('nav-active');
          
            if('nav-active')pullValue(), addImage();
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




navSlide();

/////console.log(index /7);
