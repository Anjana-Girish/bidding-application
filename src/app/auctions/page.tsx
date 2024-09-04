import {database} from "src/app/db/database";
import Image from "next/image";
import { env } from "process";
import { ItemCard } from "../item-card";
import {items} from "src/app/db/schema";
import { eq } from "drizzle-orm";
import {auth} from "src/app/auth";
import { EmptyState } from "./empty-state";
import { pageTitleStyles } from "@/style";
export default async function MyAuctionPage() {
  const session=await auth();
  if (!session||!session.user){
    throw new Error("Unauthorized");
  }
  
  const allItems = await database.query.items.findMany({
    where:eq(items.userId,session.user.id!),
  });
  const hasItems=allItems.length>0;

  return <main  className="container mx-auto py-12 space-y-8">
    <h1 className={pageTitleStyles}>
    Your Current Auctions For Sale
    </h1>
    {hasItems?(
    <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (<ItemCard key={item.id} item={item}/>))}
    </div>
    ):(<EmptyState/>

     )}
  </main>
};
