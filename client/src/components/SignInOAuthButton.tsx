import { useSignIn } from "@clerk/clerk-react"
import { Button } from "./ui/button";



const SignInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();

  if (!isLoaded) {
    return null
  }

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    })
  }

  return (
    <Button onClick={signInWithGoogle} variant={"secondary"} className="w-full text-white border-zinc-200 h-11">
      Sign in with Google
    </Button>
  )
}

export default SignInOAuthButton