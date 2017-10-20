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
	var body = document.getElementById('side-menu');

	if (icon.className === "icon-three") {
    icon.className += " active-three";
  } else {
    icon.className = "icon-three";
  }

  if (body.className === "hide") {
    body.className += " body-menu";
  } else {
    body.className = "hide";
  }
}