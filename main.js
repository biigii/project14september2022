function getText() {
  var value = document.querySelector('[type="text"]').value;
  var h1 = document.querySelector('h1')
  h1.textContent = value;
}
