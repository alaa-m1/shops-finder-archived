import Image from 'next/image'
import Link from 'next/link'

export default function ShopsList(shopsList: any) {
  const allShops = shopsList.allShops;
  return(
    <div>
      {
        allShops.map((shop: any) =>
        <Link key={shop['_id']} href={`/shops/${shop['_id']}`}>
          <div>
            <Image
              src={shop.cover}
              width={200}
              height={200}
              alt={shop.name}
            />
            <h2>{shop.name}</h2>
            <p>{shop.rating}</p>
          </div> 
        </Link> 
      )}
    </div>  
  )

}