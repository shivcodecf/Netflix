import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data  from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => { 
  const[apiData,setApidata]=useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDcyYjM4NTVkNWQ4Y2RmY2M0ODRmYjMxZWIyODQxOCIsInN1YiI6IjY2MmI2N2UzNTAxY2YyMDExZWIzOGFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JnZ0ct8GHsjh80ly1BMbZ77eXA1fv8O1h5h546_Gjos'
    }
  }; 
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results))
    .catch(err => console.error(err));

  },[])
  
  
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2> 
      <div className="card-list">
        {
          apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}> 
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" /> 
            <p>{card.original_title}</p>
          
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
