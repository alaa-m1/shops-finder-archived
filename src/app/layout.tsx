import type { Metadata } from 'next'
import '../app/globals.css'
import { linksDetails } from '@/shared'
import { Box } from '@mui/material';
import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Box
        className="relative flex flex-col min-h-[100vh] justify-between"
        >
          <Header links={linksDetails} />
          <Box className="grow-[1]">
            <main className="py-[10px] px-[5px]">
              {children}
            </main>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Footer />
          </Box>
        </Box>
      </body>
    </html>
  )
}
