document.addEventListener('DOMContentLoaded',function(){
    const build=document.querySelector(".home");
    build.addEventListener('mouseover',function(){
        build.classList.add('animation1');
    });
    build.addEventListener('mouseout',function(){
        build.classList.remove('animation1');
    });
    const build1=document.querySelector(".about");
    build1.addEventListener('mouseover',function(){
        build1.classList.add('animation1');
    });
    build1.addEventListener('mouseout',function(){
        build1.classList.remove('animation1');
    });
    const build2=document.querySelector(".login");
    build2.addEventListener('mouseover',function(){
        build2.classList.add('animation1');
    });
    build2.addEventListener('mouseout',function(){
        build2.classList.remove('animation1');
    });
    const build3=document.querySelector(".museum");
    build3.addEventListener('mouseover',function(){
        build3.classList.add('animation1');
    });
    build3.addEventListener('mouseout',function(){
        build3.classList.remove('animation1');
        });
    const build4=document.querySelector(".contact");
    build4.addEventListener('mouseover',function(){
        build4.classList.add('animation1');
    });
    build4.addEventListener('mouseout',function(){
        build4.classList.remove('animation1');
    });
    const build5=document.querySelector(".model");
    build5.addEventListener('mouseover',function(){
        build5.classList.add('animation1');
    });
    build5.addEventListener('mouseout',function(){
        build5.classList.remove('animation1');
    });
    const anime=document.querySelector('.model');
    anime.addEventListener('mouseover',function(){
        document.querySelector('header').classList.add('anime1');
    });
    anime.addEventListener('mouseleave',function(){
        document.querySelector('header').classList.remove('anime1');
    });
});