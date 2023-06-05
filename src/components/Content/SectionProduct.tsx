import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/legacy/image'
export default function SectionProduct() {
    return(
        <Container
            sx={{
              width: '100%',
              maxWidth: {xs: '100%', md: '90%'},
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                flexDirection: {xs: 'column'},
                width: '100%',
                
              }}
            >
               <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF'
              sx={{              
                position: {xs: 'relative', },
                top: 0,
                left: 0,
                pl: {xs: 0, lg: 20},
                pt: {xs: 10, md: 10},
                mb: {xs: 5, lg: 8},
                fontSize: {xs: '3rem', md: '3.75rem'},
                '&::after': {
                  content: '""',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-40px', 
                  left: {xs: '0', md: '23px'},
                  width: {xs: '25px', md: '35px'},
                  height: {xs: '25px', md: '35px'},
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  border: '1px solid #CFCFCF',
                  marginLeft: '5px',
                }
              }}
            >
              Product
            </Typography>
            <Box
              sx={{
                position: 'relative'
              }}
            >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: {xs: '200px',sm: '275px', md: '500px'}, 
                  }}
                >
                  <Image
                    src={'/Assets/Group 177@2x.png'}
                    alt='Wappin'
                    objectFit='cover'
                    objectPosition={'bottom'}
                    layout='fill'
                  />
                </Box>
                {/* <img
                  src='/Assets/Group 177@2x.png'
                  alt='Wappin'
                  loading="lazy"
                  width='100%'
                /> */}
                <Box
                  sx={{
                    position: {xs: 'relative', md: 'absolute'},
                    // position: 'absolute',
                    // right: '0',
                    // bottom: '0',
                    transform: {xs: 'translate(0,0)', md: 'translate(-50%, -50%)' },
                    width: '100%',
                    height: '100%',
                    maxWidth: {xs: '100%', md: '40%'},
                    maxHeight: {xs: '100%', md: '10%'},
                    bottom: {xs: '0', md: '2%', xl: '12%'},
                    right: {xs: '0', md: '-17%', lg: '-15%'},
                    
                    zIndex: 1,
                    mt: {xs: 3, md: 0},
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant='h3' component='h3'
                      sx={{
                        fontSize: {xs: '1.5rem', md: '1.5rem', lg: '2rem', xl: '2.5rem'},
                      }}
                    >
                      All Projects. One Platform.
                    </Typography>
                    <Button variant="contained" href="#learnmore"
                        sx={{
                            backgroundColor: '#0cebeb',
                            backgroundImage: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                            mt: {xs: 3, md: 4},
                            fontSize: '1rem',
                            fontWeight: '500',
                            textTransform: 'capitalize',
                            color: 'common.white',
                            padding: '10px 0',
                            minWidth: '170px',
                        }}
                    >Try Now</Button>
                  </Box>
                </Box>
            </Box>
            </Box>
          </Container>
    )
};
