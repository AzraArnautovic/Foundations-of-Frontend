

$(document).ready(function () {
    // Function to initialize form validation
    function initFormValidation() {
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
                        toastr.success('Form submitted');
                        // Reset the form
                        $(form)[0].reset();
                        // Re-initialize form validation
                        initFormValidation();
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
    }

    // Call the function to initialize form validation
    initFormValidation();
});

  // Update password strength indicator
  $("#password").on("input", function() {
      var result = zxcvbn($(this).val());
      $("#password-strength").html("Password strength: " + result.score + "/4");
  });



$(document).ready(function() {
    const accordion = document.getElementById('accordion');

    // Load FAQ data from JSON file
    fetch('faqs.json')
        .then(response => response.json())
        .then(data => {
            data['faqs'].forEach(faq => {
                const item = document.createElement('div');
                item.classList.add('accordion-item');

                const title = document.createElement('div');
                title.classList.add('accordion-title');
                title.textContent = faq.question;

                const content = document.createElement('div');
                content.classList.add('accordion-content');
                content.textContent = faq.answer;

                const accordion = document.createElement('div')

                // Initially hide the content
                content.style.display = 'none';

                // Add click event listener to toggle content
                title.addEventListener('click', function() {
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                });

                item.appendChild(title);
                item.appendChild(content);
                accordion.appendChild(item);
            });
        })
        .catch(error => console.error('Error loading FAQ data:', error));

    //Edit and Delete options

    // Fetch JSON data containing the entity
    fetch('faqs.json')
        .then(response => response.json())
        .then(entity => {
            const editButton = document.getElementById('edit-btn');
            const deleteButton = document.getElementById('delete-btn');
            const successMessage = document.getElementById('success-message');
            // Display the entity information on the webpage
            displayEntity(entity['faqs']);
            console.log(entity)

            // Event listener for Edit button
            editButton.addEventListener('click', function() {
                // Simulate editing functionality (e.g., show form for editing)
                console.log('Editing...');
                // Show success message
                showSuccessMessage();
            });

            // Event listener for Delete button
            deleteButton.addEventListener('click', function() {
                // Prompt user to confirm deletion
                if (confirm('Are you sure you want to delete this entity?')) {
                    // Simulate deletion functionality
                    console.log('Deleting...');
                    // Remove entity from webpage
                    document.getElementById('entity-info').innerHTML = '';
                    // Show success message
                    showSuccessMessage();
                }
            });
        })
        .catch(error => console.error('Error fetching entity data:', error));

    // Function to display the entity information on the webpage
    function displayEntity(entity) {
            const entityInfo = document.getElementById('entity-info');
             // Display entity information 
             entityInfo.innerHTML = entity.map((e)=> {
                 console.log(e);
                 return `<div id="hero"><p><strong>Question:</strong> ${e.question}</p>    
             <p><strong>Answer:</strong> ${e.answer}</p></div>`}).join(''); // Join the array into a single string;
    }

    // Function to show success message
    function showSuccessMessage() {
        toastr.success('Great')
       // successMessage.style.display = 'block';
        // Hide success message after 3 seconds
        
    }
});

// Function to open the modal with the clicked image
function openModal(imagePath) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imagePath;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


