import Home from "./home/Home";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Shops Finder',
}

const Page = () => {
  return <Home/>
};

export default Page;
