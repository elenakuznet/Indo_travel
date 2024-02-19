
// Accordion

$('.acc').accordion({
  active: 0,
  collapsible: true,
  heightStyle: 'content',
  icons: {
      header: 'acc__accord',
      activeHeader: 'acc__accord, acc__accord--active',  
  },
});


// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1.3,
    loop: true,

    
    // Navigation arrows
    navigation: {
      nextEl: '.button-right',
    },
  
    mousewheel: true,
    keyboard: true,
  });

  // Select 

  const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
    });
  };

  defaultSelect();


  // const optionInput = document.querySelector('.options-input');
  // const options = document.querySelector('.options');

  // optionInput.onclick = function() {
  //   console.log('Кнопка нажата!');
  //   options.style.display = 'block';
  // }

// .onclick = function() {
//     entityInputs.hidden = true;
// }

  // const optionsSelect = () => {
  //   const option = document.querySelector('.option');
  //   const optionChoices = new Choices(option, {
  //     searchEnabled: false,
  //     itemSelectText: '',
  //   });
  // }

  // optionsSelect();