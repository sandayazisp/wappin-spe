'use client'
import Header from '@/components/Layout/Header'
import { Box, Container, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/legacy/image'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Box bgcolor='common.white'
          sx={{
            position: 'relative',
          }}
        >
          <Container 
            sx={{
              bgcolor: '#FDFDFD',
              borderRadius: '10px',
              // bgcolor: 'red',
              border: '1px solid #E5E5E5',
              height: '100%',
              minHeight: '1550px',
              position: 'relative',
              top: -50,
              boxShadow: '-1px 9px 14px 4px rgba(0,0,0,0.06)',
              maxWidth: {xs: '100%', md: '90%'},
            }}
          >
          </Container>
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              height: '100%',
              pt: 10,
              width: '100%',
            }}
          >
            <Image 
              src='/Assets/Wapp line2@2x.png'
              height={100}
              width={500}
              layout='responsive'
              alt='Wappin'
            />
          <Grid2 container
            sx={{
              mt: 10,
            }}
          >
            <Grid2 xs={6.5}>
              <Box 
                sx={{
                  objectPosition: 'left', marginLeft: '-110px'
                }}
              >
                <Image 
                  src='/Assets/Group 176-@2x.png'
                  height={150}
                  width={500}
                  objectFit='cover'
                  layout='responsive'
                  alt='Wappin'
                />
              </Box>
            </Grid2>
            <Grid2 xs={5.5}
              sx={{
                borderRight: '20px solid',
                borderColor: 'common.black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                pt: 8,
                pl: 15,
              }}
            >
              <Typography variant='body1' component='p'
                sx={{
                  width: '100%',
                  maxWidth: '70%',                  
                  mb: 3,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ad modi neque ipsa amet commodi. Laboriosam ipsam repudiandae, atque saepe quis deleniti inventore soluta sint eveniet quidem officia a ut sequi illum iure explicabo totam accusamus. Excepturi molestias ad quae tempora rem, saepe deserunt voluptatibus ipsum, similique itaque, aspernatur autem?
              </Typography>
                <Typography variant='body1' component='a' href='#readmore' color='green'>
                  Read More
                </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container
            sx={{
              mt: 10,
              overflow: 'hidden',
            }}
          >
            <Grid2 xs={5.5}
              sx={{
                borderLeft: '20px solid',
                borderColor: 'common.black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'end',
                pr: 15,
                
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  mr: 18,
                  mb: 5,
                }}
              >
                <img src='/Assets/02_@2x.png' alt='Logo Wappin' width='50%' />

              </Box>
              <Typography variant='body1' component='p'
                sx={{
                  width: '100%',
                  maxWidth: '70%',                  
                  mb: 3,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ad modi neque ipsa amet commodi. Laboriosam ipsam repudiandae, atque saepe quis deleniti inventore soluta sint eveniet quidem officia a ut sequi illum iure explicabo totam accusamus. Excepturi molestias ad quae tempora rem, saepe deserunt voluptatibus ipsum, similique itaque, aspernatur autem?
              </Typography>
              <Typography variant='body1' component='a' href='#readmore' color='green'
                sx={{
                  width: '100%',
                  maxWidth: '70%',                  
                  mb: 3,
                }}
              >
                Read More
              </Typography>
            </Grid2>
            <Grid2 xs={6.5}>
              <Box 
                sx={{
                  objectPosition: 'right', marginRight: '-110px',
                }}
              >
                <Image 
                  src='/Assets/Group 177-@2x.png'
                  height={150}
                  width={500}
                  objectFit='cover'
                  layout='responsive'
                  alt='Wappin'
                />
              </Box>
            </Grid2>
            
          </Grid2>
          </Box>
          <Container
            sx={{
              width: '100%',
              maxWidth: {xs: '100%', md: '90%'},
            }}
          >
            <Typography variant='h2' component='h1' fontWeight={700} color='#CFCFCF'
              sx={{
                pl: 20,
                pt: 5,
                '&::after': {
                  content: '""',
      display: 'inline-block',
      position: 'relative',
      top: '-40px', // Mengatur posisi vertikal buletan
      left: '23px', // Mengatur posisi horizontal buletan
      width: '35px',
      height: '35px',
      borderRadius: '50%', // Membuat buletan
      backgroundColor: '#25D366',
      border: '1px solid #CFCFCF',
      marginLeft: '5px', // Mengatur jarak antara teks dan buletan
                }
              }}
            >
              Product
            </Typography>
          </Container>
        </Box>
      </main>
    </>
  )
}
