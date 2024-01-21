import React from 'react';
import { Container, Grid, Card, Typography } from '@mui/material';

import js2 from '../../media/js2.png'
import rjs from '../../media/rjs.png'
import itstepDiploma from '../../media/itstep_diploma.png'
import tsPlusReact from '../../media/TypeScript Course by Ivan Petrychenko.png'

const content = [
    {title: 'JavaScript 2.0 course completion certificate by ITGid', body: 'This course taught me the most important basics of Javascript and helped me take my knowledge of Web Development to the next level. In this course, I studied in detail conditional statements, loops, functions, arrays, objects, DOM tree, working with GET, POST and AJAX requests, etc.', image: js2},
    {title: 'React.js course completion certificate by ITGid', body: 'This course taught the most important basics of working with the React.js library, namely its philosophy and basic concepts. In this course, I learned from real experience how to work with SPA routing. I studied working with states both in OOP and in the Functional style. In addition, I studied the Life cycle of components, Refs and DOM, Creation of React elements. Learned how to work with React Hooks on real projects. Studied Redux technology and Redux Toolkit, etc.', image: rjs},
    {title: 'ITSTEP Junior Academy Diploma', body: 'At ITSTEP Junior Academy, I learned a great many different IT areas from Cyber Security to Big Data Science, but most of all I remember the markup course on HTML5 and CSS3, as well as working with the WordPress CMS system. It was there that I made my first beginnings in web design and markup.', image: itstepDiploma},
    {title: 'TypeScript course completion certificate by Campfire-school', body: 'In this course, I learned not only the basic aspects of the TypeScript programming language, but also its intricacies and solutions to countless problems. In this course, I learned how to work with data types provided by TypeScript, interfaces, type allias, tuples, enums, etc. But most importantly, I learned how to work with Decorators and the OOP structure. As a bonus, I learned the combination of React + TypeScript.', image: tsPlusReact},
]

const About = () => {
    return (
        <div
            className='About global-wrapper' 
            id="about"
        >
            <Container>
                <span>
                    <h5 className='caption'>About</h5>
                    <h3 className='title'>A Junior React Front-End <br /> developer from Dnipro, Ukraine</h3>
                    <h6 className="body about-body">I am a Junior React Front End developer. Graduated from the Junior ITStep Academy with a diploma. I also took JavaScript and React.js courses with a certificate. After effective study, I made a lot of interesting projects, which you can see in the Projects section. I am proficient in markup using HTML5 and CSS3, as well as JSX markup. In addition, I also have the skills to work with Redux.js. I also work with the Bootstrap.css and Material.ui libraries.</h6>
                </span>
                <span className="timeline-wrapper">
                    <Grid className='content-container' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        {content.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Card sx={{ boxShadow: '5px 5px 15px 0px black', maxWidth: 400, height: 550, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                    <img src={item.image} />
                                    <span>
                                        <Typography gutterBottom variant="h6" sx={{fontWeight: 'bold', p: '0 10px', mt: 1}} component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" sx={{fontWeight: 'bold', color: '#BBBBBB', p: '0 10px'}} component="div">
                                            {item.body}
                                        </Typography>
                                    </span>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </span>
            </Container>
        </div>
    );
};

export default About;