import styled, { keyframes } from "styled-components";

const LoadLeft = keyframes`
    0%{
        opacity:0;
        transform:translateX(-20em) translateY(3em);
    }                                                                                                                                   
    100%{
        opacity: 1;
        transform:translateX(0em) translateY(3em);

    }
`;
const LoadRight = keyframes`
    0%{
        opacity:0;
        transform:translateX(20em) translateY(9em);
    }                                                                                                                                   
    100%{
        opacity: 1;
        transform:translateX(0em) translateY(9em);

    }
`;
const LoadUp = keyframes`
    0%{
        opacity:0;
        transform:translateY(-20em);
    }                                                                                                                                   
    100%{
        opacity: 1;
        transform:translateY(6em);

    }
`;

export const Container = styled.div`
  padding-inline: 5em;
  background-color: rgb(240, 241, 246);
  @media (max-width: 375px) {
    padding-inline: 1em;
  }
`;
export const Card = styled.div`
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 21em;
  transform: ${props => `translateY(${props.cardNum * 3}em)`};
  z-index: 15;
  animation-name: ${props =>
    props.cardNum === 1 ? LoadLeft : props.cardNum === 2 ? LoadUp : LoadRight};
  animation-duration: 1.5s;
  animation-fill-mode: both;
  @media (max-width: 375px) {
    width: auto;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5em;
    margin-top: 1.5em;
  }
`;

export const CardCont = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  padding-bottom: 12em;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const ImageCont = styled.span`
  width: 5em;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #35323e;
  padding: 0.5em;
`;
export const Image = styled.img`
  width: 3em;
  object-fit: contain;
`;
export const Title = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: black;
  width: 100%;
  transform: translateY(-1em);
`;
export const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #9a9a99;
  width: 100%;
  margin-bottom: 1.5em;
`;

export const CenterLine = styled.span`
  width: 80%;
  height: 0.5em;
  background-color: #2acfcf;
  position: absolute;
  top: 45%;
  z-index: 10;
  @media (max-width: 375px) {
    width: 0.5em;
    height: 55em;
    left: 49%;
    transform: translateY(-20em);
  }
`;

export const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 1em;
  margin-top: 1em;
`;
export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #9a9a99;
  text-align: center;
  max-width: 50%;
  margin-bottom: 2em;
  @media (max-width: 375px) {
    max-width: 90%;
  }
`;
