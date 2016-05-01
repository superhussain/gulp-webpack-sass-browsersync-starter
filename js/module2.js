console.log('this is module2.....');

var div = document.createElement('DIV');
// Add height to Element
div.style.height = '100vh';
// Append Element to DOM
document.body.appendChild(div); 
// Add Event Listener
div.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ', ' + y;
  div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});
