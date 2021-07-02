import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const InforContainer = styled.div`
color:#fff;
background:${({ lightBg }) => (lightBg ? '#f9f9f9' : '#fff')};
@media screen and (max-width:818px){
    padding:10px 0;
}
`
export const InforWrapper = styled.div`
display: grid;
z-index: 1;
height: 660px;
width: 100%;
margin-right:auto;
margin-left:auto;

padding: 0 24px;
justify-content: center;


`
export const InforRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
align-items:center;

@media screen and (max-width: 818px){
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding: 0;
padding-bottom: 60px;
`
export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;

`
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 44px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#000' : '#010606')};


@media screen and (max-width: 780px){
  font-size:22px;
  margin-top:20px;
}

`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

`
export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;

`
export const ImgWrap = styled.div`
max-width:500px;
height:100%;
`
export const Img = styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;

`
export const Button = styled(LinkR)`

outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
 box-shadow: 5px 8px 8px #d7dddb;

&:hover{
transition: all 0.2s ease-in-out;
background:${({ primary }) => (primary ? '#fff' : '#01BF71')} ;
color:#000;

}
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
border-radius: 50px;
background:#08d37e ;

`