import React from "react";
import {
  Brand,
  Container,
  FooterLinks,
  FooterLinksCont,
  LinkTitle,
  SocialIconsCont,
} from "./Footer.styles";

import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <Container>
      <Brand>Shortly</Brand>

      <FooterLinksCont>
        <LinkTitle>Features</LinkTitle>
        <FooterLinks href="#shortening">Link Shortening</FooterLinks>
        <FooterLinks href="#branded_links">Branded Links</FooterLinks>
        <FooterLinks href="#analytics">Analytics</FooterLinks>
      </FooterLinksCont>
      <FooterLinksCont>
        <LinkTitle>Resources</LinkTitle>
        <FooterLinks href="#blog">Blog</FooterLinks>
        <FooterLinks href="#developers">Developers</FooterLinks>
        <FooterLinks href="#support">Support</FooterLinks>
      </FooterLinksCont>
      <FooterLinksCont>
        <LinkTitle>Company</LinkTitle>
        <FooterLinks href="#about">About</FooterLinks>
        <FooterLinks href="#team">Our Team</FooterLinks>
        <FooterLinks href="#careers">Careers</FooterLinks>
        <FooterLinks href="#contact">Contact</FooterLinks>
      </FooterLinksCont>
      <SocialIconsCont>
        <SocialIcon src={"facebook"} />
        <SocialIcon src={"twitter"} />
        <SocialIcon src={"pinterest"} />
        <SocialIcon src={"instagram"} />
      </SocialIconsCont>
    </Container>
  );
}

export default Footer;
