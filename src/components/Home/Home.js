import { Container, Divider } from '@mui/material';
import React from 'react';

import {motion} from 'framer-motion'

import myPhoto from '../../media/my_photo.jpg'

import htmlLogo from '../../media/html-5_logo.png'
import cssLogo from '../../media/css-3_logo.png'
import jsLogo from '../../media/js_logo.png'
import reactLogo from '../../media/react_logo.png'
import reduxLogo from '../../media/redux_logo.png'
import booststrapLogo from '../../media/bootstrap-5_logo.png'
import sassLogo from '../../media/sass_logo.png'
import muiLogo from '../../media/mui_logo.png'

const skills = [
    htmlLogo, cssLogo, jsLogo, reactLogo, reduxLogo, booststrapLogo, sassLogo, muiLogo
]

const mainMotion = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const Home = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.1, once: true}}
            className='Home' 
            id='home'
        >
            <Container>
                <div className="wrapper">
                    <div className="content home-content">
                        <motion.img custom={1} variants={mainMotion} src={myPhoto} className='avatar' />
                        <span>
                            <motion.h3 custom={2} variants={mainMotion} className='hero-title'>
                                Hi! I’m Ilya
                            </motion.h3>
                            <motion.p custom={3} variants={mainMotion} className='hero-body'>
                                And I develop web applications <br /> with React and more.
                            </motion.p>
                            <motion.span custom={4} variants={mainMotion}>
                                <Divider sx={{m: '10px 0'}}/>
                            </motion.span>
                            <span className='skills'>
                                {skills.map((item, index) => (
                                    index === 4 
                                        ? <span key={index}><br /><motion.span custom={index + 5} variants={mainMotion} className='skill-wrapper'><img key={item} src={item} alt="skill" className='skill' /></motion.span></span>
                                        : <motion.span custom={index + 5} variants={mainMotion} key={index} className='skill-wrapper'><img key={item} src={item} alt="skill" className='skill' /></motion.span>
                                ))}
                            </span>
                        </span>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default Home;