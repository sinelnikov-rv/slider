$(document).ready(function(){
    var currentPosition = 0;
    var slideWidth = 560;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    $('#slidesContainer').css('overflow', 'hidden');
    slides
        .wrapAll('<div id="slideInner"></div>')
        .css({
            'float' : 'left',
            'width' : slideWidth
        });
    $('#slideInner').css('width', slideWidth * numberOfSlides);
    $('#slideshow')
        .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
        .append('<span class="control" id="rightControl">Clicking moves right</span>');
    $('.control')
        .bind('click', function(){
            if ($(this).attr('id')=='leftControl'){
                animSlide('left')
            }
            else {
                animSlide('right')
            }
        });
    var $adderSpan = '';
    $('.slide').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");

    $('.control-slide').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });
    var animSlide = function(arrow){
        if (arrow == 'right') {
            if (currentPosition == numberOfSlides -1) {
                currentPosition = 0
            }
            else {
                currentPosition ++
            }
        }
        else if (arrow == 'left') {
            if (currentPosition == 0) {
                currentPosition = numberOfSlides - 1
            }
            else {
                currentPosition --
            }
        }
        else currentPosition = arrow;
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(currentPosition).addClass('active');
        $('#slideInner').animate({
            'marginLeft' : slideWidth*(-currentPosition)
        });
    };

});