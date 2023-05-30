'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/legacy/image';
import * as React from 'react';
import TemporaryDrawer from './Sidebar';

const pages = ['Home', 'Product', 'Features', 'Contact'];

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
    return (
        <Box>
            <AppBar position="fixed" 
                sx={{
                    backgroundColor: 'rgba(53,53,53,0.7)',
                    py: '1.3rem'
                }}
                elevation={0}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'} }} >
                            <Image 
                                src='/Assets/Wappin logo.png'
                                alt="Wappin Logo"
                                width='284'
                                height='60'
                                layout='intrinsic'
                            />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'} }} >
                            <Image 
                                src='/Assets/Wappin logo.png'
                                alt="Wappin Logo"
                                width='180'
                                height='40'
                                layout='intrinsic'
                            />
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <TemporaryDrawer />
                        </Box>

                        <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 3, color: 'white', display: 'block', textTransform: 'capitalize', fontSize: '1rem' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'} }}>
                            <Stack spacing={4} direction='row'> 
                                <Button variant="outlined" href="#learnmore"
                                    sx={{
                                        backgroundColor: '#0cebeb',
                                        backgroundImage: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        color: 'common.white',
                                        width: '100%',
                                        padding: '10px 0',
                                        minWidth: '170px',
                                        textTransform: 'uppercase',
                                    }}
                                >register</Button>
                                <Button variant="outlined" href="#learnmore"
                                    sx={{
                                        backgroundColor: 'transparent',
                                        borderColor: 'common.white',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        color: 'common.white',
                                        padding: '10px 0',
                                        width: '100%',
                                        minWidth: '170px',
                                        textTransform: 'uppercase',
                                        '& .Mui-focusVisible': {
                                            outline: 'none',
                                        }
                                    }}
                                >Login</Button>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                sx={{
                    position: 'relative',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                }}
            >
                <Image
                    src='/Assets/Home image@2x.png'
                    alt='Backdroup Image'
                    layout="fill"
                    objectFit="cover"
                />
                <Container maxWidth="xl"
                    sx={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'end',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            width: '500px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: {xs: 'center', md: 'start'},   
                            flexDirection: 'column',
                            textAlign: {xs: 'center', md: 'left'},
                            
                        }}
                    >
                        <Typography 
                        variant='h3' 
                        component='h3'
                        color='common.white'
                        fontWeight='normal'
                        gutterBottom
                        >
                            WhatsApp for Business
                        </Typography>
                        <Typography 
                            variant='h6' 
                            component='p'
                            color='common.white'
                            fontWeight='normal'                        
                        >
                            More then WhatsApp notification
                            which make your business communicative
                            and attractive!
                        </Typography>
                        <Button variant="contained" href="#learnmore"
                            sx={{
                                backgroundColor: '#0cebeb',
                                backgroundImage: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                                mt: 4,
                                fontSize: '1rem',
                                fontWeight: '500',
                                textTransform: 'capitalize',
                                color: 'common.white',
                                padding: '10px 0',
                                minWidth: '170px',
                            }}
                        >Learn More</Button>
                        
                    </Box>
                </Container>
            </Box>
        </Box>
    )
};
