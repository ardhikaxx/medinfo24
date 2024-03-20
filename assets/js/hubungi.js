const btnHubungi = document.querySelector('.btn-hubungi');
btnHubungi.addEventListener('click', function () {
    Swal.fire({
        title: 'Masukkan data dengan benar!',
        html: '<input id="swal-nama" class="swal2-input swal-nama" placeholder="Nama Lengkap">' +
            '<input id="swal-organisasi" class="swal2-input swal-organisasi" placeholder="Nama Organisasi">' +
            '<input id="swal-keperluan" class="swal2-input swal-keperluan" placeholder="Keperluan Anda">' ,
        confirmButtonText: 'Kirim',
        confirmButtonColor: '#3A4D39',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        cancelButtonColor: '#4F6F52',
        preConfirm: () => {
            const nama = Swal.getPopup().querySelector('#swal-nama').value;
            const organisasi = Swal.getPopup().querySelector('#swal-organisasi').value;
            const keperluan = Swal.getPopup().querySelector('#swal-keperluan').value;

            if (nama && organisasi && keperluan && screenshot && transfer) {
                const linkWhatsApp = 'https://wa.me/6285747493573';
                const pesan = `Assalamualaikum kak.\n\n perkanalkan nama saya ${nama}, Saya dari ${organisasi} ingin menjadi media partner untuk ${keperluan}. Kami ingin bekerjasama dengan organisasi BEM KM Polije.`;

                window.open(`${linkWhatsApp}?text=${encodeURIComponent(pesan)}`);
            } else {
                Swal.showValidationMessage('Mohon lengkapi semua kolom dan unggah berkas');
            }
        }
    });

    Swal.getCancelButton().addEventListener('click', () => {
        Swal.fire({
            title: 'Terima kasih',
            text: 'Terima kasih atas ketertarikan Anda.',
            icon: 'info',
            iconColor: '#4F6F52',
            timer: 2000,
            showConfirmButton: false
        });
    });
});