import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import {Link as LinkS} from 'react-scroll'
const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width : 100%;
    height: 100%;
    background : #cd853f;
    display : grid;
    align-items : center;
    top: 0;
    left: 0;
    transition : 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '1': '0')};
    top:  ${({isOpen})=>(isOpen ? '0': '-100%')};
`

const Icon = styled.div`
 position : absolute;
 top : 1.2rem;
 right : 1.5rem;
 background : transparent;
 font-size : 2rem;
 cursor: pointer;
 outline:none;
`

const CloseIcon = styled(FaTimes)`
 color: #000d1a;
`
const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom : 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows : repeat(4,60px)
    }

`
const DropdownLink = styled(LinkS)`
 display:flex;
 align-items:center;
 justify-content: center;
 color:#fff;
 font-size : 1.5rem;
 text-decoration :none;
 list-style:none;
 color: #fff;
 cursor: pointer;
 transition: 0.2s ease-in-out;

 &:hover {
     color: #000d1a;
 }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content:center;
`
function Dropdown({isOpen, toggle}) {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item,index)=>(
                        <DropdownLink onClick={toggle} to={item.link} key={index} key={index} smooth={true} duration={500} spy={true}  offset={-60} exact='true'>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary ='true' round ='true' big = 'true' to='/contact'>
                        Contact Us
                    </Button>

                </BtnWrap>
            </DropdownWrapper>


        </DropDownContainer>
    )
}

export default Dropdown
