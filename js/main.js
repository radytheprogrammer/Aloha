console.log("Hello from main.js");

    const nameEl = document.getElementById('name');

    document.addEventListener("DOMContentLoaded", function(event) {
        
        const subcribeButtonElement = document.getElementById("subscribe")
        // subscribeButtonElement.addEventListener
        // onclick
        // alert()

    })

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        contain: true
    });

    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.main-carousel', {
    // options
    });

    