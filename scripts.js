// Function to open the modal
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
  
    modal.style.display = "fixed";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
  // Close the modal when clicking outside of the image
  window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Contact form submission handling
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Message sent successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  