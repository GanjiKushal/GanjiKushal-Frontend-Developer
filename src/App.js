import React, { useState } from 'react';

import { Homepage, Capsules, Search } from './webpages'
import { Header } from './header'

import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [filterType, setFilterType] = useState("")
  return (
    <>
      <Header />
      <Homepage />
      <Search setValue={setValue} setFilterType={setFilterType} filterType={filterType} />
      <Capsules filterType={filterType} value={value} />
    </>
  );
}

export default App;
