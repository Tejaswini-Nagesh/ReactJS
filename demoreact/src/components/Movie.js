import React from 'react'
const Movie = (props) => {
  return (
    <div className="Movie">
    <img height="300px;" src={props.img}/>
    <p>{props.title}</p>
    <p>{props.year}</p>
    
    </div>
  )
}

export default Movie
/*<div className="main">
{
  data.map((element,index)=>{
    return(
    <Movie
    key={index}
    title={element.Title}
    year={element.Year}
    img={element.Poster} />
    )
  })
}


</div>
 */
