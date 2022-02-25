import { useContext, useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { SideBarPromise } from './moviesContext';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from '../src/components/SideBar';



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  

  return (
    <SideBarPromise>
      <SideBar>

      </SideBar>
    </SideBarPromise>


    
  )
}