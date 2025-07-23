import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
    </div>
  )
}

export default Home