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
    $("#quote").css("opacity", "0");  
    $.ajax( {
      url: '/newquote',
      success: (data) => {  
        $("#quote").css("opacity", "1");        
        $('#quoter').text(data.quoter);
        $('#blockquote').html(data.quote);
      },
      cache: false
    });
});