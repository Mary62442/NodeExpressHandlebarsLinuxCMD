var quote = document.getElementById('quote');
var quoteContainer = document.getElementById('quote-container');

window.addEventListener('scroll', ()=> {

    let offsetT = quote.offsetTop;
    let innerH = window.innerHeight;
    let pageXO = window.pageYOffset;
    
    quoteContainer.style.backgroundColor = `hsla(154, 33%, ${pageXO/5}%, 1)`;
    
    if ((offsetT - innerH + quote.clientHeight) <= pageXO) {
        quote.style.opacity = '1';
        quote.style.marginBottom = '0';        
    }
});

