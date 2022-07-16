$(".blog1Preview a").load("./blogs/blog1.html #blog1");
$(".blog2Preview a").load("./blogs/blog2.html #blog2");
$(".blog3Preview a").load("./blogs/blog3.html #blog3");
$(".blog4Preview a").load("./blogs/blog4.html #blog4");
$(".blog5Preview a").load("./blogs/blog5.html #blog5");
$(".blog6Preview a").load("./blogs/blog6.html #blog6");

$(document).ready(function () {
    // Fade in animation on page load
    $('main').fadeIn(2000);
    $('footer').fadeIn(2000);
    $('#scrollPage').fadeIn(2000);

    // Footer Form Validation
    $('#footerError').hide();
    $('#footerErrorPhone').hide();
    $('#footerErrorSubject').hide();
    $('#footerErrorMessage').hide();

    $('#footerForm').submit(function (e) {
        e.preventDefault();
        let footerEmail = $('#footerEmail').val();
        let footerPhone = $('#footerPhone').val();
        let footerSubject = $('#footerSubject').val();
        let footerMessage = $('#footerMessage').val();

        if (footerEmail.length < 5 || !footerEmail.includes('.') || !footerEmail.includes(
                '@')) {
            $('#footerEmail').removeClass('is-valid');
            $('#footerEmail').addClass('is-invalid');
            $('#footerError').show()
        } else {
            $('#footerEmail').removeClass('is-invalid');
            $('#footerEmail').addClass('is-valid');
            $('#footerError').hide();
        }

        let footerPhoneDashRemoved = footerPhone.replace(/-/g, '');
        if (parseInt(footerPhone.length) < 9 || parseInt(footerPhone.length) > 20 || isNaN(
                footerPhoneDashRemoved)) {
            $('#footerPhone').removeClass('is-valid');
            $('#footerPhone').addClass('is-invalid');
            $('#footerErrorPhone').show();
        } else {
            $('#footerPhone').removeClass('is-invalid');
            $('#footerPhone').addClass('is-valid');
            $('#footerErrorPhone').hide();
        }

        if (footerSubject.length < 3 || !isNaN(footerSubject)) {
            $('#footerSubject').removeClass('is-valid');
            $('#footerSubject').addClass('is-invalid');
            $('#footerErrorSubject').show()
        } else {
            $('#footerSubject').removeClass('is-invalid');
            $('#footerSubject').addClass('is-valid');
            $('#footerErrorSubject').hide();
        }
        $('#footerErrorMessage').hide();
        if (footerSubject.length < 3 || !isNaN(footerSubject)) {
            $('#footerMessage').removeClass('is-valid');
            $('#footerMessage').addClass('is-invalid');
            $('#footerErrorMessage').show()
        } else {
            $('#footerMessage').removeClass('is-invalid');
            $('#footerMessage').addClass('is-valid');
            $('#footerErrorSubject').hide();
        }

        if ($('#footerEmail').hasClass('is-valid') && $('#footerPhone').hasClass(
                'is-valid') && $('#footerSubject').hasClass('is-valid') && $('#footerMessage')
            .hasClass('is-valid')) {
            let submitForm = $('#footerForm').serialize();
            $('.removeOnSubmit').fadeOut(2000);
            $('#footerForm').fadeOut(2000);
            $('.formComplete').fadeIn(2000).show();

        }
    });

    // Blog Auto Refresh
    setTimeout(function () {
        let blogsContentParagraph = [];
        let blogsTitles = [];

        for (let i = 1; i < 100; i++) {
            let contentLength = $(`#blog${i} p`).text().trim();
            let blogTitle = $(`#blog${i} h1`).text().trim();
            if (contentLength.length > 0) {
                blogsContentParagraph.push(contentLength);
                blogsTitles.push(blogTitle);
            }
        }

        for (let i = 1; i <= blogsContentParagraph.length; i++) {
            let paragraphPreview = blogsContentParagraph[i - 1].substring(0, 200) + '...';
            let titlePreview = blogsTitles[i - 1];
            $(`.blogPeek #blog${i}`).empty();
            $(`.blogPeek #blog${i}`).after(`<h1>${titlePreview}</h1><p>${paragraphPreview}</p>`);
        }
    }, 250)

    const app = Vue.createApp({
        data() {
            return {
                prevButton: 'Previous Page'
            }
        }
    })

    app.mount('#prevPage');
});


$("#scrollPage").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 750, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (
        index
    ) {}, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (
        index
    ) {}, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});