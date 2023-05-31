import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/legacy/image';

export default function SectionWappin() {
    return (
        <>
            {/* Box Wappin Start */}
           <Container 
            sx={{
              bgcolor: '#FDFDFD',
              borderRadius: '10px',
              // bgcolor: 'red',
              border: '1px solid #E5E5E5',
              height: '100%',
              minHeight: {xs: '1700px', md: '1550px'},
              position: 'relative',
              top: -50,
              boxShadow: '-1px 9px 14px 4px rgba(0,0,0,0.06)',
              maxWidth: {xs: '100%', md: '90%'},
            }}
          >
          </Container>
          {/* Box Wappin End */}
          
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              height: '100%',
              pt: {xs: 0, md: 10},
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
          <Grid container
            sx={{
              mt: 10,
            }}
          >
            <Grid xs={12} md={6.5} >
              <Box 
                sx={{
                  objectPosition: {xs: 'center', md: 'left'}, 
                  marginLeft: {xs: 0, md: '-110px'},
                  position: 'relative',
                  width: '100%',
                  height: {xs: '200px', md: '400px'},
                }}
              >
                <Image 
                  src='/Assets/Group 176-@2x.png'
                  objectFit='cover'
                  layout='fill'
                  alt='Wappin'
                />
              </Box>
            </Grid>
            <Grid xs={12} md={5.5} 
              sx={{
                borderRight: {xs: 'none', md: '20px solid'},
                borderColor: 'common.black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: {xs: 'center', md: 'start'},
                pt: {xs: 3, md: 8},
                pl: {xs: 0, md: 15},
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
                <Typography variant='body1' component='a' href='#readmore' color='green'
                sx={{
                  width: '100%',
                  maxWidth: '70%',                  
                  mb: 3,
                }}
                >
                  Read More
                </Typography>
            </Grid>
          </Grid>

          <Grid container
            sx={{
              mt: 10,
              overflow: 'hidden',
            }}
          >
            <Grid xs={12} md={5.5} order={{xs: 2, md: 1}}
              sx={{
                borderLeft: {xs: 'none', md: '20px solid'},
                borderColor: 'common.black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: {xs: 'center', md: 'end'},
                pr: {xs: 0, md: 15},
                
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: {xs: 'center', md: 'end'},
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: {xs: '70%', md: '50%'},
                  height: '75px',
                  position: 'relative',
                  mr: {xs: 0, md: 18},
                  mb: {xs: 5, md: 5},
                  mt: {xs: 5, md: 0},
                }}
              >
                {/* <img src='/Assets/02_@2x.png' alt='Logo Wappin' width='50%' /> */}
                <Image
                  src='/Assets/02_@2x.png'
                  alt="Logo Wappin"
                  layout='fill'
                />

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
            </Grid>
            <Grid xs={12} md={6.5} order={{xs:1,md:2}}>
            {/* <Box 
                sx={{
                  objectPosition: {xs: 'center', md: 'left'}, 
                  marginLeft: {xs: 0, md: '-110px'},
                  position: 'relative',
                  width: '100%',
                  height: {xs: '200px', md: '400px'},
                }}
              >
                <Image 
                  src='/Assets/Group 176-@2x.png'
                  objectFit='cover'
                  layout='fill'
                  alt='Wappin'
                />
              </Box> */}
              <Box 
                sx={{
                  objectPosition: 'right', 
                  marginRight: '-140px',
                  position: 'relative',
                  // width: '100%',
                  height: {xs: '200px', md: '400px'},
                }}
              >
                <Image 
                  src='/Assets/Group 177-@2x.png'
                  objectFit='cover'
                  layout='fill'
                  alt='Wappin'
                />
              </Box>
            </Grid>
          </Grid>
          </Box>
        </>
    )
};
