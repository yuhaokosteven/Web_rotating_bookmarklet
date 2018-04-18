// console.log("hello extension");
//
// $('body').css({
//   'background-color': 'red'
// });

var title = document.getElementsByTagName("li");


for (var i = 0; i < title.length; i++) {

  title[i].addEventListener("mouseover", function(event) {
    event.target.style.transition = ('5s');
    event.target.style.transform = 'rotate(720deg)';
    setTimeout(function() {
      event.target.style.transition = ('0s');
      event.target.style.transform = 'rotate(0deg)';
    }, 5000);
  });

}
