import React from 'react';
import './App.css';
import LatteImage from './img/latte.jpg';
import CappuccinoImage from './img/Cappucino.jpg';
import EspressoImage from './img/Espresso.jpg';
import MochaImage from './img/Moccacino.jpg';
import LogoPNG from './img/cafe.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={LogoPNG} alt="Logo" className="logo" />
      <ul>
        <li><a href="#home">Beranda</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">Tentang</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024@fullsuncoffeeshop</p>
    </footer>
  );
}

function CoffeeDetail({ name, image, description }) {
  const [showDetail, setShowDetail] = React.useState(false);

  return (
    <div className="menu-item">
      <div className="coffee-image-container">
        <img src={image} alt={name} className="coffee-image" />
      </div>
      <h3>{name}</h3>
      <button className="detail-button-medium" onClick={() => setShowDetail(!showDetail)}>Lihat Detail</button>
      {showDetail && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowDetail(false)}>&times;</span>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <section id="home" className="section home-section">
      <h2>Selamat Datang di Coffee House</h2>
      <p>Nikmati pilihan kopi terbaik kami di kota ini.</p>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="section">
      <h2>Menu Kami</h2>
      <div className="menu">
        <CoffeeDetail name="Latte" image={LatteImage} description="Latte adalah minuman kopi yang terbuat dari espresso dan steamed milk." />
        <CoffeeDetail name="Cappuccino" image={CappuccinoImage} description="Cappuccino adalah minuman kopi yang terbuat dari espresso, steamed milk, dan frothed milk." />
        <CoffeeDetail name="Espresso" image={EspressoImage} description="Espresso adalah minuman kopi yang terbuat dari ekstraksi kopi dengan tekanan tinggi." />
        <CoffeeDetail name="Mocha" image={MochaImage} description="Mocha adalah minuman kopi yang terbuat dari espresso, steamed milk, dan chocolate." />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <h2>Tentang Kami</h2>
        <p>Kami bersemangat untuk memberikan pengalaman kopi terbaik kepada pelanggan kami.</p>
        <div className="about-box">
          <h3>Visi</h3>
          <p>Menjadi tempat yang hangat dan nyaman bagi para pecinta kopi untuk berkumpul dan menikmati pengalaman kopi yang luar biasa.</p>
        </div>
        <div className="about-box">
          <h3>Misi</h3>
          <p>Memberikan kualitas kopi terbaik dengan bahan-bahan berkualitas tinggi, pelayanan yang ramah, dan lingkungan yang nyaman untuk menikmati kopi.</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <h2>Hubungi Kami</h2>
        <div className="contact-info">
          <p>Nama: FullSun Coffee Shop</p>
          <p>Alamat: Jl. Raya Timur</p>
          <p>Telepon: (012) 946-768-384</p>
          <p>Email: info@fullsuncoffee.com</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;