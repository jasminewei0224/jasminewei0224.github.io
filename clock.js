var img = document.querySelector("pie1")

//console.log(img.src)

var date = new Date()

function change(){
  // if(date.getSeconds<=12){
    console.log("updated")
    img.src = "pie"+date.getHours() + ".png"
  //}
}
setTimeout(change(),1000);
