import { Song } from "../types/game";

export const searchDeezer = async (title: string, artist: string): Promise<Song | null> => {
  try {
    const query = encodeURIComponent(`${title} ${artist}`);
    const response = await fetch(`https://api.deezer.com/search?q=${query}`);
    const data = await response.json();

    if (data.data && data.data.length > 0) {
      const track = data.data[0];
      return {
        id: track.id.toString(),
        title: track.title,
        artist: track.artist.name,
        preview: track.preview,
        album: track.album.title,
        cover: track.album.cover_medium,
      };
    }
  } catch (error) {
    console.error("Error searching Deezer:", error);
  }
  return null;
};