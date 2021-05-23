/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
sasds=document.getElementById("vjffs")
function choose() {
    if( $('#vjffs').css('display') === 'block' ){
        console.log("fhih")
        document.getElementById("vjffs").style.display="none";
      }
      else {
        document.getElementById("vjffs").style.display="block";
        console.log("dhsu")
      }
  }
  
  window.onclick = function(event) {
if (!event.target.matches('#fdgd')) {
    document.getElementById("vjffs").style.display="none";
} else {
    document.getElementById("vjffs").style.display="block";
}
  }


function home(){
    window.location="home.html"
}





  
