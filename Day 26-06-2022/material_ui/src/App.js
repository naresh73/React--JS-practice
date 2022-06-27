import './App.css';
import './MOVIESVERSE/css files/movie.css';
//add that line
import React, { } from 'react';
import ResponsiveAppBar from './MOVIESVERSE/js files/header.js';
import SearchAppBar from './MOVIESVERSE/js files/search';
import ComboBox from './MOVIESVERSE/js files/movies.js';
import CustomizedSwitches from './MOVIESVERSE/js files/switch';
import OutlinedCard from './MOVIESVERSE/js files/word';
import MediaControlCard from './MOVIESVERSE/js files/player';
import DataGridDemo from './MOVIESVERSE/js files/data';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <ResponsiveAppBar />
      <br />
      <ComboBox />
      <br/>
      <div className='md' >
      <br/>
      <DataGridDemo/>
        <MediaControlCard/> 
      </div>
      <div className='out'>
        <center>
        <img alt='img' src='https://cdn.quotesgram.com/img/62/67/1510188966-quote-people-who-are-really-serious-about-software-should-make-their-own-hardware-alan-kay-99340.jpg'/>
        <OutlinedCard />
        </center>
      </div>
      <center>
        <CustomizedSwitches />
      </center>

    </div>
  );
}

export default App;
