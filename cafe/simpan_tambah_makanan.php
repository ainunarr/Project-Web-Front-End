<?php
    include('config.php');
    include('makanan.php');
    $koneksi = new database();

    if(isset($_POST['simpan_tambah_makanan'])) {
        $id = $_POST['id'];
        $nama_makanan = $_POST['nama_makanan'];
        $harga = $_POST['harga'];
    }
?>
