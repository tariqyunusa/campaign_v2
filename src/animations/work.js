import gsap from "gsap";



export const nextSeq = (headlinerRef, setIndex, Slider) => {
    const tl = gsap.timeline()
    tl.to('.work___info_header', {
        y: 200,
        duration: 1,
        ease: "power2.inOut",
      })
      .to('.work___roles_paragraph', {
        y: -800,
        duration: 1,
        ease: "power2.inOut",
      }, "-=1")
      .to(headlinerRef.current, {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIndex((currentIndex) => (currentIndex + 1) % Slider.length);
        },
      })
      .to('.work___roles_paragraph', {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "-=1");
}
    export const prevSeq = (headlinerRef, setIndex, Slider) => {
        const tl = gsap.timeline();

        tl.to('.work___info_header', {
          y: -200,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            setIndex((currentIndex) => (currentIndex === 0 ? Slider.length - 1 : currentIndex - 1));
          },
        })
        .to('.work___roles_paragraph', {
          y: 200,
          duration: 1,
          ease: "power2.inOut",
        }, "-=1")
        .to(headlinerRef.current, {
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        .to('.work___roles_paragraph', {
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        }, "-=1");
    }
    export const handleIndexChange = (e, centerX, headlinerRef, setIndex, Slider) => {
        const tl = gsap.timeline();
      
        if (e.clientX >= centerX) {
        
          tl.to('.work___info_header', {
            y: 200,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => nextIndexAnimation(headlinerRef, setIndex, Slider),
          })
          .to('.work___roles_paragraph', {
            y: -800,
            duration: 1,
            ease: "power2.inOut",
          }, "-=1")
          .to(headlinerRef.current, {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          })
          .to('.work___roles_paragraph', {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          }, "-=1");
        } else {
         
          tl.to('.work___info_header', {
            y: -200,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => prevIndexAnimation(headlinerRef, setIndex, Slider),
          })
          .to('.work___roles_paragraph', {
            y: 200,
            duration: 1,
            ease: "power2.inOut",
          }, "-=1")
          .to(headlinerRef.current, {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          })
          .to('.work___roles_paragraph', {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          }, "-=1");
        }
      };
   
   
      