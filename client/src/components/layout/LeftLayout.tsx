import { House, Library, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlaylistSkeleton from "../skeletons/PlaylistSkeleton";
import { useMusic } from "../../hooks/useMusic.ts";
import { useEffect } from "react";

const LeftLayout = () => {
  const { isLoading, albums, fetchAlbums } = useMusic();
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);
  console.log("Albums:", albums);
  return (
    <div className="flex flex-col h-full p-2 bg-zinc-900/75 gap-2">
      <div className="flex flex-col w-full">
        <div className="bg-zinc-900 p-4 space-y-2">
          <Link
            to="/"
            className="w-full rounded-lg flex justify-start items-center text-white hover:bg-zinc-400 transition-colors"
          >
            <House className="size-6 mr-2 flex-shrink-0" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </div>
        <SignedIn>
          <div className="bg-zinc-900 p-4 space-y-2">
            <Link
              to="/messages"
              className="w-full rounded-lg flex justify-start items-center hover:bg-zinc-400 transition-colors"
            >
              <MessageCircle className="size-6 mr-2 flex-shrink-0" />
              <span className="hidden md:inline">Messages</span>
            </Link>
          </div>
        </SignedIn>
      </div>
      <div className="flex-1 rounded-lg overflow-y-auto bg-zinc-900/75 p-2">
        <div className="flex items-center">
          <Library className="size-6 mr-2 flex-shrink-0" />
          <span className="hidden md:inline">Playlists</span>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="space-y-2">
            {isLoading ? <PlaylistSkeleton /> : (
              albums.map((album) => (
                <Link 
                  to={`/albums/${album.id}`}
                  key={album._id}
                  className="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 cursor-pointer"
                >
                  <img src={album.imageURL} alt="album image" className="size-12 rounded-md flex-shrink-0"/>
                  <div className="flex-1 min-w-0 hidden md:block">
                    <h3 className="font-md text-white truncate">
                      {album.title}
                    </h3>
                    <p className="text-sm text-zinc-400 truncate">Album ● {album.artist}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LeftLayout;
