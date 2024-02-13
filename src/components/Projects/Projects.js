import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

import bgs from '../../media/bgs.jpg'
import jgm from '../../media/jgm.jpg'
import scrambly from "../../media/scrambly.png"
import er from '../../media/er.jpg'
import mi from '../../media/mi.jpg'
import clinic from '../../media/clinic.png'

const content = [
    {image: bgs, title: 'Board Games Shop', body: 'The board game store is the place where any board game lover can be surprised by the variety of products and feel the joy of buying quality and licensed board games.', siteLink: 'https://board-games-store.netlify.app/', codeLink: 'https://github.com/xlaoru/board-games-shop_client'},
    {image: jgm, title: 'Junior Guide Map', body: 'Junior Guide Map is a web application where a person from junior to senior level can find the most concise and useful information. There are links to documentation where you can read more.', siteLink: 'https://junior-guide-map.netlify.app/', codeLink: 'https://github.com/xlaoru/junior-guide-map'},
    {image: scrambly, title: 'Scrambly', body: 'Scrambly is a web application where you can play the classic game of "Scramble". You have got current amount of words and you have to guess them using hints.', siteLink: 'https://scrambly-game.netlify.app/', codeLink: 'https://github.com/xlaoru/scrambly'},
    {image: er, title: 'Employees Register', body: 'Employee Registration is a site where you can easily register all your employees, set and change their salaries, add bonuses, raise them and sort by increase or salary from $1000.', siteLink: 'https://employees-register-online.netlify.app/', codeLink: 'https://github.com/xlaoru/employees-register'},
    {image: mi, title: 'Marvel community', body: 'The Marvel Community is a web application where you can view a specific set of characters, their stats, comics where they`ve been seen, and the ability to view a random Hero of the Day.', siteLink: 'https://marvel-studios-information-portal.netlify.app/', codeLink: 'https://github.com/xlaoru/marvel-info'},
    {image: clinic, title: 'Clinic', body: 'This site is based on a ready-made design and presents a landing page on which you can learn in detail about one of the many plastic clinics.', siteLink: 'https://clinic-proj.netlify.app/', codeLink: 'https://github.com/xlaoru/clinic'},
]

const Projects = () => {
    return (
        <div
            className='Projects global-wrapper'
            id='projects'
        >
            <Container>
                <span>
                    <h5 className='caption'>Projects</h5>
                    <h3 className='title projects-title'>See my main projects with Demo <br /> web-app or on GitHub</h3>
                </span>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {content.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ boxShadow: '5px 5px 15px 0px black', maxWidth: 345, minHeight: 370, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <div>
                                    <CardMedia
                                        sx={{ height: 160, boxShadow: "0 0.5px 0.5px 0 #1e1e1e" }}
                                        image={item.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.body}
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Button size="small" variant="contained" sx={{color: '#1e1e1e'}}><a target='_blank' style={{'textDecoration': 'none', 'color': '#1e1e1e'}} href={item.siteLink}>Demo</a></Button>  
                                    <Button size="small" variant="contained" sx={{color: '#1e1e1e'}}><a target='_blank' style={{'textDecoration': 'none', 'color': '#1e1e1e'}} href={item.codeLink}>Code</a></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Projects;