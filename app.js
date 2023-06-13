document.addEventListener("DOMContentLoaded", function() {
  
const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function(){
        loader.style.display = "none";
    }, 500);
})

});


