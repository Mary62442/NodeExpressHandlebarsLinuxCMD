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


$( window ).scroll(() => {
    let offsetT = $('#quote').offset().top;
    let innerH = window.innerHeight;
    let pageXO = window.pageYOffset;
    
    $('#quote-container').css("background-color", `hsla(154, 33%, ${pageXO/5}%, 1)`);
    
    if ((offsetT - innerH + $('#quote').height()) <= pageXO) {       
        $("#quote").css({"opacity": "1", "margin-bottom": "0"});       
    }
});


$('#change-quote').on('click', (e) => {
    e.preventDefault();
    $("#quote").css({"opacity": "0", "margin-bottom":"-30px"});  
    $.ajax( {
      url: '/newquote',
      success: (data) => {  
        $("#quote").css({"opacity": "1", "margin-bottom":"0"});        
        $('#quoter').html(data.quoter);
        $('#blockquote').html(data.quote);
      },
      cache: false
    });
});