import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {motion} from 'framer-motion'

import githubLogo from '../../media/github_logo.png'
import linkedinLogo from '../../media/linkedin_logo.png'
import gmailLogo from '../../media/gmail_logo.png'

const content = [
    {image: githubLogo, title: 'GitHub', link: 'https://github.com/xlaoru'},
    {image: linkedinLogo, title: 'Linkedin', link: 'https://www.linkedin.com/'},
    {image: gmailLogo, title: 'Email', link: 'https://mail.google.com/'},
]

const Contact = () => {
    return (
        <div
            className='Contact global-wrapper' 
            id='contact'
        >
            <Container>
                <span>
                    <h5 className='caption'>Contact Me</h5>
                    <h3 className='title contact-title'>Do not be shy! <br /> Write me!</h3>
                </span>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        {content.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <a target='_blank' href={item.link} style={{'textDecoration': 'none'}}>
                                    <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 0 5px 0px #1e1e1e',}}>
                                        <CardMedia
                                        component="img"
                                        sx={{ width: 100, height: 100, padding: '10px' }}
                                        image={item.image}
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                        <CardContent sx={{ flex: '1 0 auto', p: '24px',}}>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                        </Box>
                                    </Card>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
            </Container>
        </div>
    );
};

export default Contact;