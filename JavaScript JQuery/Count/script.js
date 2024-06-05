$(document).ready(function() {
    // Variabel
    var counter = 0;
  
    // Fungsi untuk menampilkan teks berdasarkan nilai counter
    function displayText() {
      if (counter === 0) {
        $('#output').text('You haven\'t clicked the button yet.');
      } else {
        $('#output').text('Button diklik ' + counter + ' kali.');
      }
    }
  
    // Blok Kondisional
    $('#btnClick').click(function() {
      counter++;
      displayText();
    });
  
    // jQuery events
    $(document).keypress(function(event) {
      if (event.which === 13) { // Apabila tombol Enter ditekan
        counter++;
        displayText();
      }
    });
  
    // jQuery + DOM
    $('body').append('<p>Tolong tekan agar button klik bisa dihitung!</p>');
  });  