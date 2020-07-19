// function($){
//   // ensure the DOM loaded sucessfully
//   $(document).ready(function(){
//       // target the flickity container with querySelector
//   });
// })(jQuery)
// $('.main-carousel').flickity();

/* image-slider code thanks to Flickity */
document.addEventListener("DOMContentLoaded", function () {

          console.log('Your document is ready, DOM loaded and is ready for manipulation.');
          /* error: unused variable. What is the purpose of elem? Excuse me? */
          var elem = document.querySelector('.main-carousel');
          /* error: unused variable omg*/
          var flkty = new Flickity(elem, {
            wrapAround: true,
            adaptiveHeight:false,
            cellAlign: 'left',
            contain: true
          });
          /* What can I do with elem now? Listen for a selection click? How? *confused* */
  
});


/*Source: https://www.w3resource.com -- search in validation code*/
function validateEmail(mail) {

      	console.log("i am validating bro");
      	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      	{
            event.preventDefault();
            alert("Thank you for subscribing!");
        }
        else{
            			event.preventDefault();
                  alert("You have entered an invalid email address!");
                  // no need to return false b/c I can't exaplin why yet... sorry.
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

/* get the element's button(by id/class/tag) that the user clicks on... */ 
document.getElementByClass("carousel-cell is-selected").addEventListener("click", addtocart);

/* and fire away this function! */
function addtocart() {
        document.getElementByTag("button").innerHTML = "YOU CLICKED ME!";
        document.getElementById("added").innerHTML = this.value;
        alert("Hello World");
}
