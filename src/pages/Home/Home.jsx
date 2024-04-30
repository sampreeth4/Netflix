import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'

function Home() {
  return (
    <div>
        <Navbar/>
        <Featured type="movie"/>
        <List />
        <List />
        <List />
        <List />
        <List />

      </div>
  )
}

export default Home
