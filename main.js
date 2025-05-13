const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

btn.addEventListener("click", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            message.textContent = "Account successfully created!";
            message.classList.add("created");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
            if (errorCode == "auth/email-already-in-use") {
                message.textContent = "This email is already registered!";
            } else if (errorCode == "auth/invalid-email") {
                message.textContent = "The email format is incorrect!";
            } else if (errorCode == "auth/weak-password") {
                message.textContent = "The password must be at least 6 characters!";
            }
        });
});
