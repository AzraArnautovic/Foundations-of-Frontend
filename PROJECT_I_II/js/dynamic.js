
$(document).ready(function() {
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

    // Load FAQ data from JSON file and display in the accordion
    function loadFAQs() {
        fetch('faqs.json')
            .then(response => response.json())
            .then(data => {
                // Clear existing content in the accordion
                accordion.innerHTML = '';

                data['faqs'].forEach(faq => {
                    const item = document.createElement('div');
                    item.classList.add('accordion-item');

                    const title = document.createElement('div');
                    title.classList.add('accordion-title');
                    title.textContent = faq.question;

                    const content = document.createElement('div');
                    content.classList.add('accordion-content');
                    content.textContent = faq.answer;

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
    }

    // Initial load of FAQs
    loadFAQs();

    // Edit and Delete options
    const editButton = document.getElementById('edit-btn');
    const deleteButton = document.getElementById('delete-btn');
    const successMessage = document.getElementById('success-message');

    // Event listener for Edit button
    editButton.addEventListener('click', function() {
        // Simulate editing functionality (e.g., show form for editing)
        const newQuestion = prompt("Enter the new question:");
        const newAnswer = prompt("Enter the new answer:");

        if (newQuestion && newAnswer) {
            console.log('Editing...');
            // Show success message
            showSuccessMessage();
        }
    });

    // Event listener for Delete button
    deleteButton.addEventListener('click', function() {
        // Prompt user to confirm deletion
        if (confirm('Are you sure you want to delete this entity?')) {
            console.log('Deleting...');
            // Remove content from the accordion (this should be handled based on specific logic, here it clears all)
            accordion.innerHTML = '';
            // Show success message
            showSuccessMessage();
        }
    });

    // Function to show success message
    function showSuccessMessage() {
        toastr.success('Operation completed successfully!');
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


//api
document.addEventListener("DOMContentLoaded", () => {
    let searchButton = document.querySelector("#search");

    searchButton.addEventListener("click", async (event) => {
        event.preventDefault(); // Prevent form submission
        console.log("button pressed");
        // Retrieve the value of the search input field directly
        let query = document.querySelector("#search-input").value.trim();
        // Check if the query is not empty before sending the API request
        if (query !== "") {
            await sendApiRequest(query); // Pass the query to the sendApiRequest function
        } else {
            console.log("Search query is empty.");
        }
    });
    

    // Define the sendApiRequest function to fetch data from the API
    async function sendApiRequest(query) {
        let API_ID = "6e4063e4";
        let API_KEY = "b273bdeedfc397f32f20b1e7f1332ecf";
        let response = await fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${query}`);
        let data = await response.json();
        useApiData(data);
    }

    // Define the useApiData function to handle the API response
    function useApiData(data) {
        let recipes = data.hits; // Get an array of recipes from the API response
        let content = ""; // Initialize an empty string to store HTML content
        // Loop through each recipe and create HTML for it
        recipes.forEach(recipe => {
            content += `
                <div class="card" style="width: 18rem;">
                    <img src="${recipe.recipe.image}" class="card-img-top" alt="${recipe.recipe.label}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.recipe.label}</h5>
                        <p class="card-text">Ingredients: ${recipe.recipe.ingredients.map(ingredient => ingredient.text).join(', ')}</p>
                        <a href="${recipe.recipe.url}" class="btn btn-primary" target="_blank">View Recipe</a>
                    </div>
                </div>
            `;
        });
        // Display the HTML content in the #content element
        document.querySelector("#content").innerHTML = content;
    }
});
});

