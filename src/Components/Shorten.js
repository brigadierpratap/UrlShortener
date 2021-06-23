import React, { useState } from "react";
import {
  Container,
  CopyBtn,
  InnerContainer,
  LinksContainer,
  OldLink,
  ShortenBtn,
  ShortenedLink,
  UrlInput,
  ValidationMsg,
} from "./Shorten.styles";

function Shorten() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);
  const shortenUrl = async url => {
    if (loading) return;
    if (url === "") {
      setError("Please add a link");
      return;
    }
    await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) //I would normally use environment variable to store api url but since its a demo, let's skip it.
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.ok) {
          setUrls(a => [
            ...a,
            { longUrl: url, shortUrl: data.result.full_short_link },
          ]);
        } else {
          throw new Error(data.error);
        }
      })
      .catch(e => {
        setLoading(false);
        setError(e.message);
      });
  };

  const copyToClipboard = (e, uri) => {
    const textField = document.createElement("textarea");
    textField.innerText = uri;
    document.body.appendChild(textField);
    if (window.navigator.platform === "iPhone") {
      textField.setSelectionRange(0, 99999);
    } else {
      textField.select();
    }
    document.execCommand("copy");
    textField.remove();
    e.target.innerText = "Copied";
    e.target.style["background-color"] = "#232127";
  };
  return (
    <Container id="shortening">
      <InnerContainer>
        <UrlInput
          placeholder="Shorten a link here..."
          value={url}
          onChange={e => {
            setUrl(e.target.value);
            setError("");
          }}
          error={Boolean(error)}
        />
        <ValidationMsg>{error}</ValidationMsg>
        <ShortenBtn
          onClick={e => {
            e.preventDefault();
            setLoading(true);
            shortenUrl(url);
          }}
          loading={loading}
          disabled={loading}
        >
          Shorten It
        </ShortenBtn>
      </InnerContainer>
      {urls.map(uri => {
        return (
          <LinksContainer key={uri.shortUrl}>
            <OldLink>{uri.longUrl}</OldLink>
            <ShortenedLink>{uri.shortUrl}</ShortenedLink>
            <CopyBtn
              onClick={e => {
                copyToClipboard(e, uri.shortUrl);
              }}
            >
              Copy
            </CopyBtn>
          </LinksContainer>
        );
      })}
    </Container>
  );
}

export default Shorten;
