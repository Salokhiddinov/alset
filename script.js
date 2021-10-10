const arrowLeft = document.querySelector('.left-arrow');
const arrowRight = document.querySelector('.right-arrow');

const modelS = document.querySelector('.model-s');
const model3 = document.querySelector('.model-3');
const modelX = document.querySelector('.model-x');
const modelY = document.querySelector('.model-y');
const modelPlaid = document.querySelector('.model-plaid');



let slideNum = 1;
console.log(slideNum);



function hideAll () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
}

function showAll () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
}

// function fadeIn (className) {
//     for (let i = 100; i >= 1; i--){
//         setTimeout(2){
//         document.getElementById(`.${className}`).style.opacity = `${i}%`
//     }
// }




arrowRight.addEventListener('click', function () {
    if(slideNum < 5) {
        hideAll();
        slideNum++;
        showAll();
    }
})

arrowLeft.addEventListener('click', function () {
    if(slideNum > 1) {
        hideAll();
        slideNum--;
        showAll();

    }
})

modelS.addEventListener('click', function () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    
    slideNum = 1;
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;

})

model3.addEventListener('click', function () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    slideNum = 2;
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
})

modelX.addEventListener('click', function () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    slideNum = 3;
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
})

modelY.addEventListener('click', function () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    slideNum = 4;
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
})

modelPlaid.addEventListener('click', function () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    slideNum = 5;
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
})

