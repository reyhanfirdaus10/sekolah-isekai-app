import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = "Sekolah Isekai";
    const fetchData = async () => {
      try {
        const response = await axios.get("http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT");
        const { listNama, listNilai } = response.data;

        const kelas = {
          "Kelas 10A": { siswa: [] },
          "Kelas 10B": { siswa: [] },
          "Kelas 10C": { siswa: [] },
          "Kelas 10D": { siswa: [] },
          "Kelas 10E": { siswa: [] },
          "Kelas 10F": { siswa: [] },
        };

        const bulanIni = new Date().getMonth() + 1;
        const tahunIni = new Date().getFullYear();

        for (let i = 0; i < listNama.length; i++) {
          const nama = listNama[i];
          const nilai = listNilai[i];

          const kelasSiswa = getKelas(nama, nilai);
          const bulanMati = nilai % 10 || 10;
          const tahunMati = bulanMati >= bulanIni ? tahunIni : tahunIni + 1;
          const tahunMenikah = kelasSiswa === "Kelas 10F" && nilai % 7 === 0 ? tahunIni + 1 : null;

          kelas[kelasSiswa].siswa.push({ nama, nilai, mati: { bulan: bulanMati, tahun: tahunMati }, menikah: tahunMenikah });
        }

        setData(kelas);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data dari API:", error);
      }
    };

    fetchData();
  }, []);

  function getKelas(nama, nilai) {
    if (nama.includes("C") && nama.includes("O")) {
      return "Kelas 10F";
    }

    const angkaPuluhan = Math.floor(nilai / 10) * 10;
    if (angkaPuluhan === 100) {
      return "Kelas 10A";
    } else if (angkaPuluhan === 90) {
      return "Kelas 10B";
    } else if (angkaPuluhan === 80) {
      return "Kelas 10C";
    } else if (angkaPuluhan === 70) {
      return "Kelas 10D";
    } else if (angkaPuluhan === 60) {
      return "Kelas 10E";
    } else {
      return "Kelas 10A";
    }
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Sekolah Isekai</h1>
      {Object.entries(data).map(([namaKelas, infoKelas]) => (
        <div key={namaKelas} className="class-container">
          <h2 className="class-name">{namaKelas}</h2>
          <p className="num-students">Jumlah Siswa: {infoKelas.siswa.length}</p>
          <h3>Data Siswa</h3>
          <ul className="data-list">
            {infoKelas.siswa.map((siswa, index) => (
              <li key={index} className="student-item">
                <span className="student-name">{siswa.nama}:</span> {siswa.nilai} (
                <a className="link-style">
                  Mati pada Bulan {siswa.mati.bulan} {siswa.mati.tahun}
                </a>
                ){siswa.menikah && <span className="year-text">, Menikah pada tahun {siswa.menikah}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
