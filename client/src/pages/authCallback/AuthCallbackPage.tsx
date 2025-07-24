import { Card, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  // Use a ref to track if the user has already been synced to avoid multiple requests
  const hasSynced = useRef(false);
  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user || hasSynced.current) return;
      try {
        await axiosInstance.post("/api/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageURL: user.imageUrl,
        });
        hasSynced.current = true;
      } catch (error) {
        console.error("Error syncing user:", error);
      } finally {
        navigate("/");
      }
    };
    syncUser();
  }, [isLoaded, user, navigate]);
  return (
    <div className="flex items-center justify-center bg-black h-screen w-full">
      <Card className="w-full max-w-sm bg-zinc-900 border-zinc-800">
        <CardContent className="">
          <Loader className="animate-spin size-6 text-emerald-500 mx-auto" />
          <h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
          <p className="text-zinc-400 text-sm">Redirecting...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallbackPage;
