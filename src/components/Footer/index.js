import React from 'react'
import { FaFacebook,FaInstagram ,FaYoutube} from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinkItems,FooterLinkTitle,FooterLink,FooterLinksWrapper} from './FooterElements'
import {SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

function Footer() {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Title </FooterLinkTitle>
                                <FooterLink to>one</FooterLink>
                                <FooterLink to>two</FooterLink>
                                <FooterLink to>three</FooterLink>
                                <FooterLink to>four</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Title2 </FooterLinkTitle>
                                <FooterLink to>one</FooterLink>
                                <FooterLink to>two</FooterLink>
                                <FooterLink to>three</FooterLink>
                                <FooterLink to>four</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Title3 </FooterLinkTitle>
                                <FooterLink to>one</FooterLink>
                                <FooterLink to>two</FooterLink>
                                <FooterLink to>three</FooterLink>
                                <FooterLink to>four</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Title4 </FooterLinkTitle>
                                <FooterLink to>one</FooterLink>
                                <FooterLink to>two</FooterLink>
                                <FooterLink to>three</FooterLink>
                                <FooterLink to>four</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to onClick={toggleHome}>
                            ImNM
                        </SocialLogo>
                        <WebsiteRights>ImNM © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
