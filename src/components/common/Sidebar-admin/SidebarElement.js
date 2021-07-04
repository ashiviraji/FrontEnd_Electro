import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SideNav = styled.div`
  width: 300px;
  background: #011627;
  position: absolute;
  height: 770px;
  padding: 0 30px;
  transition: all 1s;
  position: fixed;
`;

export const UlList = styled.ul`
  padding: 0;
`;

export const UlDetailList = styled.ul`
  padding: 0;
  color: #ffff;
  margin-top: 30px;
  margin-left: 22px;
`;
export const UserProfile = styled.img`
  width: 90px;
  margin-top: 40px;
  margin-bottom: 30px;
  height: 90px;
`;
export const List = styled.li`
  list-style-type: none;
  margin: 10px 0;
`;
export const NameList = styled.li`
  list-style-type: none;
  margin: 10px 0;
`;
export const UserName = styled.div`
  display: flex;
  width: 240px;
  height: 120px;
  margin-bottom: 40px;
`;

export const ActiveIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LinkList = styled(LinkR)`
  color: #eaecef;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 10px 15px;
  border-radius: 6px;
  // &.active{

  //     color:#ffff
  // }

  &:hover {
    background: #172b4d;
    color: #ffff;
  }
`;

export const NavLink = styled(LinkR)`
  background-color: #01bf71;
  border-radius: 50px;
  box-shadow: #049665;
  border: none;
  font-weight: bold;
  font-size: medium;
  padding: 10px;
  margin-top: 25px;
  left: 80%;
  position: relative;
  // &.active{

  //     color: black;
  // }

  &:hover {
    background: #00af86;
    color: beige;
  }
`;
