import React from 'react'
import Hero from '../component/Hero'
import HomeCard from '../component/HomeCard'
import JobsListings from '../component/JobsListings'
import ViewAllJobs from '../component/ViewAllJobs'

const HomePage = () => {
  return (
    <>
     <Hero 
     title='Become a React Dev' 
     subtitle='Find the React job that fit your Skills and needs' 
     />
     <HomeCard />
     <JobsListings isHome={true} />
     <ViewAllJobs />

    </>
  )
}

export default HomePage