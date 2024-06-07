<?php
    class database {
        var $host = "localhost";
        var $username = "root";
        var $password = "";
        var $database = "cafe";
        var $koneksi = "";

        function __construct() {
            $this->koneksi = mysqli_connect($this->host, $this->username, $this->password, $this->database);
            if (mysqli_connect_error()) {
                echo "Koneksi database gagal : " . mysqli_connect_error();
            }
        }

        function format_uang($angka) {
            return number_format($angka, 0, ',', '.');
        }

        function terbilang($angka) {
            $angka = abs($angka);
            $baca = array('', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas');
            $terbilang = '';

            if($angka < 12) { //1 - 11
                $terbilang = ' ' . $baca[$angka];
            } elseif($angka < 20) { //12 - 19
                $terbilang = terbilang($angka -10) . ' belas';
            } elseif($angka < 100) { //20 - 99
                $terbilang = terbilang($angka / 10) . ' puluh' . terbilang($angka % 10);
            } elseif($angka < 200) { //100 - 199
                $terbilang = ' seratus' . terbilang($angka -100);
            } elseif($angka < 1000) { //200 - 999
                $terbilang = terbilang($angka / 100) . ' ratus' . terbilang($angka % 100);
            } elseif($angka < 2000) { //1000 - 1.999
                $terbilang = ' seribu' . terbilang($angka -1000);
            } elseif($angka < 1000000) { //2000 - 999.999
                $terbilang = terbilang($angka / 1000) . ' ribu' . terbilang($angka % 1000);
            } elseif($angka < 1000000000) { //1000000 - 999.999.999
                $terbilang = terbilang($angka / 1000000) . ' juta' . terbilang($angka % 1000000);
            }
            return $terbilang;
        }

        function tanggal_indonesia($tgl, $tampil_hari = true) {
            $nama_hari = array(
                'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
            );
            $nama_bulan = array(1 => 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 
                'September', 'Oktober', 'November', 'Desember'
            );

            $tahun      = substr($tgl, 0, 4);
            $bulan      = $nama_bulan[(int) substr($tgl, 5, 2)];
            $tanggal    = substr($tgl, 8, 2);
            $text       = '';

            if($tampil_hari) {
                $urutan_hari = date('w', mktime(0,0,0, substr($tgl, 5, 2), $tanggal, $tahun));
                $hari        = $nama_hari[$urutan_hari];
                $text       .= "$hari, $tanggal $bulan $tahun";
            } else {
                $text       .= "$tanggal $bulan $tahun";
            }            
            return $text;
        }

        function login($username) {
            $data = mysqli_query($this->koneksi, "SELECT * FROM login WHERE username = '$username'");
            if(mysqli_num_rows($data) == 0) {
                echo "<b>Data User Tidak Ditemukan</b>";
                $hasil = [];
                header('location:index.php');
            } else {
                while($row = mysqli_fetch_array($data)) {
                    $hasil[] = $row;
                }
            }
            return $hasil;
        }

        // function tambah_makanan($nama_makanan) {
        //     $data = mysqli_query($this->koneksi, "INSERT INTO makanan VALUES ('', 'nama_makanan', 'harga')");
        // }

        function tampil_makanan() {
            $data = mysqli_query($this->koneksi, "SELECT * FROM makanan");
            while($row = mysqli_fetch_array($data)) {
                $hasil[] = $row;
            }                   
            return $hasil;
        }

        function tambah_minuman($nama_minuman) {
            $data = mysqli_query($this->koneksi, "INSERT INTO minuman VALUES ('', 'nama_minuman', 'harga')");
        }

        function tampil_minuman() {
            $data = mysqli_query($this->koneksi, "SELECT * FROM minuman");
            while($row = mysqli_fetch_array($data)) {
                $hasil[] = $row;
            }                   
            return $hasil;
        }

    }
?>