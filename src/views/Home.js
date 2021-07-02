import React, { useState } from 'react'
import Sidebar from '../components/common/CollapsedSidebar';
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/common/Hero Section';
import InforSection from '../components/common/InforSection';
import Services from '../components/common/Services';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/common/InforSection/Data';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InforSection {...homeObjOne} />
            <InforSection {...homeObjTwo} />
            <InforSection {...homeObjThree} />
            <Services />
        </div>
    )
}
