// slider-start
// var count = 1;
// var $slider = $(".slider");
// var slides = $slider.children();
// console.log(slides);
// var slideCount = $slider.children().length;

// setInterval(function () {
//   $slider.animate(
//     {
//       marginLeft: "-=1000px",
//     },
//     400,
//     function () {
//       count++;
//       if (count === slideCount) {
//         count = 1;
//         $(this).css("margin-left", "0px");
//       }
//     }
//   );
// }, 2000);


var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;

  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 1000);
// slider-Ends
