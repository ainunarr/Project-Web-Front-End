import styled from 'styled-components';
import BgBenner from './cover3.webp';

// Benner
export const BennerStyle = styled.section`
    width: auto;
    min-height: 80vh;
    background-image: url(${BgBenner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: grid;
    align-items: center;
    padding: 0 100px;
`;

export const ButtonStyle = styled.button`
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: #725a43; 
    color: #FFFFFF;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
    display: flex;
    justify-content: center;
    margin-bottom: 2px;

    &:hover {
        background: #CD853F; 
        color: #FFFFFF;
    }
`;

export const BennerText = styled.div`
    font-size: 3.4rem;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

// About
export const AboutStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
    background-color: #f8ece0
`;

export const AboutImg = styled.div`
    border-radius: 0.5rem;
    margin-bottom: 20px;
`;

export const AboutHeading = styled.h2`
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
`;

// Menu
export const MenuHeading = styled.h2`
    font-size: 2rem;
    font-family: arial; 
    text-align: center;
    color: #000;
    margin-bottom: 2.5rem;
    margin-top: 0px;
    padding-right: 30px;
`;

export const MenuStyle = styled.section`
    padding: 50px 20px;
    text-align: center;
    background-color: burlywood;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; /* Menambahkan jarak antar item */
`;

export const MenuItem = styled.div`
    width: 200px; 
    border: 1px solid #7f5a47; 
    border-radius: 8px; 
    text-align: center;
    transition: box-shadow 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column; 
    justify-content: space-between; 
    padding: 10px; 

    &:hover {
        box-shadow: 0px 0px 5px 0px #7f5a47; 
    }
`;

export const MenuImageContainer = styled.div`
    overflow: hidden; 
    border-bottom: 1px solid #7f5a47;
    flex: 1; 
`;

export const MenuImage = styled.img`
    width: 100%; 
    height: auto;
`;

export const MenuTitle = styled.h3`
    margin-top: 10px;
    font-size: 1rem; /* Mengatur ukuran font untuk konsistensi */
`;

export const MenuModalStyle = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; /* Mengatur agar content berada di tengah */
    justify-content: center;
    align-items: center;
`;

export const MenuModalContent = styled.div`
    background-color: #eadbc9; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px; /* Mengatur lebar maksimum untuk konsistensi */
`;

export const MenuCloseButton = styled.span`
    color: #aaa;
    position: absolute; /* Mengatur agar tombol close berada di pojok kanan atas */
    top: 10px;
    right: 10px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
    }
`;

export const ButtonBuyStyle = styled.button`
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: #D2B48C; 
    color: #FFFFFF;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    &:hover {
        background: #CD853F; 
        color: #FFFFFF;
    }
`;

export const BuyButton = styled(ButtonStyle)`
    background-color: #8B4513; 
    margin-top: 5px;
`;

export const DetailButton = styled(ButtonStyle)`
    background-color: #3887BE; 
    margin-top: 5px;
`;

// Shop
export const ShopStyle = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
    gap: 20px; 
    background-color: rgb(243, 200, 145);
`;

export const ShopHeading = styled.h2`
    font-size: 2rem;
    font-family: arial; 
    text-align: center;
    color: #000;
    margin-bottom: 2.5rem;
    padding-right: 100px;
`;

export const CoffeeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
`;

export const CoffeeDetailStyle = styled.div`
    width: 200px; 
    border: 1px solid #7f5a47; 
    border-radius: 8px; 
    text-align: center;
    transition: box-shadow 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column; 
    justify-content: space-between; 
    padding: 10px; 

    &:hover {
        box-shadow: 0px 0px 5px 0px #7f5a47; 
    }
`;

export const CoffeeImageContainer = styled.div`
    overflow: hidden; 
    border-bottom: 1px solid #7f5a47;
    flex: 1; 
`;

export const CoffeeImage = styled.img`
    width: 100%; 
    height: auto;
`;

export const CoffeeTitle = styled.h3`
    margin-top: 10px;
    font-size: 1rem; 
`;

export const ModalStyle = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; 
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: #eadbc9; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px; 
`;

export const CloseButton = styled.span`
    color: #aaa;
    position: absolute; 
    top: 10px;
    right: 10px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
    }
`;

// Contact 
export const ContactHeading = styled.h2`
    font-size: 2rem;
    font-family: arial; 
    text-align: center;
    color: #000;
    margin-bottom: 20px;
    margin-top: 10px;
    padding-right: 100px;
    padding-left: 100px;
`;

export const ContactSection = styled.section`
    background-color: #e6c19c; 
    border-radius: 10px; 
    padding: 20px 20px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 35px;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px; 
    padding: 20px;
    border: 5px solid #7f5a47;
`;

// Testimoni
export const TestiStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 0 20px;
    background-color: #ffe4ad;

    .box {
        padding: 20px;
        border-radius: 0.5rem;
        text-align: center;
        background: #D2B48C;

        p {
            font-size: 0.938rem;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0.5rem 0 0.5rem;
        }
    }
`;

export const TestiForm = styled.div`
    width: 500px;
    margin: 5px 5px;

    label {
        display: block;
        margin-bottom: 10px;
    }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
    }

    input[type="submit"] {
        background-color: #f9d3af; 
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }
`;