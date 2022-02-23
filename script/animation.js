function toggleHamburger(x) {
    x.classList.toggle("change");
    $(".vertical-navbar").toggleClass("hidden");
}

$(document).ready(function(){

    $(this).scrollTop(0);

    let headerHeight=$(".header").outerHeight();
    let padding_top;
    padding_top=headerHeight;
    $(".landing-container").css({'padding-top': padding_top});
    $(".vertical-navbar").css({'padding-top': padding_top});

    $(window).scroll(function (event) { 
        let scroll=$(this).scrollTop();
        let opacity=1-scroll/900;
        let new_padding_top=padding_top-scroll/2;

        if(opacity<0){
            $('.landing-container').css({'display':'none' });
        }
        if(opacity>0){
            $('.landing-container').css({ 'opacity': opacity, 'padding-top': new_padding_top, 'display':'block' });
        }
        if(scroll!=0){
            $('.header').addClass("sticky");
        }
        else{
            $('.header').removeClass('sticky');
        }

    });

    const faders = document.querySelectorAll(".fade-in");

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});


const appearOptions = {
    threshold: 0.9
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions);
