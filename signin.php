<?php
// Connect to database
$conn = mysqli_connect('localhost', 'root', '', 'frenzy');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form values
$email = $_POST['email'];
$password = $_POST['password'];

// Verify credentials
$check_query = "SELECT * FROM details WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $check_query);

if (mysqli_num_rows($result) > 0) {
    // Successful login
    header("Location: um.html");
    exit();
} else {
    // Login failed
    echo "<script>
            alert('Invalid Email or Password!');
            window.location.href = 'index.html'; // back to login
          </script>";
}

mysqli_close($conn);
?>
