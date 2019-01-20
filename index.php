<?php
include 'settings.php';

session_start();
$errorMsg = "";
$validUser = $_SESSION["login"] === true;
if(isset($_POST["loginform"])) {
  $validUser = $_POST["username"] == $username && $_POST["password"] == $password;
  if(!$validUser) $errorMsg = "Invalid username or password.";
  else $_SESSION["login"] = true;
}
if($validUser) {
   header("Location: editor.php"); die();
}
?>

<!DOCTYPE html>
<html>
<head>
  <?php include 'head.php';?>
</head>
<body>
  <div class="login-page">
    <h1 class="text-center">Site admin login</h1>
    <div class="form">
      <form class="login-form" action="" method="post">
        <input type="text" name="username" placeholder="username"/>
        <input type="password" placeholder="password" id="password" name="password"/>
        <div class="login-error"><?= $errorMsg ?></div>
        <button type="submit" name="loginform">Login</button>
      </form>
    </div>
  </div>
</body>
</html>