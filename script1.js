// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");

    // Event listener for form submission
    userForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            // Create an object to store the user details
            const userDetails = {
                name: name,
                email: email
            };

            // Store the user details object in local storage
            localStorage.setItem("userDetails", JSON.stringify(userDetails));

            alert("User details saved to local storage!");
        } else {
            alert("Please fill in all fields");
        }
    });
});

