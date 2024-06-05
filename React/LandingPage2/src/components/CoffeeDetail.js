import React, { useState } from 'react';
import { CoffeeDetailStyle, CoffeeImageContainer, CoffeeImage, CoffeeTitle, ButtonStyle, ModalStyle, ModalContent, CloseButton } from "./StyledBody";

const CoffeeDetail = ({ name, image, description }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <CoffeeDetailStyle>
      <CoffeeImageContainer>
        <CoffeeImage src={image} alt={name} />
      </CoffeeImageContainer>
      <CoffeeTitle>{name}</CoffeeTitle>
      <ButtonStyle onClick={() => setShowDetail(!showDetail)}>Lihat Detail</ButtonStyle>
      {showDetail && (
        <ModalStyle>
          <ModalContent>
            <CloseButton onClick={() => setShowDetail(false)}>&times;</CloseButton>
            <p>{description}</p>
            <ButtonStyle onClick={() => alert(`Anda telah memesan ${name}`)}>Pesan</ButtonStyle>
          </ModalContent>
        </ModalStyle>
      )}
    </CoffeeDetailStyle>
  );
};

export default CoffeeDetail;