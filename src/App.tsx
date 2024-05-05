import styled from "styled-components";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { first, fourth, second, third } from "./assets/images";

function App() {
  const images = [first, second, third, fourth];

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  if (!isMobile) {
    return null;
  }

  return (
    <Container>
      {images.map((image, index) => {
        return <Image src={image} alt={`image_${index}`} />;
      })}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffffb;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
