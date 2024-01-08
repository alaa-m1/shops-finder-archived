import { dbConnect } from '@/utils/mongoDB/mongo';
import ShopsList from './components/ShopsList';
import { Shops } from '@/utils/mongoDB/models/shopsModel';

export default async function Page() {
  await dbConnect();
  const allShops = await Shops.find();

  console.log('allShops======',allShops)

  return (
    <main>
      <div>
        <h1>Shops</h1> 
        <ShopsList allShops={allShops} />  
      </div>
    </main>
  )
}