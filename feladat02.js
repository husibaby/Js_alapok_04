function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;

    // Felhasználónév validáció
    if (username.length < 5 || username.length > 16) {
        alert("A felhasználónévnek 5 és 16 karakter között kell lennie.");
        return;
    }

    // Jelszó validáció
    if (password.length < 5) {
        alert("A jelszónak legalább 5 karakterből kell állnia.");
        return;
    }

    if (password !== confirmPassword) {
        alert("A két jelszó nem egyezik meg.");
        return;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{5,}$/)) {
        alert("A jelszónak tartalmaznia kell kisbetűt, nagybetűt, számot és speciális karaktert.");
        return;
    }

    // Email validáció
    if (!validateEmail(email)) {
        alert("A megadott email cím nem érvényes.");
        return;
    }

    // Ha minden validáció sikeres, készítsünk egy objektumot és írjuk ki a konzolra
    const user = {
        username,
        password,
        email,
        birthdate
    };

    console.log("Regisztrációs adatok:", user);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}