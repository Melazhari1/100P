$(function () {
   $('.slides').on('click', '.slide', function () {
     $('.slide').removeClass('active');
     $(this).addClass('active');
   });
});