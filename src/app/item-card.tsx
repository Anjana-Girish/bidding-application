import { getImageUrl } from "@/util/files";
import Image from "next/image";
import { Item } from "./db/schema";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatToDollar } from "@/util/currency";

export function ItemCard({item}:{item:Item}){
    return (
    <div key={item.id} className="border p-12 rounded-xl space-y-2 ">
      <Image className="rounded-xl "
      src={getImageUrl(item.fileKey)}
      alt={item.name}
      width={200}
      height={200}
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-lg">starting price:₹{formatToDollar(item.startingPrice)}</p>

      <Button asChild>
            <Link href={`/bids/${item.id}/`}>Place Bid</Link>
      </Button>
    
    </div>
    );
}