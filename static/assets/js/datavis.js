$(document).ready(()=> { 

    $('#nav-button').click(()=> {
        $('#nav-button').hide('slide', {direction: "left"}, 100, () => {
            $('#nav-list').show('slide', {direction: "left"}, 400 ); 
        });
             
    })

    $(window).on("click", (event) => {	
        if( $('.navbar').has(event.target).length == 0 && !$('.navbar').is(event.target)) {
            $('#nav-list').hide('slide', {direction: "left"}, 400, () => {
                $('#nav-button').show('slide', {direction: "left"}, 100);
            });            
        }
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
});
