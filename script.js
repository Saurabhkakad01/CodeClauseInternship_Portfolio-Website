/* Project section */

function openProject(projectId) {
  const projectContent = document.getElementById("project-content");
  const projectDetails = document.getElementById("project-details");

  projectContent.innerHTML = `<h2>${projectId}</h2><p>This is a placeholder for project</p>`;
  projectDetails.style.display = "flex";
}

function closeProject() {
  const projectDetails = document.getElementById("project-details");
  projectDetails.style.display = "none";
}

/* Contact section */
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields must be filled out");
  } else {
    displaySuccessMessage();
  }
}

function displaySuccessMessage() {
  var successMessage = document.getElementById("successMessage");
  successMessage.innerHTML =
    "Thank you for contacting us! We'll get back to you soon.";
  document.getElementById("contactForm").reset();
}
