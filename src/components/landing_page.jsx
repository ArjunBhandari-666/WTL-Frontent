import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import sahyadriLogo from './assets/sahyadri.png';
import "./styles/landing_page.scss"
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const poweredByRef = useRef(null);
    const getStartedRef = useRef(null);
    const logoRef = useRef(null);
    useEffect(() => {
        const poweredByElement = poweredByRef.current;
        const getStartedElement = getStartedRef.current;
        const logoElement = logoRef.current;
        const timeline = gsap.timeline({ paused: true });
        timeline
            .fromTo(poweredByElement, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
            .fromTo(logoElement, { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1")
            .fromTo(getStartedElement, { x: 300, opacity: 0 }, { x: -100, opacity: 1, duration: 1 }, "-=2")
            .fromTo(getStartedElement, { x: -100 }, { x: 0, duration: 1 }, "-=1");

        timeline.play();

        return () => timeline.kill(); // Cleanup function
    }, []);

    return (
        <>
            <div className='bgpage'>
                <div className='scrollgif'></div>
            </div>
            <div className='landingpage'>
                <img ref={logoRef} src={sahyadriLogo} alt="" />
                <h1>WebTrek Learner</h1>
                <div className='sahyadri_texts'>
                    <p className='h2'>Department of Computer Science and Engineering</p>
                    <p className='h2'>Sahyadri College of Engineering and Management, Mangalore</p>
                    <p ref={poweredByRef}>Powered by VGST Project GRD 853</p>
                    <Link ref={getStartedRef} className='getstarted' to="/login">Get Started</Link>
                </div>
            </div>
        </>
    );
}