const stories =[
    {
        name: "Ambani",
        src: "/elonmusk.jpg",
        profile: "/ambani.jpg",
    },
    {
        name: "Bill Gates",
        src: "/justinbieber.jpg",
        profile: "/bill.jpg",
    },
    {  name: "Elon Musk",
       src: "/ambani.jpg",
       profile: "/elonmusk.jpg",
    },
    {  name: "Justin Bieber",
       src: "/zaynmalik.jpg",
       profile: "/justinbieber.jpg",
    },
    {  name: "Mark Zukerberg",
       src: "/bill.jpg",
       profile: "/mark.jpg",
    },

];

import React from 'react'
import StoryCard from './StoryCard';

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) =>(
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
      ))}
    </div>
  );
}

export default Stories
