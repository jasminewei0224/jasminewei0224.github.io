window.addEventListener("resize, onWindowResize")

function onWindowResize(){
  console.log(Window.innerwidth,
  window.innerHeight)

  var r = window.innerwidth/4
  var g = window.innerHeight/4
  var b = 255

  document.body.style.backgroundColor = "rgb(" + r +"," + g + "," + b + ")"
}
