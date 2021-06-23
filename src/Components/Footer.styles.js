import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 5em;
  padding-block: 3em;
  background-color: black;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 1em;
  }
`;

export const Brand = styled.span`
  color: white;
  font-size: 25px;
  font-weight: 700;
  width: 15em;
  @media (max-width: 375px) {
    max-width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const SocialIconsCont = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: flex-start;
  width: 12em;
`;

export const FooterLinksCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 12em;
  @media (max-width: 375px) {
    max-width: 100%;
    justify-content: center;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const LinkTitle = styled.span`
  font-size: 18px;
  font-weight: 700px;
  color: white;
  margin-bottom: 1em;
`;
export const FooterLinks = styled.a`
  text-decoration: none;
  color: #9e9aa7;
  margin-bottom: 0.5em;

  &:active {
    color: #2acfcf;
  }
  &:hover {
    color: #2acfcf;
  }
`;
