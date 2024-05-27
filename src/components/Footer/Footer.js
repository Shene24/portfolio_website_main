import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sm17265@alumni.auis.edu.krd">
            sm17265@alumni.auis.edu.krd
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/Shene24">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/shene-mahmood-38a304222/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/accounts/edit/?hl=en">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    );
}

export default Footer;
