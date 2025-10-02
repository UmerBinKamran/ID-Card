function generateID() {
  // Get input values
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var contact = document.getElementById("contact").value;
  var course = document.getElementById("course").value;

  // Put values inside ID card
  document.getElementById("idName").textContent = name;
  document.getElementById("idRoll").textContent = roll;
  document.getElementById("idContact").textContent = contact;
  document.getElementById("idCourse").textContent = course;

  document.getElementById("idCard").style.display = "block";
}
//Get Image

function submitPhoto() {
  var file = document.getElementById("file");
  var image = document.getElementById("image");
  image.src = URL.createObjectURL(file.files[0]);
  image.style.display = "block";
}
