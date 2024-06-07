<?php
    session_start();
    $username = $_SESSION['username'];
    include "config.php";
    $koneksi = new database();

    foreach($koneksi->login($username) as $x) {
        $akses_id = $x['akses_id'];
        if($akses_id == '2') {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="img/cafe.ico" type="image/ico" />
    <title>|| Menu Kasir</title>
</head>
<body>
    <?php
        include "menu_kasir.html";
    ?>
    <div class="container">
        <br><h2>Halaman Kasir</h2></br>
    </div>
</body>
</html>
<?php
        }
        else {
            echo "Anda belum login.";
            header("Location: index.php");
        }
    }
?>