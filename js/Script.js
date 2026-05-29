console.log("CV Online siap");
const namaLengkap = "Radus Maramba";
console.log(namaLengkap);
let tahunMasuk = 2023;
console.log("Sebelum diubah:", tahunMasuk);

tahunMasuk = 2026;
console.log("Sesudah diubah:", tahunMasuk);
let jurusan = "Rekam Medis";
let semester = 6;
let statusAktif = true;

console.log(typeof jurusan);
console.log(typeof semester);
console.log(typeof statusAktif);
function sapaPengunjung() {
    console.log("Selamat datang di CV saya!");
}
sapaPengunjung();
function hitungUmur(tahunLahir) {
    return 2026 - tahunLahir;
}
console.log("Umur saya:", hitungUmur(2004));
let skills = ["html&css", "manajemen data kesehatan", "Komunikasi interprofesional"];
console.log(skills[1]);
skills.push("JavaScript");

console.log("Jumlah skill:", skills.length);
console.log(skills);