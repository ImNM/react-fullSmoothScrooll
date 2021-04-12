import React ,{useState,useEffect}from 'react'
import styled,{css} from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import { menuData } from '../data/MenuData';
import {Button} from './Button'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';

const Nav = styled.nav`
    height :  60px;
    background : ${({scrollNav})=>(scrollNav? ' #f59c20':'transparent')};
    display:flex;
    justify-content : space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position:fixed;
    width:100%;
    text-decoration : none;

`;

const NavLink = css`
    color: #fff;
    display: flex ;
    align-items: center;
    padding: 0 1rem;
    height : 100%;
    cursor: pointer;
    text-decoration : none;
`

const Logo = styled(LinkR)`
    ${NavLink}
    color:white;
    font-size:1.5rem;

`;

const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        background-size : contain;
        height : 30px;
        width : 30px;
        cursor: pointer;
        position:absolute;
        top:0;
        right:0;
        transform : translate(-50%,45%)
        
    }
`;

const NavMenu = styled.div`
    display : flex;
    align-items : center;
    margin-right:-48px;

    @media screen and (max-width:768px){
        display:none;
    }

`;

const NavMenuLinks = styled(LinkS)`
    ${NavLink}
    color:white;

    &.active{
        
        border-bottom : 3px solid white;
    }
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width:768px){
        display:none;
    }
`


function Navbar({toggle}) {
    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setscrollNav(true);
        }
        else{
            setscrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav);
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    
    console.log(menuData)
    return (
        <Nav scrollNav={scrollNav}>
            <Logo to='/' onClick = {toggleHome}>ImNM</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index} smooth={true} duration={500} spy={true}  offset={-60} exact='true' >
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary =' true'>
                    contact
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
