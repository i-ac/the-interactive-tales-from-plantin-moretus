
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let tlSurgery,tlStab;

{
  const setAnimationScroll = () => {

    tlStab = gsap.timeline({
      scrollTrigger: {
        trigger: '.trouble__text',
        start: '20% center',
        end: 'bottom 45%',
        scrub: 1,
        markers: false,
        toggleActions: "play pause resume reset"
      }
    });

    tlStab.add([
      gsap.from(".scroll-animation__overlay",{
        y: -50,
        duration: 1
      }),
      gsap.fromTo(".scroll-animation__sword",{
        opacity:0,
        x: 100,
        y: -300,
      },
      {
        opacity:1,
        x: 0,
        y: 0,
        duration:4
      }),
      gsap.fromTo(".scroll-animation__vectors #stitch_1, .scroll-animation__vectors #stitch_2,.scroll-animation__vectors #stitch_3,.scroll-animation__vectors #stitch_4, .scroll-animation__vectors #plantin_tear_1,.scroll-animation__vectors #plantin_tear_2, .scroll-animation__vectors #plantin_tear_3",{
        opacity:1,
      },
      {
        opacity:0,
        duration:0.5
      })
    ]);

    tlSurgery = gsap.timeline({
      scrollTrigger: {
        trigger: '.part-one__scroll-animation',
        start: 'start center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
        toggleActions: "play pause resume reset"
      }
    })

    tlSurgery.add([
      gsap.fromTo(".scroll-animation__sword",{
        opacity:1,
        x: 0,
        y: 0,
      },
      {
        opacity:0,
        x: 100,
        y: -300,
        delay: 0,
        duration:4
      }),
      gsap.fromTo(".scroll-animation__blood",{
        opacity:0,
        y: 50
      },
      {
        opacity:1,
        y: 0,
        delay:0,
        duration:1
      }),
      gsap.fromTo(".scroll-animation__vectors #drops",{
          opacity:0,
          y:-50
        },
        {
          opacity:1,
          y:0,
          delay:0.5,
          duration:2
        })
    ])
    .add([
      gsap.set(".scroll-animation__sword",{
        opacity:0,
        x: 100,
        y: -300,
      }),
      gsap.fromTo(".scroll-animation__vectors #drops",{
        opacity:1,
      },
      {
        opacity:0,
        delay:0,
        duration:1
      }),
      gsap.to(".scroll-animation__vectors #plantin_tear_1",{
        opacity:1,
        delay:0.25,
        duration: 0.5
      }),
      gsap.to(".scroll-animation__vectors #plantin_tear_2",{
        opacity:1,
        delay:0.5,
        duration: 0.5
      }),
      gsap.to(".scroll-animation__vectors #plantin_tear_3",{
        opacity:1,
        delay:0.75,
        duration: 0.5
      }),
      gsap.to(".scroll-animation__vectors #stitch_1, .scroll-animation__vectors #stitch_2,.scroll-animation__vectors #stitch_3,.scroll-animation__vectors #stitch_4",{
        opacity:1,
        delay:0,
        duration: 1
      }),
    ]);
  }

  const init = () => {
    console.log('Scrollytelling initialized');
    gsap.registerPlugin(ScrollTrigger);
  //gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);



    setAnimationScroll();
  };

  init();

}

