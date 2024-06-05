$(document).ready(function() {
    // jQuery event untuk menambahkan event listener pada tombol pencarian saat dokumen siap
    $('#searchButton').click(function() {
        // Variabel untuk menyimpan nilai inputan dan menghapus spasi di awal dan akhir
        var name = $('#searchInput').val().trim();

        // Blok kondisional untuk memeriksa apakah input tidak kosong
        if (name !== '') {
            // Jika input tidak kosong, jQuery + DOM untuk menampilkan loading saat permintaan sedang diproses
            $('#resultContainer').html('<div class="loading"></div>');

            // Memanggil fungsi pencarian kewarganegaraan
            searchNationality(name);
        } else {
            // Jika input kosong, menampilkan pesan kesalahan dengan fungsi alert
            alert('Please enter a name to search.');
        }
    });

    // jQuery event untuk menambahkan event listener pada input teks untuk menghapus informasi negara ketika input dikosongkan
    $('#searchInput').keyup(function() {
        // Variabel untuk menyimpan nilai inputan dan menghapus spasi di awal dan akhir
        var inputValue = $(this).val().trim();

        // Blok kondisional untuk memeriksa apakah input kosong
        if (inputValue === '') {
            // Jika input kosong, jQuery + DOM untuk menghapus isi dari container hasil
            $('#resultContainer').empty();
        }
    });
});

// Fungsi untuk melakukan pencarian kewarganegaraan berdasarkan nama
function searchNationality(name) {
    // AJAX untuk mengirim permintaan GET ke API Nationalize.io
    $.ajax({
        url: `https://api.nationalize.io?name=${name}`,
        method: 'GET',
        success: function(response) {
            // Ketika permintaan berhasil, memanggil fungsi untuk menampilkan hasil kewarganegaraan
            displayNationality(response);
        },
        error: function() {
            // Ketika terjadi kesalahan, menampilkan pesan kesalahan dengan fungsi alert
            alert('Failed to fetch nationality data.');
        }
    });
}

// Fungsi untuk menampilkan hasil kewarganegaraan
function displayNationality(data) {
    // Variabel untuk menyimpan elemen container hasil
    var resultContainer = $('#resultContainer');

    // Menghapus isi dari container hasil
    resultContainer.empty();

    // Blok kondisional untuk memeriksa apakah terdapat informasi kewarganegaraan dalam respons
    if (data.country.length > 0) {
        // Jika terdapat informasi kewarganegaraan, membuat elemen daftar untuk menampilkan informasi tersebut
        var nationalityList = $('<ul>');

        // Iterasi melalui setiap negara dalam respons
        data.country.forEach(function(country) {
            // Variabel untuk menyimpan nama negara dan probabilitasnya
            var countryName = country.country_id;
            var probability = (country.probability * 100).toFixed(2);

            // Membuat elemen daftar untuk setiap negara dan menambahkannya ke dalam daftar kewarganegaraan
            var listItem = $('<li>').text(`${countryName}: ${probability}%`);
            nationalityList.append(listItem);
        });

        // Menampilkan judul dan daftar kewarganegaraan
        resultContainer.append('<h2>Nationality Probability</h2>');
        resultContainer.append(nationalityList);
    } else {
        // Jika tidak terdapat informasi kewarganegaraan dalam respons, menampilkan pesan bahwa tidak ditemukan informasi
        resultContainer.html('<p>No nationality information found for this name.</p>');
    }
}