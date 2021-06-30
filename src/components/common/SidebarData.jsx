import React from 'react'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';

export const  SidebarData=[
    {
        title:"Home",
        icon: <HomeTwoToneIcon/>,
        link:"/home"

    },

    {
        title:"Manage Bill",
        icon: <DescriptionTwoToneIcon/>,
        link:"/manage-bill"

    },

    {
        title:"Special Events",
        icon: <HomeWorkTwoToneIcon/>,
        link:"/special-event"

    },

    {
        title:"Information",
        icon: <ImportContactsTwoToneIcon/>,
        link:"/dashboard"

    }


] 