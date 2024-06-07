<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/logo.ico" type="image/ico" />
    <title>Kategori || Minuman</title>
</head>
<body>
    <?php
        include('config.php');
        include "menu_admin.html";
        $koneksi = new database();
    ?>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <section class="content-header">
            <h1>
                Menampilkan Kategori Minuman
            </h1>
            <ol class="breadcrumb">
                <li><a href="halaman_admin.php"><i class="fa fa-pie-chart"></i>Kategori</a></li>
                <li class="active">Minuman</li>
            </ol>
        </section><br>
        <!-- Trigger the modal with a button -->
        <center><button type="button" class="btn btn-info btn-sm mt-10" data-toggle="modal" data-target="#myModal">Tambah Menu</button></center>
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Tambah Minuman</h4>
                    </div>
                    <div class="modal-body">
                        <input type="text" class="form-control" placeholder="Tambah Menu Minuman">
                        <div class="input-group-append"><br>
                            <button class="btn btn-success" type="submit">Tambah</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- Content Header (Page Header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-1">
                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped" style="background-color: lavender;">
                                <thead>
                                    <th>No</th>
                                    <th>Nama Minuman</th>
                                    <th>Harga</th>
                                </thead>
                                <tbody>
                                    <?php
                                        $id = 1;
                                        foreach($koneksi->tampil_minuman() as $x) {
                                    ?>
                                    <tr>
                                        <td><?php echo $id++; ?></td>
                                        <td><?php echo $x['nama_minuman']; ?></td>
                                        <td><?php echo $x['harga']; ?></td>
                                    </tr>
                                    <?php
                                        }
                                    ?>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body --> 
                    </div>
                    <!-- /.card --> 
                </div>
                <!-- /.row --> 
            </div>
            <!-- /.container-fluid --> 
        </section>
        <!-- /.content --> 
    </div>
</body>
</html>