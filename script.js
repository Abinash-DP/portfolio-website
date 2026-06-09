const words = [
    "Full Stack Developer",
    "Java Programmer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const typing = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){
            deleting = false;
            wordIndex =
            (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect,deleting ? 50 : 120);
}

typeEffect();

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const position =
        section.getBoundingClientRect().top;

        const screen =
        window.innerHeight - 100;

        if(position < screen){
            section.style.opacity = "1";
            section.style.transform =
            "translateY(0)";
        }

    });

});

sections.forEach(section=>{

    section.style.opacity = "0";
    section.style.transform =
    "translateY(50px)";
    section.style.transition =
    "all 0.8s ease";

});