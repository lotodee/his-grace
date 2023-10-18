import React, { useState } from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import {calender,news,events, projects, gigs } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import FeaturedGreen from '../../components/featuredGreen/FeaturedGreen';
import FeaturedBlue from '../../components/featuredBlue/FeaturedBlue';
import ProjectCard from '../../components/projectCard/projectCard';
import Calender from '../../components/calender/Calender';
import GigCard from '../../components/gigCard/GigCard';
import "./Home.scss"
import Classes from '../../components/classes/Classes';
const Home = () => {
  const [selectedOption, setSelectedOption] = useState('Calendar'); // Default option is 'Calendar'

  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Classes/>
      <Calender setSelectedOption={setSelectedOption} />
       <div className="catHome">

        {selectedOption === 'Calendar' && (
          calender.map((card) => {
            return <CatCard key={card.id} item={card} />;
          }))}
        {selectedOption === 'News' && (
          news.map((n)=>{
            return <CatCard key={n.id} item={n} />;
          })
        )}
        {selectedOption === 'Admissions' && (
         events.map((e)=>{
          return <CatCard key={e.id} item={e} />;
         })
        )}
    </div>
      <FeaturedGreen />
      <FeaturedBlue />q
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} item={project} />;
        })}
      </Slide>
    </div>
  );
};

export default Home;
