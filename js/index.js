// Your code goes here

// 1) and 2)
const dynamicImg = document.getElementsByTagName('img');

dynamicImg[1].addEventListener('dblclick', (event) => {
    event.target.src = './img/globe.jpg';
});
dynamicImg[1].addEventListener('mouseleave', (event) => {
    event.target.src = './img/adventure.jpg';
});

dynamicImg[2].addEventListener('dblclick', (event) => {
    event.target.src = './img/rio_de_janeiro.jpg';
});
dynamicImg[2].addEventListener('mouseleave', (event) => {
    event.target.src = './img/fun.jpg';
});

dynamicImg[3].addEventListener('dblclick', (event) => {
    event.target.src = './img/chang_mai.jpg';
});
dynamicImg[3].addEventListener('mouseleave', (event) => {
    event.target.src = './img/destination.jpg';
});

// 3)
const h2 = document.getElementsByTagName('h2');
const welcome = h2[0];
welcome.addEventListener('mouseenter', (event) => {
    event.target.textContent = 'Double click on the images below for fun!';
});
welcome.addEventListener('mouseleave', (event) => {
    event.target.textContent = 'Welcome To Fun Bus!';
});

// 4)
const paragraphs = document.getElementsByTagName('p');
paragraphs[0].addEventListener('mouseover', (event) => {
    event.target.style.color = 'white';
});
paragraphs[0].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});

// 5)
document.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'tomato';
});

// 6) and 7)
const letsGo = h2[1];
letsGo.addEventListener('drag', (event) => {
    event.target.style.fontSize = '6rem';
});
letsGo.addEventListener('dragend', (event) => {
    event.target.style.fontSize = '4rem';
});

// 8)
dynamicImg[1].addEventListener('dragenter', (event) => {
    event.target.style.border = '3px dashed green';
});
dynamicImg[2].addEventListener('dragenter', (event) => {
    event.target.style.border = '3px dashed green';
});
dynamicImg[3].addEventListener('dragenter', (event) => {
    event.target.style.border = '3px dashed green';
});

// 9)
const title = document.getElementsByTagName('h1');
title[0].addEventListener('click', (event) => {
    event.target.style.fontSize = '10rem';
    event.target.style.color = 'yellow';
})

// 10)
document.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'purple';
})


