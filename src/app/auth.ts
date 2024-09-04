import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import {database} from "src/app/db/database";
import{accounts,sessions,users,verificationTokens} from "src/app/db/schema";
declare module "next-auth"{
    interface Session{
        user:{
            id:string;
        }&DefaultSession["user"];
    }
}
export const{handlers,signIn,signOut,auth}=NextAuth({
    adapter:DrizzleAdapter(database,{
        usersTable: users,
        accountsTable: accounts as any,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    callbacks:{
        session({session,user}){
            session.user.id=user.id
            return session
        },
    },
    providers:[Google],
});