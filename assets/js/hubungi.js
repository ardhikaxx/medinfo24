const btnHubungi = document.querySelector('.btn-hubungi');
btnHubungi.addEventListener('click', function () {
    Swal.fire({
        title: 'Masukkan data dengan benar!',
        html: '<input id="swal-nama" class="swal2-input swal-nama" placeholder="Nama Lengkap">' +
            '<input id="swal-organisasi" class="swal2-input swal-organisasi" placeholder="Nama Organisasi">' +
            '<input id="swal-keperluan" class="swal2-input swal-keperluan" placeholder="Keperluan Anda">' +
            '<input type="file" id="swal-screenshot" class="swal2-file" accept=".zip, image/*" placeholder="Unggah Screenshoot 10 Akun Aktif">' +
            '<input type="file" id="swal-transfer" class="swal2-file" accept="image/jpeg, image/png" placeholder="Unggah Bukti Transfer 25.000">',
        confirmButtonText: 'Kirim',
        confirmButtonColor: '#3A4D39',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        cancelButtonColor: '#4F6F52',
        preConfirm: () => {
            const nama = Swal.getPopup().querySelector('#swal-nama').value;
            const organisasi = Swal.getPopup().querySelector('#swal-organisasi').value;
            const keperluan = Swal.getPopup().querySelector('#swal-keperluan').value;
            const screenshot = Swal.getPopup().querySelector('#swal-screenshot').files[0];
            const transfer = Swal.getPopup().querySelector('#swal-transfer').files[0];

            if (nama && organisasi && keperluan && screenshot && transfer) {
                const linkWhatsApp = 'https://wa.me/6285747493573';
                const pesan = `Assalamualaikum ${nama}.\n\nSaya dari ${organisasi} ingin menjadi media partner untuk ${keperluan}. Kami ingin bekerjasama dengan organisasi BEM KM Polije melalui Kementerian Media Digital dan Informasi untuk melakukan kerja sama.\n\nUnggahan:\n- Screenshoot 10 Akun Aktif\n- Bukti Transfer Rp 25.000,-`;
                const screenshotUrl = URL.createObjectURL(screenshot);
                const transferUrl = URL.createObjectURL(transfer);

                window.open(`${linkWhatsApp}?text=${encodeURIComponent(pesan)}&file=${encodeURIComponent(screenshotUrl)}&file=${encodeURIComponent(transferUrl)}`);
            } else {
                Swal.showValidationMessage('Mohon lengkapi semua kolom dan unggah berkas');
            }
        }
    }).then((result) => {

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

const inputScreenshot = document.getElementById('swal-screenshot');

inputScreenshot.addEventListener('change', function () {
    const screenshot = inputScreenshot.files[0];
    const screenshotUrl = URL.createObjectURL(screenshot);
    console.log('URL untuk screenshot:', screenshotUrl);
});

const inputTransfer = document.getElementById('swal-transfer');

inputTransfer.addEventListener('change', function () {
    const transfer = inputTransfer.files[0];

    const transferUrl = URL.createObjectURL(transfer);
    console.log('URL untuk transfer:', transferUrl);
});