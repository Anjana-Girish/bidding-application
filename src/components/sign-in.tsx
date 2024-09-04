
import { signIn } from "src/app/auth";
import {Button} from "src/components/ui/button";
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  )
} 