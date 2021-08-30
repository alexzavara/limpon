$(document).ready(function() {
    $('.burger-btn').on('click', function(event){
        event.preventDefault()
        $(this).toggleClass('burger-btn_active')
        $('.nav__menu').toggleClass('nav__menu_active')
        $('body').toggleClass('body__lock')
    })

    $('.team__slider').slick({
        arrows: false
    })

    $('.sponsors__slider').slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 801,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
              breakpoint: 481,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    })

    $('.clients__slider').slick({
      arrows: false,
      responsive: [
          {
              breakpoint: 801,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
      ]
    })

    $('.plans__slider').slick({
      arrows: false,
      responsive: [
          {
              breakpoint: 801,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
      ]
    })
    

    $('#num_1').animate({ num: 53 - 3 }, {
      duration: 5000,
      step: function (num){
          this.innerHTML = (num + 3).toFixed(0) + "K"
      }
    })
    $('#num_2').animate({ num: 10 - 3 }, {
      duration: 5000,
      step: function (num){
          this.innerHTML = (num + 3).toFixed(0) + "K"
      }
    })
    $('#num_3').animate({ num: 12 - 3 }, {
      duration: 5000,
      step: function (num){
          this.innerHTML = (num + 3).toFixed(0) + "K"
      }
    })
    $('#num_4').animate({ num: 120 - 3 }, {
      duration: 5000,
      step: function (num){
          this.innerHTML = (num + 3).toFixed(0) + "K"
      }
    })


})