//Search on JavaScript how far the page is scrolled vertically
function getBodyScrollTop() { 
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

//function clear logo 
function logoAnimationClear() {
    const logo_width = document.querySelector('.logo-show').offsetWidth;
    document.getElementsByClassName('animation-icon-logo')[0].style.left = "-" + (logo_width + 10) + "px";

    const logo_text = document.querySelector('.logo-show');
    logo_text.classList.add('animation-logo');
}

//function show logo  
function logoAnimationShow() {
    document.getElementsByClassName('animation-icon-logo')[0].style.left = "0px";

    const logo_text = document.querySelector('.logo-show');
    logo_text.classList.remove('animation-logo');
}

//header and logo
window.onload = function() {
  AOS.init();
  if (getBodyScrollTop() > 0)  {
      const header = document.querySelector('header');
      header.classList.add('header-animation'), logoAnimationClear(); 
  }

  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');

  logo.addEventListener('mouseover', () => { if (header.classList.contains('header-animation')) logoAnimationShow();});
  logo.addEventListener('mouseout', () => { if (header.classList.contains('header-animation')) logoAnimationClear();});

  const logo_link = document.querySelector(".logo");

  window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
  
      if (getBodyScrollTop() > 0) header.classList.add('header-animation'), logoAnimationClear(), logo_link.classList.remove('disabled-link');
      else header.classList.remove('header-animation'), logoAnimationShow(), logo_link.classList.add('disabled-link');
  });

  const navigation_elements = document.querySelectorAll('.nav-button a');
  for (let index = 0; index < navigation_elements.length; ++index)
  {
      setTimeout(function () {
          navigation_elements[index].classList.add('animation-opacity-1');
      }, 250 * (index + 1));
  }
}; 