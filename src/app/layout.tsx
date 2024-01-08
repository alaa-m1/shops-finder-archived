import type { Metadata } from 'next';
import '../app/globals.css';
import { linksDetails } from '@/shared';
import { Box } from '@mui/material';
import { Footer, Header } from '@/shared/layoutComponents';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Box className='relative flex min-h-[100vh] flex-col justify-between'>
          <Header links={linksDetails} />
          <Box className='flex grow'>
            <main className={`w-[100%] px-[5px] py-[10px]`}>{children}</main>
          </Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
