import { signOut } from "src/app/auth"
import {Button} from "src/components/ui/button";
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({
          redirectTo:"/",
        })
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}