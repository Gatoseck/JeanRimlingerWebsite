//setTimeout(

function lazy(){
var images = document.querySelectorAll("[data-src]");

function preloadImage(img){
  var src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
}

var imgOptions = {
  root : null,
  threshold:0,
  rootMargin: "0px 0px 0px 0px"
};


var imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }else {
      console.log(entry.target);
      entry.target.classList.remove('blur');
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});
}//,3000);
