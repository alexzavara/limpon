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
    


  const animItems = document.querySelectorAll('.facts__item-num')
  let animItemOffset0 = 0

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index]
            let animItemHeight = animItem.offsetHeight
            let animItemOffset = offset(animItem).top
            const animStart = 4
            let animItemStart = +animItem.innerHTML
            const animItemMax = +animItem.dataset.max
            const media339 = 339
            const media800 = 800
            let winInWidth = window.innerWidth
            const diferenseWidth800 = winInWidth <= media800
            const diferenseWidth339 = winInWidth <= media339
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            

            if (animItem == animItems[0]) {
              animItemOffset0 = animItemOffset
            }

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if (((animItem == animItems[2]) || (animItem == animItems[3])) && diferenseWidth800){
                    animItemOffset = animItemOffset0
                }
              
            if ((animItem == animItems[0]) && diferenseWidth339){
                    animItemOffset = animItemOffset0
                }
            if ((animItem == animItems[1]) && diferenseWidth339){
                    animItemOffset = animItemOffset0
                }
            if ((animItem == animItems[2]) && diferenseWidth339){
                    animItemOffset = animItemOffset0
                }
            if ((animItem == animItems[3]) && diferenseWidth339){
                    animItemOffset = animItemOffset0
                }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {

                this.removeEventListener('scroll', animOnScroll)

                if (animItem == animItems[0]){
                  $('#num_1').animate({ num: 53 - 3 }, {
                    duration: 5000,
                    step: function (num){
                        this.innerHTML = (num + 3).toFixed(0) + "K"
                    }
                  })
                } else if (animItem == animItems[1]) {
                  $('#num_2').animate({ num: 10 - 3 }, {
                    duration: 5000,
                    step: function (num){
                        this.innerHTML = (num + 3).toFixed(0) + "K"
                    }
                  })
                } else if (animItem == animItems[2]) {
                  $('#num_3').animate({ num: 12 - 3 }, {
                    duration: 5000,
                    step: function (num){
                        this.innerHTML = (num + 3).toFixed(0) + "K"
                    }
                  })
                } else if (animItem == animItems[3]) {
                  $('#num_4').animate({ num: 120 - 3 }, {
                    duration: 5000,
                    step: function (num){
                        this.innerHTML = (num + 3).toFixed(0) + "K"
                    }
                  })
                }    
            } 
        }
    }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

    

    
})





