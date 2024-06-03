"use client";

import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react';
import Image from 'next/image'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Typewriter from 'typewriter-effect'; 
import { Block } from '@mui/icons-material';


export default function Home() {
  const tabStyle = {
    display: 'flex',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'unset',
    alignItems: 'center',
    mb: '5px',
    textTransform: 'none',
  };

  

  return (
    <main>
      <Container id="infobar" sx={{display: 'flex', width: '326px',height: '100%', bgcolor: '#040B14', position: 'fixed', flexWrap: "wrap"}} >
        <Container id="profile-pic"  sx={{height: 0}} >

          <Box id="portfolioBar" sx={{display: 'flex', margin: '0 auto',ml: '-27% ' ,minWidth: '346px', height: '40px', backgroundColor: "#0a6cc2", justifyContent: "center"}} >
            <Typography sx={{display: "flex",alignItems: "center", color: "white", fontSize: 20, fontFamily: "sans-serif"}} >Portfolio</Typography>
          </Box>

          <Box sx={{width: 130, height: 130, backgroundColor: "#484848", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '46px'}} >
            <Box sx={{display: 'flex', width: 110, height: 120,borderRadius: '100px',ml: "auto",mr: "auto", justifyContent: "center"}}  ><img
            src="/ellutail.jpg"
            style={{display: 'flex', marginTop: '10px', maxWidth: "100%" , borderRadius: "100px"}}
          /></Box>
          </Box>
          <Typography sx={{display: "flex", color: "white", fontFamily: 'sans-serif', fontSize: 24,mt: "27px" , justifyContent: "center", fontStyle: "initial"}} >Elias Wikman</Typography>
          <Container id="icons" sx={{display: "flex",ml: "auto",mr: "auto", mt: '-55px'}}>
            <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><TwitterIcon sx={{fontSize: "21", alignSelf: "center", color: "white"}}/></Box>
            <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><FacebookOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
            <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><InstagramIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
            <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><WhatsAppIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
            <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><YouTubeIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
          </Container>
          <Container id='about tabs' sx={{display: 'flex', mt: "50px", flexDirection: 'column'}}>
            <Button href='#home' sx={tabStyle} ><MailOutlinedIcon sx={{fontSize: "30px", alignSelf: "left", color: "#2A82D4", mr: 1}} /> Home</Button>
            <Button href='#about' sx={tabStyle} ><PersonOutlineOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> About</Button>
            <Button href='#resume' sx={tabStyle} ><InsertDriveFileOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Resume</Button>
            <Button sx={tabStyle} ><HandshakeOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Services</Button>
            <Button href='#contact' sx={tabStyle} ><MailOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} />Contact</Button>
          </Container>
        </Container>
      </Container>
      
      <Container sx={{display: 'flex', flexDirection: "column", ml: "301px"}} >
        <Typography id="home" />
      <Box sx={{display: 'block',minHeighteight: '1080px', minWidth: '1920px' ,objectFit: 'fill' , position: 'fixed', zIndex: '0'}} ><img
          src="/city-3840x2160.jpg"/></Box>
          <Typography sx={{display: 'flex',position: 'fixed',textAlign: 'center', top: '20rem', left: '50rem', color: 'white',fontFamily: 'monospace', fontSize: '4rem', fontWeight: '800'}} >
            Elias Wikman</Typography>
            <Typography component='div' sx={{display: 'block', position: 'fixed', zIndex: 1,mt: '25rem', ml: '30rem', color: 'white',fontFamily: 'monospace', fontSize: '4rem', fontWeight: '800'}} >
              <Typewriter 
                onInit={(typewriter) => { 
                typewriter.typeString("i'm a developer") 

                .pauseFor(2500) 
                .deleteAll() 
                typewriter.typeString('i studied in') 
                .pauseFor(100)
                .deleteAll() 
                typewriter.typeString('Optima') 
                .pauseFor(2000)
                .deleteAll() 
                typewriter.typeString('Welcome!') 
                .start(); 
              }} 
            /> 
          </Typography>
      <Box sx={{display: 'block', position: 'relative' ,zIndex: '1',bgcolor: "white", pr: '137%',height: 350,mt: '80%', maxWidth: '30%'}} >
        <Typography id="about" sx={{display: 'flex',scrollMarginTop: '350px',position: 'absolute',textAlign: 'center',mt: '5rem',ml: '130px', color: 'black',fontSize: '2rem', fontWeight: '400'}} >
        About
        </Typography>
        <Typography  sx={{display: 'block',flexWrap: 'wrap' ,position: 'absolute',textAlign: 'left ',mt: '9rem',ml: '130px', color: 'black',fontSize: '1.2rem', fontWeight: '400'}} >
        I was interested in programing when i started with making my own content for video games when i was about 14 years old. <br />After i finished highschool at 16 i started in the contstruction industry because i wanted to try something new for about half a year <br />
        until i noticed that was the wrong move. <br />
        So I finally decided I wanted to try coding for real so i switched to Information and Communication Technology (ICT) which was a bumpy <br /> road here and there but I finished it in the end.
        </Typography>
      </Box>

      <Box sx={{ display: 'block', position: 'relative', zIndex: '1', bgcolor: "#F9F3ED", pr: '137%', height: 'auto', mt: '0%', maxWidth: '30%', pb: '100px' }}>
          <Typography id="resume" sx={{ display: 'flex', scrollMarginTop: '350px', position: 'absolute', textAlign: 'center', mt: '5rem', ml: '130px', color: 'black', fontSize: '2rem', fontWeight: '400' }}>
            Resume
          </Typography>

          <Box sx={{ display: 'flex',mt: '9rem', ml: '130px', color: 'black', fontSize: '1.2rem', fontWeight: '400'}}>
            <Typography component='div' sx={{ mb: 2,  mr: '40px'}}>
              <strong>Summary</strong>
              <Typography sx={{ mb: 2 }}>
                Software developer with a passion for creating interactive applications and services.
              </Typography>
            </Typography>

            <Typography component='div' sx={{ mb: 2, mr: '40px' }}>
              <strong>Skills</strong>
              <Typography sx={{mb: 2, }}>
                JavaScript/
                Typescript, React, Node.js<br />
                HTML, CSS<br />
                Git, GitHub<br />
              </Typography>
            </Typography>

            <Typography component='div' sx={{ mb: 2 }}>
              <strong>Experience</strong>
              <Typography sx={{ mb: 2 }}>
                Developed web applications using React and Node.js.<br />
                Designing with Material UI.<br />
                Integrating third-party APIs to enhance application functionality.
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'block', position: 'relative', zIndex: '1', bgcolor: "#303030", pr: '137%', height: 'auto', mt: '0%', maxWidth: '30%', pb: '50px' }}>
          <Typography id="contact" sx={{ display: 'flex', position: 'absolute', textAlign: 'center', mt: '5rem', ml: '130px', color: 'white', fontSize: '2rem', fontWeight: '400' }}>
            Contact
          </Typography>

          <Box sx={{ display: 'flex',mt: '9rem', ml: '130px', color: 'white', fontSize: '1.2rem', fontWeight: '400'}}>
            <Typography component='div' sx={{ mb: 2,  mr: '40px', fontSize: '1.3rem'}}>
              <strong>Phone:</strong>
              <Typography sx={{ mb: 2, fontSize: '1.2rem' }}>
                +358400849699
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
}

