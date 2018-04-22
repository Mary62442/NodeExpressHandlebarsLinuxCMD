$(document).ready(()=> {
    for (var i = 1; i <= 34; i++) {
        $(".hand-writing").append(`<div id = "mvb${i}" style="background-image: url('assets/images/hand-writing/mvb${i}.png')"></div>`);
    }

    setTimeout( () => {
        var counter = 34;
        var timer = setInterval( () => { 
            $(".hand-writing > div").hide();
            $(`#mvb${counter}`).show();
            counter--;  
            if (counter === 0)   {
                clearInterval(timer); 
                $("#home-all").show();  
                $(".hand-writing").delay(500).fadeOut(800);
            }         
        }, 70);
    }, 500);
});


