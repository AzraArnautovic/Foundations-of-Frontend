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


$(document).ready(function() {
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
          strongPassword: true
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
          required: "Please enter a password"
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
      }
    });
  
    // Update password strength indicator
    $("#password").on("input", function() {
      var result = zxcvbn($(this).val());
      $("#password-strength").html("Password strength: " + result.score + "/4");
    });
  });
  