import { SignedOut, SignedIn, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButton";


const Topbar = () => {
  const isAdmin = false;
  return (
    <div className="flex items-center justify-center p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 items-center">Spotify</div>
        <div className="flex items-center gap-4">
          {isAdmin && (
            <Link to="/admin" className="">
              <LayoutDashboardIcon className="size-6 mr-2" />
              Admin Dashboard
            </Link>
          )}
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInOAuthButtons />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
