const navSlide = () => {
    const burger = document.getElementsByClassName('burger')[0];
    const nav = document.querySelector('.site-nav ul');
    const navLinks = document.querySelectorAll('.site-nav li');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();
