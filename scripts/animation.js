
//Узнаём JavaScript’ом на сколько прокручена страница по вертикали
function getBodyScrollTop() { 
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

//функция сброса лого 
function logoAnimationClear() {
    const logo_width = document.querySelector('.logo-show').offsetWidth;
    document.getElementsByClassName('animation-icon-logo')[0].style.left = "-" + (logo_width + 10) + "px";

    const logo_text = document.querySelector('.logo-show');
    logo_text.classList.add('animation-logo');
}

//функция показа лого 
function logoAnimationShow() {
    document.getElementsByClassName('animation-icon-logo')[0].style.left = "0px";

    const logo_text = document.querySelector('.logo-show');
    logo_text.classList.remove('animation-logo');
}

function animatedScroll (event) {
  event.classList.add('element-show');
  if (event.classList.contains('element-animation-ul-check') && event.classList.contains('name-page')) document.querySelector('.courses').classList.add('element-show'), change.target.classList.add('name-opacity');
  else if (event.classList.contains('name-page')) event.classList.add('name-opacity');
}

//хедера и лого

window.onload = function() {
    setTimeout(function() {
        if (getBodyScrollTop() > 0)  {
            const header = document.querySelector('header');
            header.classList.add('header-animation'), logoAnimationClear(); 
        }

        const header = document.querySelector('header');
        const logo = document.querySelector('.logo');

        logo.addEventListener('mouseover', () => { if (header.classList.contains('header-animation')) logoAnimationShow();});
        logo.addEventListener('mouseout', () => { if (header.classList.contains('header-animation')) logoAnimationClear();});

        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
        
            if (getBodyScrollTop() > 0) header.classList.add('header-animation'), logoAnimationClear();
            else header.classList.remove('header-animation'), logoAnimationShow();
        });

          //если есть элемент
          let options = { threshold: [0.5] };
          let observer = new IntersectionObserver(onEntry, options);
          let elements = document.querySelectorAll('.element-animation');
          for (let elm of elements) {
            observer.observe(elm);
          }

          //то добавляем его здесь
          function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                animatedScroll (change.target);
              }
            });
          }

        const navigetion_elements = document.querySelectorAll('.nav-button a');
        for (let index = 0; index < navigetion_elements.length; ++index)
        {
            setInterval(function () {
                navigetion_elements[index].classList.add('animation-opacity-1');
            }, 250 * (index + 1));
        }
    }, 600);
};