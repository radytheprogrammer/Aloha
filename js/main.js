// (function($){
//   // ensure the DOM loaded sucessfully
//   $(document).ready(function(){
//       // target the flickity container with querySelector
//   });
// })(jQuery)
// $('.main-carousel').flickity();

document.addEventListener("DOMContentLoaded", function () {

      console.log('Your document is ready, DOM loaded and is ready for manipulation.');

      var elem = document.querySelector('.main-carousel');
      
      var flkty = new Flickity(elem, {
        wrapAround: true,
        adaptiveHeight:false,
        cellAlign: 'left',
        contain: true
      });
  
});



/* https://www.w3resource.com */

function validateEmail(mail) {
	console.log("i am validating bro");
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
	{
      //return(true);
      	 event.preventDefault();
      alert("Thank you for subscribing!");

    }
    else{
      //return(false);
      			 event.preventDefault();
            alert("You have entered an invalid email address!");
    }

}




const subscribeButton = document.getElementById("subscribe");
console.log(subscribeButton);

subscribeButton.addEventListener("click", function(){


	const inputEmail = document.getElementById("email");
console.log(inputEmail);



let emailVal = inputEmail.value;

	validateEmail(emailVal);
	inputEmail.value='';

});
