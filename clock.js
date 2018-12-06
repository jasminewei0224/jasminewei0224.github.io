window.onload = function(){
  var img = document.querySelector("#pie1")

  console.log(img)

  var date = new Date()

  function change(){
    // if(date.getSeconds<=12){
      console.log("updated")
      console.log(img);
      img.src = "pie"+date.getHours() + ".png"
    //}
  }
  setTimeout(change(),1000);
}
