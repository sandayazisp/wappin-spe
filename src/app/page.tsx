'use client'
import SectionContact from '@/components/Content/SectionContact'
import SectionFeatures from '@/components/Content/SectionFeatures'
import SectionProduct from '@/components/Content/SectionProduct'
import SectionSession from '@/components/Content/SectionSession'
import SectionWappin from '@/components/Content/SectionWappin'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { Box } from '@mui/material'

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

          {/* Content Wappin Start */}
           <SectionWappin />
          {/* Content Wappin End */}

          {/* Content Product Start */}
          <SectionProduct />
          {/* Content Product End */}

          {/* Content Session Start */}
          <SectionSession />
          {/* Content Session end */}

          {/* Content Features Start */}
          <SectionFeatures />
          {/* Content Features End */}

          {/* Content Contact Start */}
          <SectionContact />
          {/* Content Contact End */}
        </Box>
      </main>
      <Footer />
    </>
  )
}
