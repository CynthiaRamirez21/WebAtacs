// $(window).on('load', function() {
//     //$(window).scrollTop(0);
//     $(windows).top()
    
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.classList.remove('active');
//             }
//         });
//     });
// });


// $(window).on('load', function() {
//     $(window).scrollTop(0);

//     hotfixScrollSpy();


//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.classList.remove('active');
//             }
//         });
//     });
// });




// $('html').animate({
//     scrollTop: 0 //$(document).height()
// }, function(){
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.classList.remove('active');
//             }
//         });
//     });
// });

var aboutSection = $('#about');
var servicesSection = $('#services');
var valuesSection = $('#values');
var contactSection = $('#contact');

var navLinkAbout = $('#navLinkAbout');
var navLinkServices = $('#navLinkServices');
var navLinkValues = $('#navLinkValues');
var navLinkContact = $('#navLinkContact');

var mainNav = $('#mainNav');

$(window).on('load', function() {
    // $(window).scrollTop(0);
    highlightVisibleSection();
});

function highlightVisibleSection(){

    navLinkAbout.removeClass('active');
    navLinkServices.removeClass('active');
    navLinkValues.removeClass('active');
    navLinkContact.removeClass('active');

    if(isScrolledIntoView(contactSection))
    {
        navLinkContact.addClass('active');

        console.log('==========================================================');
        return;
    }

    if(isScrolledIntoView(valuesSection))
    {
        navLinkValues.addClass('active');

        console.log('==========================================================');
        return;
    }

    if(isScrolledIntoView(servicesSection))
    {
        navLinkServices.addClass('active');

        console.log('==========================================================');
        return;
    }

    if(isScrolledIntoView(aboutSection))
    {
        navLinkAbout.addClass('active');

        console.log('==========================================================');
        return;
    }

}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop(); // + mainNavHeight;
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    // return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));

    //Es true si:  Si el panel de contacto está contenido en la pantalla visible o si mas de la mitad de la seccion está en pantalla actualmente

    if (elem === contactSection) {
        // Returns true if we are reaching the bottom of the page
        return $(window).scrollTop() + $(window).height() > $(document).height() - 30;
    }
    else {
        //return (/*(elemBottom >= docViewTop) && (elemTop <= docViewBottom) && */(elemBottom <= docViewBottom) && (elemTop >= docViewTop));

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
            console.log('elem: ' + JSON.stringify(elem[0]));
            console.log('elemTop:' + elemTop);
            console.log('elemBottom: ' + elemBottom);
            console.log('docViewTop:' + docViewTop);
            console.log('docViewBottom: ' + docViewBottom)
            return true;
        }
        else{
            return false;
        }

    }
}

$(window).scroll(function() {    
    highlightVisibleSection();
});