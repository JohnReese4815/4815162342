$(function() {
  $('.mobile-menu').hide();
  $('.fa-sort-amount-down').on('click', function(){
    $('.mobile-menu').slideToggle(1000);
  })
  
  $('.fa-sort-amount-down').on('click', function(){
    $('.fas').toggleClass('fa-sort-amount-up-alt');
})

  $('.order-us-container').hide();
  $('.order').on('click', function(){
    $('.order-us-container').slideToggle(1000);
    })

  $('.fa-times-circle').on('click', function(){
    $('.order-us-container').slideToggle(1000);
  })

  function transform() {
    $('.transform-1').toggleClass('js-transform-1');
    $('.transform-2').toggleClass('js-transform-2');
    $('.transform-3').toggleClass('js-transform-3');
    $('.transform-4').toggleClass('js-transform-4');
    $('.transform-5').toggleClass('js-transform-5');
    
            }
        setInterval(transform, 2000);



  
  
})


