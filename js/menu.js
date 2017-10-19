// $(document).ready(function() {
//   $('.icon-one').click(function() {
//     $('.icon-one').toggleClass('active-one');
//   });
//   $('.icon-two').click(function() {
//     $('.icon-two').toggleClass('active-two');
//   });
//   $('.icon-three').click(function() {
//     $('.icon-three').toggleClass('active-three');
//   });
// })

function menu() {
	var icon = document.getElementById('icon');
	if (icon.className === "icon-three") {
          icon.className += " active-three";
      } else {
          icon.className = "icon-three";
      }
}