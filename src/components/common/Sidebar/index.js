import React from 'react';
import image from '../../../assets/img/user.png';
import active from '../../../assets/img/active.png';
import {FiHome} from 'react-icons/fi';
import {RiInformationLine} from 'react-icons/ri';
import {RiBillLine} from 'react-icons/ri';
import {MdEventNote} from 'react-icons/md';



import {
    SideNav,UlList,List,LinkList,UserProfile,UserName,UlDetailList,NameList,ActiveIcon
} from './SidebarElement';



const Sidebar = ({show}) => {
    return (
        <>
        
        <SideNav className={show ? 'sidenav active ': 'sidenav'}>
        <UserName>
           <UserProfile src={image} alt="image"></UserProfile>
           
               <UlDetailList>
                   <NameList>Ashika Abeysuriya</NameList>
                   <NameList>Customer</NameList>
                   <NameList><ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active</NameList>
               </UlDetailList>
               </UserName>
            <UlList>
                <List>
                    <LinkList to='/home'><FiHome/>&nbsp;&nbsp;&nbsp;Home</LinkList>
                </List>

                <List>
                    <LinkList to='/manage-bill'><RiBillLine/>&nbsp;&nbsp;&nbsp;Manage Bill</LinkList>
                </List>

                <List>
                    <LinkList to='/special-events'><MdEventNote/>&nbsp;&nbsp;&nbsp; Device Vice Usage</LinkList>
                </List>

                <List>
                    <LinkList to='/special-events'><MdEventNote/>&nbsp;&nbsp;&nbsp; Special Events</LinkList>
                </List>

                


                <List>
                    <LinkList to='/information'><RiInformationLine/>&nbsp;&nbsp;&nbsp; Information</LinkList>
                </List>
            </UlList>
            </SideNav> 
        </>
    );
};

export default Sidebar;