import {database} from "src/app/db/database";
import Image from "next/image";
import { env } from "./env";
import { ItemCard } from "./item-card";

export function getImageUrl(fileKey:string){
  return `${env.NEXT_PUBLIC_BUCKET_URL}/${fileKey}`;
}
export default async function HomePage() {
  const allItems = await database.query.items.findMany();
  
  return <main  className="container mx-auto py-12 space-y-8">
    <h1 className="text-4xl font-bold mb-8">
    Items For Sale
    </h1>
    <div className="grid grid-cols-4 gap-8">
    {allItems.map((item) => (<ItemCard key={item.id} item={item}/>))}
    </div>
  </main>
};
