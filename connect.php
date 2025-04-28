<?php
// Connect to database
$conn = mysqli_connect('localhost', 'root', '', 'frenzy'); // Database name is frenzy

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Check if email already exists
$check_query = "SELECT * FROM details WHERE email='$email'";
$result = mysqli_query($conn, $check_query);

if (mysqli_num_rows($result) > 0) {
    // Email already exists
    echo "<script>
            alert('Email already in use. Please sign in.');
            window.location.href = 'index.html'; // back to index.html
          </script>";
} else {
    // Insert new user
    $insert_query = "INSERT INTO details (name, email, password) VALUES ('$name', '$email', '$password')";
    if (mysqli_query($conn, $insert_query)) {
        // Redirect to um.html after successful signup
        header("Location: um.html");
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
