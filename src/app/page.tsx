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

          <Box id="portfolioBar" sx={{display: 'flex', ml: "-21%", width: 326, height: 40, backgroundColor: "#0a6cc2", justifyContent: "center"}} >
            <Typography sx={{display: "flex",alignItems: "center", color: "white", fontSize: 20, fontFamily: "sans-serif"}} >Portfolio</Typography>
          </Box>

          <Box sx={{width: 130, height: 130, backgroundColor: "#484848", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '46px'}} >
            <Box sx={{display: 'flex', width: 110, height: 120,borderRadius: '100px',ml: "auto",mr: "auto", justifyContent: "center"}}  ><img
          src="/ellutail.jpg"
          style={{display: 'flex', marginTop: '10px', maxWidth: "100%" , borderRadius: "100px"}}
        /></Box>
          </Box>
        <Typography sx={{display: "flex", color: "white", fontFamily: 'sans-serif', fontSize: 24,mt: "27px" , justifyContent: "center", fontStyle: "initial"}} >Elias Wikman</Typography>
        </Container>
        <Container id="icons" sx={{display: "flex",mt: "-4rem", position: 'relative'}}>
          <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><TwitterIcon sx={{fontSize: "21", alignSelf: "center", color: "white"}}/></Box>
          <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><FacebookOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
          <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><InstagramIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
          <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><WhatsAppIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
          <Box sx={{width: 40, height: 40, backgroundColor: "#383838", borderRadius: '100px',ml: "auto",mr: "auto" ,mt: '86px', display:"flex", justifyContent: "center"}} ><YouTubeIcon sx={{fontSize: "30px", alignSelf: "center", color: "white"}} /></Box>
        </Container>
        <Container id='about tabs' sx={{display: 'flex', mt: "-15rem", ml: "-20px", flexDirection: 'column'}}>
        <Button href='#home' sx={tabStyle} ><MailOutlinedIcon sx={{fontSize: "30px", alignSelf: "left", color: "#2A82D4", mr: 1}} /> Home</Button>
        <Button href='#about' sx={tabStyle} ><PersonOutlineOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> About</Button>
        <Button sx={tabStyle} ><InsertDriveFileOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Resume</Button>
        <Button sx={tabStyle} ><ViewQuiltOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Portfolio</Button>
        <Button sx={tabStyle} ><HandshakeOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Services</Button>
        <Button sx={tabStyle} ><MailOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} />Contact</Button>
        </Container>
      </Container>
      <Container sx={{display: 'flex', flexDirection: "column", ml: "301px"}} >
        <Typography id="home" />
      <Box sx={{display: 'block',height: 960, width: 1578, position: 'fixed', zIndex: '0'}} ><img
          src="/city-3840x2160.jpg"/></Box>
          <Typography sx={{display: 'flex',position: 'absolute',textAlign: 'center', top: '23rem', left: '50rem', color: 'white',fontFamily: 'monospace', fontSize: '4rem', fontWeight: '800'}} >
            Elias Wikman</Typography>
            <Typography sx={{display: 'block', zIndex: 1,mt: '27rem', ml: '29.5rem', color: 'white',fontFamily: 'monospace', fontSize: '4rem', fontWeight: '800'}} >
              <Typewriter 
                onInit={(typewriter) => { 
                typewriter.typeString("i'm a developer") 

                .pauseFor(2500) 
                .deleteAll() 
                typewriter.typeString('i studied in Optima') 
                .pauseFor(2500)
                .deleteAll() 
                .start(); 
              }} 
            /> 
          </Typography>
      <Box sx={{display: 'block', zIndex: '1',bgcolor: "white", height: 580, maxWidth: 1700, minWidth: 1578,mt: '31%' }} >
        <Typography id="about" sx={{display: 'flex',position: 'absolute',textAlign: 'center',mt: '5rem',ml: '130px', color: 'black',fontSize: '2rem', fontWeight: '400'}} >
        About
        </Typography>
        <Typography  sx={{display: 'flex',flexWrap: 'wrap' ,position: 'absolute',textAlign: 'center',mt: '9rem',ml: '130px', color: 'black',fontSize: '1.2rem', fontWeight: '400'}} >
        I was interested in programing when i started with making my own content for video games when i was about 14 years old
        </Typography>
      </Box>
      </Container>
    </main>
  )
}


