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
      <Container id="infobar" sx={{display: 'flex', width: '326px', height: '960px', bgcolor: '#040B14', position: 'fixed', flexWrap: "wrap"}} >
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
        <Button href='#gold' sx={tabStyle} ><MailOutlinedIcon sx={{fontSize: "30px", alignSelf: "left", color: "#2A82D4", mr: 1}} /> Home</Button>
        <Button sx={tabStyle} ><PersonOutlineOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> About</Button>
        <Button sx={tabStyle} ><InsertDriveFileOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Resume</Button>
        <Button sx={tabStyle} ><ViewQuiltOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Portfolio</Button>
        <Button sx={tabStyle} ><HandshakeOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} /> Services</Button>
        <Button sx={tabStyle} ><MailOutlinedIcon sx={{fontSize: "30px", alignSelf: "center", color: "#2A82D4", mr: 1}} />Contact</Button>
        </Container>
      </Container>
      <Container sx={{display: 'flex', flexDirection: "column", ml: "301px"}} >
      <Box sx={{display: 'flex', height: 960, width: 1578}} ><img
          src="/city-3840x2160.jpg"/></Box>
      <Box sx={{display: 'flex', bgcolor: "green", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "blue", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "gray", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "purple", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "crimson", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "violet", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "beige", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "lavender", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "skyblue", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "lime", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "lightblue", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "darkred", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "turquoise", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "salmon", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "yellow", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "pink", height: 100, width: 100}} ></Box>
      <Box sx={{display: 'flex', bgcolor: "gold", height: 100, width: 100}} ></Box>
      <Box id="gold" sx={{display: 'flex', bgcolor: "gold", height: 100, width: 100}} ></Box>
      </Container>
    </main>
  )
}


