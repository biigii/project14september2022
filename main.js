var age = 30; // number
var name = 'Tom'; // string
var isDisabled = false; // boolean
var isDarkTheme = true; // boolean

var fruit = 'apple';
var fruits = ['apple', 'orange', 'kiwi', 'strawberry']; //array
var numbers = [1, 10, 7, 100001, 56, 96];

// function doFruits(thing) {
//   console.log(thing)
// }
// fruits.forEach(doFruits)

// fruits.forEach(function (text) {
//   var li = document.createElement('li')
//   li.textContent = text
//   li.style.border = '2px solid';
//   li.style.margin = '10px'
//   li.style.listStyleType = 'none'
//   li.style.padding = '5px';
//   document.querySelector('ul').appendChild(li)
// });

var images = [
  'https://picsum.photos/id/1040/200',
  'https://picsum.photos/id/1041/200',
  'https://picsum.photos/id/1042/200',
  'https://picsum.photos/id/1043/200',
  'https://picsum.photos/id/1044/200',
  'https://picsum.photos/id/1045/200',
  'https://picsum.photos/id/1047/200',
  'https://picsum.photos/id/1050/200',
  'https://picsum.photos/id/1051/200',
  'https://picsum.photos/id/1052/200',
  'https://picsum.photos/id/1053/200',
  'https://picsum.photos/id/1054/200',
  'https://picsum.photos/id/1055/200',
  'https://picsum.photos/id/1057/200',
  'https://picsum.photos/id/1062/200',
  'https://picsum.photos/id/1063/200',
  'https://picsum.photos/id/1064/200',
  'https://picsum.photos/id/1065/200',
  'https://picsum.photos/id/1067/200'
];

function addImage() {
  images.forEach(function (link) {
    var image = document.createElement('img');
    image.src = link;
    document.querySelector('figure').appendChild(image);
  });
}

// var name = 'John'
// var surname = 'Doe'

// var fullname = name + ' ' + surname;
// console.log(fullname)


// console.log(1000 + 3000)
// console.log('hello world' + '!')
// console.log('hello' + 3000) 

for (var i = 1; i < 100; i++) {
  var image = document.createElement('img');
  image.src = 'https://picsum.photos/id/' + i + '/200';
  document.body.appendChild(image)
}
