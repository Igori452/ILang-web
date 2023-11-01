const navigation = document.querySelectorAll(".nav-button a, .logo");

navigation.forEach(nav_elem => {
    nav_elem.addEventListener("click", function(event)
    {
        event.preventDefault();

        const id_nav_elem = nav_elem.getAttribute("href");
        const elem_id_h = document.querySelector(id_nav_elem);

        const block = document.querySelectorAll('.anim-selector');

        for (let index = 0; index < block.length; ++index) {
            if (block[index].getAttribute('id') === id_nav_elem.slice(1) || nav_elem.classList.contains('logo')) break;
            block[index].classList.add('animation-interrupt');
        }

        window.scroll({
            top : elem_id_h.offsetTop - document.querySelector("header").offsetHeight - 20,
            behavior: 'smooth'
        });
    });
});