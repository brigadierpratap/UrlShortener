import React, { useState } from "react";
import {
  Container,
  InnerContainer,
  ShortenBtn,
  UrlInput,
} from "./Shorten.styles";

function Shorten() {
  const [url, setUrl] = useState("");
  const shortenUrl = async url => {
    await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
  return (
    <Container>
      <InnerContainer>
        <UrlInput
          placeholder="Shorten a link here..."
          value={url}
          onChange={e => {
            setUrl(e.target.value);
          }}
        />
        <ShortenBtn
          onClick={e => {
            e.preventDefault();
            shortenUrl(url);
          }}
        >
          Shorten It
        </ShortenBtn>
      </InnerContainer>
    </Container>
  );
}

export default Shorten;
