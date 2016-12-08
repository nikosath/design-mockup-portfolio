// Get the modal
var modal = document.getElementById('projectModal');
var modalImg = document.getElementById('modal-img');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$(".project-img").on("click", function (event) {
  // $(this) will be refer to button which was clicked
  console.log($(this).src);
  var id = $(this).attr("id");

  var src = $(this).attr("src");
  modalImg.setAttribute("src", src);
  //  document.getElementById(id).attr("src");
  console.log(src);
  // document.getElementsByClassName('modal-img').src = $(this).attr("src");
  modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
