document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            // Retrieve existing user details array from local storage or initialize an empty array
            const storedUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

            // Create a new user object
            const newUser = {
                name: name,
                email: email
            };

            // Add the new user object to the existing array
            storedUserDetails.push(newUser);

            // Store the updated array back in local storage
            localStorage.setItem("userDetails", JSON.stringify(storedUserDetails));

            alert("User details saved to local storage!");
        } else {
            alert("Please fill in all fields");
        }
    });
});

