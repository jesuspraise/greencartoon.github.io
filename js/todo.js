
const bodysection = document.querySelector('.section_2');

function substick(){
    const header = document.querySelector('.header');
    // const bodycntxy = document.querySelector('.bodycntxy');
    const headerHeight = header.offsetHeight;
    const top = bodysection.scrollTop;
    if(top > headerHeight){
    header.classList.add('show');
    }
    else {
      header.classList.remove('show');
    }
}
bodysection.addEventListener('scroll', substick);