import React, { useState, useCallback, useRef, Suspense } from 'react';
import ImgAbout from "./logo kecil.webp";
import LatteImage from './latte.webp';
import CappuccinoImage from './Cappucino.jpg';
import EspressoImage from './Espresso.jpg';
import MochaImage from './moccanino.jpg';
import BrazilImage from './brazil.jpg';
import EthiopiaImage from './ethiopia.jpg';
import KenyaImage from './kenya.jpg';
import KolombiaImage from './kolombia.jpg';

import {
  BennerStyle, ButtonStyle, BennerText,
  ShopStyle, CoffeeContainer, ShopHeading,
  MenuStyle, MenuHeading, MenuContainer, MenuItem, MenuImageContainer, MenuImage, MenuTitle, BuyButton,
  AboutStyle, AboutImg, AboutHeading, AboutText,
  ContactHeading, ContactSection, ContactInfo,
  TestiStyle, TestiForm,
} from "./StyledBody";

const CoffeeDetail = React.lazy(() => import('./CoffeeDetail'));

const Body = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputText, setInputText] = useState('');

  const handleAuthorChange = useCallback((e) => {
    setInputAuthor(e.target.value);
  }, []);

  const handleTextChange = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  // eslint-disable-next-line
  const testimonialCount = testimonials.length;

  const addTestimonial = () => {
    if (inputAuthor.trim() !== '' && inputText.trim() !== '') {
      const newTestimonial = {
        author: inputAuthor,
        text: inputText,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setInputAuthor('');
      setInputText('');
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  const menuRef = useRef(null);
  const handleClickFullsun = (e) => {
    e.preventDefault();
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const contactRef = useRef(null);
  const handleClickDashboard = (e) => {
    e.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleBuyLatte = () => {
    import('./buyHandlers').then(module => {
      module.handleBuyLatte();
    });
  };
  
  const handleBuyCappucino = () => {
    import('./buyHandlers').then(module => {
      module.handleBuyCappucino();
    });
  };
  
  const handleBuyEspresso = () => {
    import('./buyHandlers').then(module => {
      module.handleBuyEspresso();
    });
  };
  
  const handleBuyMocha = () => {
    import('./buyHandlers').then(module => {
      module.handleBuyMocha();
    });
  };  

  return (
    <div>
      {/* Section Beranda*/}
      <BennerStyle id="home">
        <BennerText>
          <h3>Selamat datang di Coffee Shop</h3>
          <ButtonStyle onClick={handleClickFullsun}>
            MENU
          </ButtonStyle>
        </BennerText>
      </BennerStyle>
      <AboutStyle id="about">
        <AboutImg>
          <br />
          <img src={ImgAbout} style={{ height: "150px", width: "150px" }} alt="About" loading="lazy" />
        </AboutImg>
        <AboutText>
          <AboutHeading>FULLSUN.ID</AboutHeading>
          <p>FULLSUN.ID menghadirkan cita rasa kopi dengan nuansa klasik yang dapat membuat Anda ber-nostalgia</p>
          <ButtonStyle onClick={handleClickDashboard}>
            CONTACT US
          </ButtonStyle>
        </AboutText>
      </AboutStyle>

      {/* Section Menu*/}
      <MenuStyle ref={menuRef} id="menu">
        <MenuHeading>Menu Kami</MenuHeading>
        <MenuContainer>
          <MenuItem>
            <MenuImageContainer>
              <MenuImage src={LatteImage} alt="Latte" loading="lazy" />
            </MenuImageContainer>
            <MenuTitle>Latte</MenuTitle>
            <BuyButton onClick={handleBuyLatte}>Beli</BuyButton>
          </MenuItem>
          <MenuItem>
            <MenuImageContainer>
              <MenuImage src={CappuccinoImage} alt="Cappucino" loading="lazy" />
            </MenuImageContainer>
            <MenuTitle>Cappuccino</MenuTitle>
            <BuyButton onClick={handleBuyCappucino}>Beli</BuyButton>
          </MenuItem>
          <MenuItem>
            <MenuImageContainer>
              <MenuImage src={EspressoImage} alt="Espresso" loading="lazy" />
            </MenuImageContainer>
            <MenuTitle>Espresso</MenuTitle>
            <BuyButton onClick={handleBuyEspresso}>Beli</BuyButton>
          </MenuItem>
          <MenuItem>
            <MenuImageContainer>
              <MenuImage src={MochaImage} alt="Mocha" loading="lazy" />
            </MenuImageContainer>
            <MenuTitle>Mochacino</MenuTitle>
            <BuyButton onClick={handleBuyMocha}>Beli</BuyButton>
          </MenuItem>
        </MenuContainer>
      </MenuStyle>

      {/* Section Shop*/}
      <ShopStyle id="shop">
        <ShopHeading>Kopi Kami</ShopHeading>
        <CoffeeContainer> 
          <Suspense fallback={<div>Loading...</div>}>
            <CoffeeDetail name="Brazil" image={BrazilImage} description="Kopi Brazil adalah kopi yang diproduksi di negara Brazil, yang merupakan salah satu produsen kopi terbesar di dunia. 
              Kopi Brazil memiliki berbagai macam varietas dan terkenal dengan kualitasnya yang tinggi. Brazil terkenal dengan kopi Arabica dan Robusta-nya. 
              Kopi Arabica Brazil sering memiliki rasa yang lembut dan manis dengan sedikit keasaman, sementara kopi Robusta Brazil cenderung memiliki rasa yang lebih kuat dan pahit." />
            <CoffeeDetail name="Ethiopia" image={EthiopiaImage} description="Kopi Ethiopia adalah kopi yang diproduksi di negara Ethiopia, yang terkenal sebagai salah satu asal-usul kopi Arabika yang paling terkenal di dunia. 
              Ethiopia dianggap sebagai tempat asal kopi Arabika, dan banyak varietas kopi yang ditemukan di sana, termasuk beberapa yang sangat dihargai oleh pencinta kopi di seluruh dunia." />
            <CoffeeDetail name="Kenya" image={KenyaImage} description="Kopi Kenya adalah kopi yang diproduksi di negara Kenya, yang terkenal dengan kualitasnya yang tinggi dan karakteristik uniknya. 
              Kenya merupakan salah satu produsen kopi Arabika terkemuka di dunia, dan kopi Kenya sering dianggap sebagai salah satu yang terbaik di antara semua kopi Afrika." />
            <CoffeeDetail name="Kolombia" image={KolombiaImage} description="Kopi Kolombia adalah kopi yang diproduksi di negara Kolombia, yang terkenal karena kualitasnya yang tinggi dan kontribusinya yang signifikan terhadap industri kopi dunia. 
              Kopi Kolombia, yang sebagian besar merupakan varietas Arabika, dianggap sebagai salah satu kopi terbaik di dunia dan sering menjadi favorit di antara pecinta kopi." />
          </Suspense>
        </CoffeeContainer>
      </ShopStyle>

      {/* Section Contact*/}
      <ContactSection ref={contactRef} id="contact">
        <ContactHeading>Hubungi Kami</ContactHeading>
        <ContactInfo>
          <p>Nama: FullSun Coffee Shop</p>
          <p>Alamat: Jl. Raya Timur</p>
          <p>Telepon: (012) 946-768-384</p>
          <p>Email: info@fullsuncoffee.com</p>
        </ContactInfo>
      </ContactSection>

      {/* Section Testimoni*/}
      <TestiStyle id="testimonial">
        <div>
          <h1>Testimonial App</h1>
          <TestiForm>
            <label htmlFor="nama">Nama : </label>
            <input
              type="text"
              placeholder="Enter author...."
              value={inputAuthor}
              onChange={handleAuthorChange}
            />
            <label htmlFor="pesan">Pesan : </label>
            <textarea
              placeholder="Enter testimonial...."
              value={inputText}
              onChange={handleTextChange}
            />
            <ButtonStyle onClick={addTestimonial}>Add Testimonial</ButtonStyle>
          </TestiForm>
          <hr></hr>
          <div className="testimonial-list" style={{ marginTop: "20px" }}>
            {testimonials.map((testimonial, index) => (
              <div className="box" key={index} style={{ marginBottom: "20px" }}>
                <h2 className="card-title">{testimonial.author}</h2>
                <p className="card-text">{testimonial.text}</p>
                <ButtonStyle onClick={() => deleteTestimonial(index)}>Delete</ButtonStyle>
              </div>
            ))}
          </div>
        </div>
      </TestiStyle>
    </div>
  );
}

export default Body;