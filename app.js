document.addEventListener(
  'DOMContentLoaded',
  () => {
    const controller = new ScrollMagic.Controller()
    const elements = document.querySelectorAll('.scene-container')

    var scale_tween1 = TweenMax.to('#triggerTwo', 1, {
      transform: 'scale(1.2)',
      ease: Linear.easeNone
    })

    var scale_tween2 = TweenMax.to('#triggerThree', 1, {
      transform: 'scale(1.5)',
      ease: Linear.easeNone
    })

    var scale_tween3 = TweenMax.to('#triggerFour', 1, {
      transform: 'scale(1.2)',
      ease: Linear.easeNone
    })

    const pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#triggerOne',
      triggerHook: 0
    }).setPin('#triggerOne')

    const pinNumber1 = new ScrollMagic.Scene({
      triggerElement: '#triggerTwo',
      triggerHook: 0,
      duration: '80%',
      reverse: true
    }).setTween(scale_tween1)

    const pinNumber2 = new ScrollMagic.Scene({
      triggerElement: '#triggerThree',
      triggerHook: 0,
      duration: '80%',
      reverse: true
    })
      .setPin('#triggerThree', { pushFollowers: true })
      .setTween(scale_tween2)

    const pinNumber3 = new ScrollMagic.Scene({
      triggerElement: '#triggerFour',
      triggerHook: 0,
      duration: '80%',
      reverse: true
    }).setTween(scale_tween3)

    var wipeAnimation = new TimelineMax().fromTo(
      '.work-slider-container',
      1,
      { x: '40%' },
      { x: '-50%', ease: Linear.easeNone }
    ) // in from right

    const pinNumber4 = new ScrollMagic.Scene({
      triggerElement: '#triggerFive',
      triggerHook: 'onLeave',
      duration: '100%'
      // reverse: true
    })
      .setPin('#triggerFive', { pushFollowers: true })
      .setTween(wipeAnimation)

    // elements.forEach(element => {
    //   // const tween = TweenMax.from('.content', 0.3, {
    //   //   autoAlpha: 0,
    //   //   scale: 0.5,
    //   //   y: '+=30',
    //   //   ease: Linear.easeNone
    //   // })

    //   const scene = new ScrollMagic.Scene({
    //     triggerElement: element.querySelector('.project h2'),
    //     triggerHook: 0.9,
    //     reverse: false
    //     // duration: '90%'
    //   })
    //     // .setTween(tween)
    //     .setClassToggle(element.querySelector('.project'), 'fade-in')
    //     // .setPin(element, { pushFollowers: false })
    //     .addIndicators({
    //       name: 'Fade scene',
    //       colorTrigger: 'black',
    //       colorStart: '#fff',
    //       colorEnd: '#eee'
    //     })
    //     .addTo(controller)
    // })

    controller.addScene([pinIntroScene, pinNumber1, pinNumber2, pinNumber3, pinNumber4])
  },
  false
)
