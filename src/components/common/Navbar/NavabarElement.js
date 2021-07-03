
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components';
export const Nav = styled.nav`
background:#23e694;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:fixed;
top:0;
width:100%;
margin-right:0px;
z-index:10;
@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:90%;


margin-left: 10%;

`
export const NavLogo = styled(LinkS)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
display:flex;
font-size:1.5rem;
align:item:left;
margin-left:10px;
font-weight:bold;
margin-top:15px;
text-decoration:none;
@media screen and (max-width:980px){
    margin-left:-100px;
}

 &:hover{
        color:#000;
        transform:scale(1.2);
        transition: all 0.2s ease-in-out;
    }
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:818px){
    display:block;
    position:absolute;
    margin-top:-20px;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.9rem;
    cursor:pointer;
    color:white;
   
}

`
export const NavMenu = styled.ul`
    display:flex;
    text-align: center;;
	list-style: none;
	align-items: center;
	margin-right: -12px;

	@media screen and (max-width: 818px){
		display: none;
	}


`
export const NavItem = styled.li`
   height:80px;

`

export const NavLinks = styled(LinkS)`
    color: #fff;
	display: flex;
    margin-right:50px;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
    font-size:1.1rem;
	cursor: pointer;
	&.active{
		
        color:#000;
	}
    &:hover{
        color:#000;
        transform:scale(1.2);
        transition: all 0.2s ease-in-out;
    }
`
export const NavBtn = styled.nav`
display:flex;
align-items:center;
@media screen and (max-width: 818px){
		display: none;
	}
`
export const NavBtnLinks = styled(LinkR)`
color:#01bf71;
border-radius:50px;
background:#fff;
white-space:nowrap;
padding:6px 20px;
outline:none;
border:none;
transition:all 0.2s ease-in-out;
text-decoration:none;
cursor:pointer;
font-size:16px;
align:item:center;
font-weight:bold;
 margin-right:45px;
 margin-top:23px;
 display:flex;
 box-shadow: 5px 8px 8px #01bf71;
&:hover{
    transition:all 0.2s ease-in-out;
    background:#01bf71;
    color:#fff;
}

`