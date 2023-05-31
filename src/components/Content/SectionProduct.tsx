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
                flexDirection: {xs: 'column', md: 'row'},
                
              }}
            >
               <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF'
              sx={{              
                position: {xs: 'relative', md: 'absolute'},
                top: 0,
                left: 0,
                pl: {xs: 0, md: 20},
                pt: {xs: 10, md: 10},
                fontSize: {xs: '3rem', md: '3.75rem'},
                '&::after': {
                  content: '""',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-40px', 
                  left: '23px',
                  width: '35px',
                  height: '35px',
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
                  position: 'relative',
                  width: '100%',
                  height: {xs: '200px', md: '800px'}, 
                }}
              >
                <Image
                  src={'/Assets/Group 177@2x.png'}
                  alt='Wappin'
                  objectFit='cover'
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
                  bottom: {xs: '0', md: '2%'},
                  right: {xs: '0', md: '5%'},
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  zIndex: 1,
                  mt: {xs: 3, md: 0},
                }}
              >
              <Typography variant='h3' component='h3'
                sx={{
                  fontSize: {xs: '1.5rem', md: '3rem'},
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
          </Container>
    )
};
