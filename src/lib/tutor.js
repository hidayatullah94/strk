import { card, count, his, searc, tgl, und } from "../assets";
export const struks = [
  {
    name: "Pilih Tanggal",
    description:
      "Tentukanlah terlebih dahulu tanggal awal dan akhir pencarian di kolom Tanggal Awal dan Tanggal Akhir.",
    src: tgl,
  },
  {
    name: "Masukan NO Kartu",
    description:
      "Masukan No Kartu yang ada pada uang elektronik anda pada kolom dengan label Nomor Kartu.",
    src: card,
  },
  {
    name: "Klik Tombol Cari Struk",
    description: "Klik pada tombol Cari Struk, untuk melakukan pencarian.",
    src: searc,
  },
  {
    name: "Klik Tombol Unduh",
    description:
      "Akan muncul daftar struk sesuai dengan tanggal pencarian anda. Silahkan klik unduh pada struk yang ingin anda cetak.",
    src: und,
  },
];

export const historiis = [
  {
    name: "Pilih Jumlah",
    description:
      "Silahkan pilih jumlah transaksi trakhir yang ingin di cetak pada kolom jumlah transaksi terakhir",
    src: count,
  },
  {
    name: "Masukan NO Kartu",
    description:
      "Masukan No Kartu yang ada pada uang elektronik anda pada kolom dengan label Nomor Kartu.",
    src: card,
  },
  {
    name: "Klik Tombol Cari Histori",
    description: "Klik pada tombol Cari histori, untuk melakukan pencarian.",
    src: his,
  },
  {
    name: "Klik Tombol Unduh",
    description:
      "Akan muncul list histori transaksi sesuai dengan jumlah transaksi terakhir yang anda pilih, lalu Silahkan klik unduh ",
    src: und,
  },
];
