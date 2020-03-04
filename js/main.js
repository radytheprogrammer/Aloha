// (function($){
//   // ensure the DOM loaded sucessfully
//   $(document).ready(function(){
//       // target the flickity container

//   });

// })(jQuery)

// $('.main-carousel').flickity();

document.addEventListener("DOMContentLoaded", function () {

      console.log('Your document is ready, DOM loaded and is ready for manipulation.');

      var elem = document.querySelector('.main-carousel');
      
      var flkty = new Flickity(elem, {
          // options
          cellAlign: 'left',
          contain: true
      });
  
});
