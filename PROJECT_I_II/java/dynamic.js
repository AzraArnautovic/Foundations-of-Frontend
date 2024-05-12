function openModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Display the modal
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


$(document).ready(function () {
  // Adding custom method to check password strength
  $.validator.addMethod("strongPassword", function(value, element) {
      return this.optional(element) || zxcvbn(value).score >= 3;
  }, "Password is too weak");

  // Initializing form validation
  $("#contactForm").validate({
      rules: {
          name: "required",
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              strongPassword: true, // Using custom method for password strength
              minlength: 8 // Minimum password length
          },
          message: "required"
      },
      messages: {
          name: "Please enter your name",
          email: {
              required: "Please enter your email address",
              email: "Please enter a valid email address"
          },
          password: {
              required: "Please enter a password",
              minlength: "Password must be at least 8 characters long"
          },
          message: "Please enter your message"
      },
      errorElement: "span",
      errorPlacement: function(error, element) {
          error.addClass("invalid-feedback");
          element.closest(".form-row").append(error);
      },
      highlight: function(element, errorClass, validClass) {
          $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function(element, errorClass, validClass) {
          $(element).addClass("is-valid").removeClass("is-invalid");
      },
      submitHandler: function (form) {
          try {
              // Block UI on form submission
              $.blockUI({
                  message: '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'
              });
              // Submit form data (you can add AJAX here if needed)
              setTimeout(function () {
                  console.log('Form submitted');
                  // Reset the form
                  $(form)[0].reset();
                  // Unblock UI after request is complete
                  $.unblockUI();
              }, 3000);
          } catch (error) {
              console.error('Error in submitHandler:', error);
              alert('An error occurred. Please try again later.');
              // Unblock UI after request is complete
              $.unblockUI();
          }
      }
  });

  // Update password strength indicator
  $("#password").on("input", function() {
      var result = zxcvbn($(this).val());
      $("#password-strength").html("Password strength: " + result.score + "/4");
  });
});
