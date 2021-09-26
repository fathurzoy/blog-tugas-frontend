import React from "react";
import Navbar from "../../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>
          About<span className="full-stop">.</span>
        </h1>
        <main>
          <p>Nama saya fathur rahman fauzan, 21 tahun</p>
          <p>Saya berkuliah di Universitas Mohammad Husni Thamrin</p>

          <hr className="gold-hr" />
          <p>
            Jika Anda merasa perlu memberikan kritik atau saran, atau jika Anda
            hanya ingin berkenalan, jangan ragu untuk menghubungi saya
            menggunakan link di footer
            <span className="full-stop">.</span>
          </p>
        </main>
      </div>
    </>
  );
};

export default About;
