<?php
    include "config.php";
    $koneksi = new database();
    $username = $_POST['username'];
    $password = $_POST['password'];

    foreach($koneksi->login($username,$password) as $x) {
        session_start();
        $_SESSION["username"] = $username;
        $_SESSION["password"] = $password;
        $akses_id = $x['akses_id'];
        $pass = $x['password'];
        //memeriksa apakah login sebagai admin atau kasir
        if(($akses_id == '1') AND ($password == $pass)) {
            header('Location: halaman_admin.php');
        } else if(($akses_id == '2') AND ($password == $pass)) {
            header('Location: halaman_kasir.php');
        } else {
            header('Location: index.php');
        }
    }
?>