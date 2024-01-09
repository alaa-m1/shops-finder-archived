import React from "react";
import Link from 'next/link'
import { Shops } from "@/types";

export default function ShopsList({shopsList}: {shopsList: Shops}) {
  const allShops = shopsList;
  return(
    <div>
      {
        allShops.map((shop) =>
        <Link key={shop.id} href={`/shops/${shop.id}`}>
          <div>
            <h2>{shop.name}</h2>
            <p>{shop.address}</p>
          </div> 
        </Link> 
      )}
    </div>  
  )

}