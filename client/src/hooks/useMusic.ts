import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useMusic = create((set) => ({
  albums: [],
  songs: [],
  isLoading: false,

  fetchAlbums: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/albums");
      set({ albums: res.data });
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchSongs: async () => {},
}));
