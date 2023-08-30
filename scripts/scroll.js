const navigation = document.querySelectorAll(".nav-button a");

navigation.forEach(nav_elem => {
    nav_elem.addEventListener("click", function(event)
    {
        event.preventDefault();

        const id_nav_elem = nav_elem.getAttribute("href");
        const elev_id_h = document.querySelector(id_nav_elem);

        window.scroll({
            top : elev_id_h.offsetTop - document.querySelector("header").offsetHeight - 20,
            behavior: 'smooth'
        });

        //let elements = document.querySelectorAll('.element-animation');
        //elements.forEach(el => {animatedScroll(el)});
    })
});