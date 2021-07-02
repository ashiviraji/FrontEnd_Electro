import React, { useState } from 'react'
import {
    HeroContainer, Button, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight
} from './HeroElements';
import Video from '../../../assets/Video/video.mp4'


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Electro</HeroH1>
                    <HeroP>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galle
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="/sign-in" onMouseEnter={onHover} onMouseLeave={onHover}>
                            GET STARTED {hover ? <ArrowForward /> : <ArrowRight />}

                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
