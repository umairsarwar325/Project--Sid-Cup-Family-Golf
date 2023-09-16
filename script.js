var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ 20 +"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x- 200  +"px";
    blur.style.top = dets.y- 200 +"px";
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    val.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})


gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        triger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }  
});


gsap.to("#main",{
    backgroundColor : "black",
    scrollTrigger:{
        tigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub:2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:2,
    }
})
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 90%",
        scrub:3,
    }
})



