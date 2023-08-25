document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");

    // Load existing user details from local storage and populate the UI
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
    renderUserList(storedUserDetails);

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            const newUser = {
                name: name,
                email: email
            };

            storedUserDetails.push(newUser);

            localStorage.setItem("userDetails", JSON.stringify(storedUserDetails));

            renderUserList(storedUserDetails); // Update the UI with the new user

            alert("User details saved to local storage!");
        } else {
            alert("Please fill in all fields");
        }
    });

    function renderUserList(users) {
        userList.innerHTML = ""; // Clear the existing list

        users.forEach(function (user, index) {
            const userDiv = document.createElement("div");
            userDiv.className = "user-entry";

            const nameElement = document.createElement("span");
            nameElement.textContent = user.name;

            const emailElement = document.createElement("span");
            emailElement.textContent = user.email;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                storedUserDetails.splice(index, 1); // Remove the user from the array
                localStorage.setItem("userDetails", JSON.stringify(storedUserDetails)); // Update local storage
                renderUserList(storedUserDetails); // Update the UI
            });

            userDiv.appendChild(nameElement);
            userDiv.appendChild(emailElement);
            userDiv.appendChild(deleteButton);

            userList.appendChild(userDiv);
        });
    }
});


