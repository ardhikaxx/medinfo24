const btnHubungi = document.querySelector('.btn-hubungi');

btnHubungi.addEventListener('click', function () {
    Swal.fire({
        title: 'Konfirmasi Internal/Eksternal',
        text: 'Apakah Anda adalah bagian dari internal atau eksternal?',
        icon: 'question',
        iconColor: '#4F6F52',
        showCancelButton: true,
        confirmButtonText: 'Internal',
        cancelButtonText: 'Eksternal',
        cancelButtonColor: '#4F6F52',
        confirmButtonColor: '#3A4D39',
    }).then((result) => {
        if (result.isConfirmed) {
            tampilkanFormInputData();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Konfirmasi Persyaratan',
                    text: 'Apakah Anda sudah melakukan screenshoot minimal 10 akun aktif untuk follow Instagram BEM KM POLIJE @bempolije dan subscribe Youtube BEM POLIJE CHANNEL serta menyertakan bukti follow?',
                    icon: 'question',
                    iconColor: '#4F6F52',
                    showCancelButton: true,
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Belum',
                    cancelButtonColor: '#4F6F52',
                    confirmButtonColor: '#3A4D39',
                }).then((resultSyarat) => {
                    if (resultSyarat.isConfirmed) {
                        Swal.fire({
                            title: 'Konfirmasi Pembayaran',
                            text: 'Apakah Anda sudah mentransfer sebesar Rp 25.000,- melalui rekening (a.n Zulfianti Rahmawati : Dana – 085747493573)?',
                            icon: 'question',
                            iconColor: '#4F6F52',
                            showCancelButton: true,
                            confirmButtonText: 'Ya',
                            cancelButtonText: 'Belum',
                            cancelButtonColor: '#4F6F52',
                            confirmButtonColor: '#3A4D39',
                        }).then((resultPembayaran) => {
                            if (resultPembayaran.isConfirmed) {
                                Swal.fire({
                                    title: 'Pemberitahuan',
                                    text: 'Setelah Anda selesai melakukan pengisian data anda, Anda dapat mengirim bukti screenshoot minimal 10 akun dan bukti transfer!',
                                    icon: 'info',
                                    iconColor: '#4F6F52',
                                    showConfirmButton: true,
                                    confirmButtonColor: '#3A4D39',
                                    confirmButtonText: 'Lanjut'
                                }).then(() => {
                                    tampilkanFormInputData();
                                });
                            } else if (resultPembayaran.dismiss === Swal.DismissReason.cancel) {
                                Swal.fire({
                                    title: 'Anda Belum Melakukan Pembayaran',
                                    text: 'Silakan melakukan pembayaran terlebih dahulu.',
                                    icon: 'info',
                                    iconColor: '#4F6F52',
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                            }
                        });
                    } else if (resultSyarat.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire({
                            title: 'Anda Belum Memenuhi Syarat',
                            text: 'Anda bisa memenuhi syarat dan ketentuan terlebih dahulu.',
                            icon: 'info',
                            iconColor: '#4F6F52',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    }
                });
            }
        }
    )
});

function tampilkanFormInputData() {
    Swal.fire({
        title: 'Masukkan data anda!',
        html: '<input id="swal-nama" class="swal2-input swal-nama" placeholder="Nama Lengkap">' +
            '<input id="swal-organisasi" class="swal2-input swal-organisasi" placeholder="Nama Organisasi">' +
            '<input id="swal-keperluan" class="swal2-input swal-keperluan" placeholder="Keperluan Anda">',
        confirmButtonText: 'Kirim',
        confirmButtonColor: '#3A4D39',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        cancelButtonColor: '#4F6F52',
        preConfirm: () => {
            const nama = Swal.getPopup().querySelector('#swal-nama').value;
            const organisasi = Swal.getPopup().querySelector('#swal-organisasi').value;
            const keperluan = Swal.getPopup().querySelector('#swal-keperluan').value;

            if (nama && organisasi && keperluan) {
                const linkWhatsApp = 'https://wa.me/6285747493573';
                const pesan = `Assalamualaikum Wr. Wb. kak,\n\nPerkenalkan, nama saya ${nama} dari ${organisasi}. Kami tertarik untuk menjadi media partner dalam tujuan ${keperluan} dan ingin mendapatkan persetujuan dari BEM KM POLIJE. Kami berharap dapat bekerja sama dengan baik untuk kepentingan bersama.\n\nTerima kasih atas perhatiannya, dan kami menunggu tanggapan dari BEM KM POLIJE.\n\nSalam.`;

                window.open(`${linkWhatsApp}?text=${encodeURIComponent(pesan)}`);
            } else {
                Swal.showValidationMessage('Mohon lengkapi semua kolom');
                return false;
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
}