var box = document.querySelector("#box")

document.addEventListener("mousemove", onMouseMove)

function onMouseMove(evt){
  // get the movement X/Y properties from addEventListener
  var X = Evt.X
  var y = evt.Y

  console.log(x,y)

  // connect those values to top / left CSS of box
  box.style. left = x + "px"
  box.style.top = y+"px"
}
