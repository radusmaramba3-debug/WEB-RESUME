// console.log("CV Online siap");
// const namaLengkap = "Radus Maramba";
// console.log(namaLengkap);
// let tahunMasuk = 2023;
// console.log("Sebelum diubah:", tahunMasuk);

// tahunMasuk = 2026;
// console.log("Sesudah diubah:", tahunMasuk);
// function sapaPengunjung() {
//     console.log("Selamat datang di CV saya!");
// }
// sapaPengunjung();
// function hitungUmur(tahunLahir) {
//     return 2026 - tahunLahir;
// }
// console.log("Umur saya:", hitungUmur(2004));
// let skills = ["html&css", "manajemen data kesehatan", "Komunikasi interprofesional"];
// console.log(skills[1]);
// skills.push("JavaScript");

// console.log("Jumlah skill:", skills.length);
// console.log(skills);
// Langkah 1: Memilih h1 dan menampilkan ke console
const mainTitle = document.querySelector("h1");
console.log("Elemen h1 yang dipilih:", mainTitle);

// Langkah 2: Memilih semua link di nav dan perulangan dengan forEach
const navLinks = document.querySelectorAll("nav a");
console.log(`Jumlah tautan navigasi: ${navLinks.length}`);

navLinks.forEach((link, index) => {
    console.log(`Tautan ke-${index + 1}: ${link.textContent.trim()}`);
});

// Langkah 3: Mengubah textContent dari h1
mainTitle.textContent = "Konradus Marambu";

// Langkah 4: Menambahkan class highlight ke h2 pertama
const firstH2 = document.querySelector("h2");
if (firstH2) {
    firstH2.classList.add("highlight");
}

// Memilih h2 kedua (indeks 1) yaitu judul "Pendidikan" Anda
const secondH2 = document.querySelectorAll("h2")[1];

// Fungsi untuk melakukan toggle (bisa dipanggil via console atau click)
function toggleHighlightH2() {
    if (secondH2) {
        secondH2.classList.toggle("highlight");
    }
}

// Eksekusi pertama kali (membuatnya langsung kuning saat web dimuat)
toggleHighlightH2();

// Nomor 6: Fungsi buatKartu dengan struktur h3 dan p
function buatKartu(judul, deskripsi) {
    const divKartu = document.createElement("div");
    divKartu.classList.add("card"); // Menggunakan class card agar CSS lama Anda otomatis memicu bentuk kotak

    const h3 = document.createElement("h3");
    h3.textContent = judul;

    const p = document.createElement("p");
    p.textContent = deskripsi;

    divKartu.appendChild(h3);
    divKartu.appendChild(p);

    return divKartu;
}

// Nomor 7: Pilih wadah utama dan append data dummy
const mainContainer = document.querySelector("main") || document.querySelector("section");
if (mainContainer) {
    const kartuDummy = buatKartu("Projek", "Tahun: 2026 - Ini adalah contoh kartu hasil appendChild.");
    mainContainer.appendChild(kartuDummy);
}

// Membuat array berisi data asli Anda sesuai screenshot
const dataPendidikan = [
    { 
        institusi: "SMA Negeri 3 Waingapu", 
        tahun: "2020 - 2023", 
        detail: "Jurusan: IPA" 
    },
    { 
        institusi: "STIKes Panti Waluya Malang", 
        tahun: "2023 - Sekarang", 
        detail: "Program Studi: Manajemen Informasi Kesehatan" 
    }
];

// Fungsi render yang mengosongkan wadah lalu mengisinya dengan elemen baru
function renderPendidikan() {
    // Membidik wadah tempat kartu-kartu pendidikan disimpan
    const wadahPendidikan = document.getElementById("container-pendidikan");
    if (!wadahPendidikan) return;

    // KUNCI UTAMA: Mengosongkan wadah agar data lama tidak menumpuk saat di-render ulang
    wadahPendidikan.innerHTML = "";

    // Looping data array untuk membuat element HTML
    dataPendidikan.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card"); // samakan dengan class CSS box putih Anda

        const h3 = document.createElement("h3");
        h3.textContent = item.institusi;

        const pTahun = document.createElement("p");
        pTahun.innerHTML = `<strong>Tahun:</strong> ${item.tahun}`;

        const pDetail = document.createElement("p");
        // Deteksi dinamis apakah teksnya menggunakan kata Jurusan atau Program Studi
        pDetail.innerHTML = `<strong>${item.detail.split(":")[0]}:</strong> ${item.detail.split(":")[1]}`;

        // Masukkan text/elemen ke dalam kartu
        card.appendChild(h3);
        card.appendChild(pTahun);
        card.appendChild(pDetail);

        // Masukkan kartu ke dalam wadah utama di halaman
        wadahPendidikan.appendChild(card);
    });
}

// Jalankan fungsi saat halaman web pertama kali dibuka
renderPendidikan();


// Menambahkan data ketiga ke dalam array
dataPendidikan.push({ 
    institusi: "Kursus Fullstack Web Developer", 
    tahun: "2026", 
    detail: "Program Studi: JavaScript & AI" 
});

// Memanggil ulang fungsi render untuk mencetak data terbaru
renderPendidikan();



