'use server'
import { revalidatePath } from "next/cache";
import {database} from "src/app/db/database";
import {items} from "src/app/db/schema";
import {auth} from "src/app/auth";
import {redirect} from "next/navigation";
import { getSignedUrlForS3Object } from "@/lib/s3";
export async function createUploadUrlAction(key:string,type:string){
    return await getSignedUrlForS3Object(key,type);
}
export async function createItemAction({
fileName,
name,
startingPrice,
}:{fileName:string,name:string,startingPrice:number}) {
        'use server';
        const session=await auth();
        if(!session){
            throw new Error("Unauthorized");
        }
        const user=session.user;
        if(!user|| !user.id){
            throw new Error("Unauthorized");
        }
        
        
        await database.insert(items).values({
          name,
          startingPrice,
          fileKey:fileName,
          userId:user.id,
        });
        redirect("/");
    }
