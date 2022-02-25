import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from './services/api';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface SiderBarProviderProps {
  children: ReactNode;
}

export const SideBar = createContext<GenreResponseProps[]>([]);




export function SideBarContext({children}: SiderBarProviderProps) {

  const [genres, setGenres] = useState< []>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  
  return (
    <SideBar.Provider value={[]}>
        {children}
    </SideBar.Provider>
  )
}