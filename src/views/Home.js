import React, { useState } from 'react'
import Sidebar from '../components/common/CollapsedSidebar';
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/common/Hero Section';
import InforSection from '../components/common/InforSection';
import Services from '../components/common/Services';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/common/InforSection/Data';
import Footer from '../components/common/Footer/Footer'

export default function Home({ id }) {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div id={id}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InforSection {...homeObjOne} />
            <Services />
            <InforSection {...homeObjTwo} />
            <InforSection {...homeObjThree} />
            <Footer />
        </div>
    )
}
