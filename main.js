// document.querySelector('h1').style.color = '#0f0';
// document.querySelector('.header').style.color = '#f33';
// document.querySelector('#header').style.color = "#f99";
// document.querySelector('[href="https://www.google.com"]').style.fontSize = '4em';

var num;
var name;

function myFirstFunction() {
  document.body.style.backgroundColor = '#000';
}

// myFirstFunction()

function simpleConsolePrint() {
  console.log('you just called a function yay');
}

// document.querySelector('#btn').addEventListener('click', simpleConsolePrint)
// document.querySelector('#btn').addEventListener('dblclick', myFirstFunction)

var h1 = document.createElement('h1');
h1.innerHTML = 'hello world';
document.body.appendChild(h1);

var p = document.createElement('p');
p.textContent = 'this paragraph is created in javascript';
document.body.appendChild(p);

function addElementToPage() {
  var h3 = document.createElement('h3');
  h3.textContent = 'i am a text with some styling';
  h3.style.color = '#f44';
  h3.style.fontSize = '3em';
  h3.style.border = '3px dashed';
  document.body.appendChild(h3);
}

function addImage() {
  var image = document.createElement('img')
  image.src = "https://picsum.photos/id/1060/300"
  image.style.border = '2px dotted'
  document.querySelector('#image-holder').appendChild(image)
}


function setDarkMode() {
  document.body.classList.toggle('dark-mode')
  document.querySelector('#modes').innerHTML = 'light mode'
}
