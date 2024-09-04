'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { NotificationFeedPopover, NotificationIconButton ,NotificationCell} from "@knocklabs/react";

import { Button } from "@/components/ui/button";
interface NotificationItemData {
  itemId: string;
  itemName: string;
  bidAmount: number;
}
interface Notification {
  data: NotificationItemData;
}
export function Header(){
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef(null);

    const session=useSession();
    const userId = session?.data?.user?.id;

    return (
        <div className="bg-gray-200 py-2">
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-12">
            <Link href="/" className="hover:underline flex items-center gap-1">
            <Image className="rounded-full" src="/mon.jpg" width="50" height="50" alt="Logo"></Image>
            Anythingbidding.com
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/"className="hover:underline flex items-center gap-1">All Auctions</Link>

{userId && (<>        
              <Link href="/bids/create"className="hover:underline flex items-center gap-1">Create Auction</Link>

              <Link href="/auctions"className="hover:underline flex items-center gap-1">My Auctions</Link></>)}
            </div>
            </div>
            <div className="flex items-center gap-4">
            {userId && (<> 
            <NotificationIconButton
              ref={notifButtonRef}
              onClick={(e) => setIsVisible(!isVisible)}
            />
            <NotificationFeedPopover
                buttonRef={notifButtonRef}
                isVisible={isVisible}
                onClose={() => setIsVisible(true)}
                renderItem={(item)=>
                  <div className="bg-gray-100 rounded-xl p-8">Someone outbidded you!</div>}/>
            </>
          )}
              
            
{session?.data?.user.image && (
<Image src={session.data.user.image} width="40" height="40" alt="user avatar" className="rounded-full"/>)}

          <div>{session?.data?.user?.name}</div>
          <div>
            {userId ? (
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Sign Out
              </Button>
            ) : (
              <Button type="submit" onClick={() => signIn()}>
                Sign In
              </Button>
            )}
              </div> 
            </div>
        </div>
    </div>);
}