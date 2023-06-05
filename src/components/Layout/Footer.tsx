import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/legacy/image';

export default function Footer() {
    return(
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                height: '100%',
                bgcolor: '#25D366',
                mt: 15,
                py: 4,

            }}
        >
            <Container
                sx={{
                    width: '100%',
                    maxWidth: {xs: '100%', md: '90%'},
                    position: 'relative',
                    
                }}
            >
                <Grid container spacing={2}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: 'common.white',
                    }}
                >
                    <Grid xs={12} md={6} order={{xs: 2, md: 1}}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: {xs: 'column', lg: 'row'},
                            }}
                        >
                            <Box
                                sx={{
                                    display: {xs: 'none', md: 'block'},
                                }}
                            >
                                <Image 
                                    src='/Assets/Mask Group 8@2x.png'
                                    alt='Wappin'
                                    loading="lazy"
                                    width={136}
                                    height={82}
                                    layout='fixed'
                                />
                            </Box>
                            <Typography variant="body1" component='p'
                                sx={{
                                    ml: {xs: 0, md: 2},
                                    mt: {xs: 2, lg: 0},
                                    textAlign: {xs: 'center', lg: 'left'},
                                    fontSize: {xs: '0.85rem', md: '1rem'},
                                    fontWeight: '500',
                                }}
                            >
                                &copy; 2019 Copyright by Wappin. All Right Reserved
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={6} order={{xs: 1, md: 2}}
                        sx={{
                            display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1,
                        }}
                    >
                            <Box
                                sx={{
                                position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    flexDirection: {xs: 'column', lg: 'row'},
                                
                                }}
                                >
                                    <Box
                                        sx={{
                                            display: {xs: 'block', md: 'none'},
                                            bgcolor: 'common.white',
                                            padding: '10px',
                                            borderRadius: '8px',
                                        }}
                                        >
                                            <img
                                                src='/Assets/02_@2x.png'
                                                alt='Wappin'
                                                loading="lazy"
                                                width='180px'
                                            />
                                        </Box>
                                    <Typography variant="body1" component='p'
                                        sx={{
                                            borderBottom: {xs: '1px solid #fff', md: 'none'},
                                            width: {xs: '100%', md: 'auto'},
                                            textAlign: {xs: 'center', md: 'left'},
                                            mb: {xs: 2, lg: 0},
                                            py: {xs: 2, md: 0},
                                        }}
                                    >
                                        www.spesolution.com
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant='body1' component='a' href='#sdf'
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'common.white',
                                                mx: {xs: 0, md: 3},
                                                mr: {xs: 3,},
                                            }}
                                        >
                                            <InstagramIcon fontSize='large' sx={{fontSize: '3rem'}}  />
                                        </Typography>
                                        <Typography variant='body1' component='a' href='#sdf'
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'common.white',
                                            }}
                                        >
                                            <FacebookIcon fontSize='large'  sx={{fontSize: '3rem'}}  />
                                        </Typography>
                                        <Typography variant='body1' component='a' href='#sdf'
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'common.white',
                                                mx: 3,
                                            }}
                                        >
                                            <TwitterIcon fontSize='large' sx={{fontSize: '3rem'}}  />
                                        </Typography>
                                        <Typography variant='body1' component='a' href='#sdf'
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'common.white',
                                            }}
                                        >
                                            <GoogleIcon fontSize='large' sx={{fontSize: '3rem'}}  />
                                        </Typography>
                                    </Box>
                            </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};
