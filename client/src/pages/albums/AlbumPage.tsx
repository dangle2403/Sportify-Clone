import { useMusic } from "@/hooks/useMusic";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Play } from "lucide-react";

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSecs).padStart(
    2,
    "0"
  )}`;
};

const AlbumPage = () => {
  const { albumId } = useParams();
  const { isLoading, fetchAlbumById, currentAlbum } = useMusic();
  useEffect(() => {
    fetchAlbumById(albumId!);
  }, [fetchAlbumById, albumId]);
  console.log(currentAlbum);

  if (isLoading) return null;

  return (
    <div className="h-full">
      <ScrollArea className="h-full">
        {/* Main content area */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80 to-zinc-900 pointer-events-none"
            aria-hidden="true"
          />
          {/* Header with album details */}
          <div className="relative z-10">
            <div className="flex p-6 gap-6 pb-8">
              <img
                src={currentAlbum?.imageURL}
                alt="album image"
                className="w-[240px] h-[240px] rounded shadow-xl"
              />
              <div className="flex flex-col justify-end gap-2">
                <p className="text-sm font-bold">Album</p>
                <p className="font-semibold text-7xl">{currentAlbum?.title}</p>
                <p className="flex items-center text-sm text-white font-md">
                  {currentAlbum?.artist} ● {currentAlbum?.songs?.length} songs ●{" "}
                  {currentAlbum?.releaseYear}
                </p>
              </div>
            </div>
          </div>
          {/* Play button */}
          <div className="px-6 pb-4 flex items-center relative gap-6 z-10">
            <Button
              size="icon"
              className="size-14 rounded-full bg-emerald-600 hover:bg-emerald-500 hover:scale-105 transition-all"
            >
              <Play className="size-7 text-black" />
            </Button>
          </div>
          {/* Songs list */}
          <div className="relative z-10">
            <div className="grid grid-cols-[10px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm text-zinc-400 border-b border-white/5 font-bold">
              <div>#</div>
              <div>Title</div>
              <div>Released Date</div>
              <div>
                <Clock className="size-4" />
              </div>
            </div>

            {currentAlbum?.songs?.map((song, idx) => (
              <div
                key={song._id}
                className="grid grid-cols-[10px_4fr_2fr_1fr] gap-4 px-10 py-3 text-sm text-zinc-400 hover:bg-white/5 rounded-md cursor-pointer"
              >
                <div>{idx + 1}</div>
                <div className="flex items-center gap-3">
                  <img
                    src={song.imageURL}
                    alt="song image"
                    className="size-10"
                  />
                  <div>
                    <div className="text-[15px] text-white font-bold">
                      {song.title}
                    </div>
                    <div className="13">{song.title}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  {song.createdAt.split("T")[0]}
                </div>
                <div className="flex items-center">
                  {formatDuration(song.duration)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AlbumPage;
