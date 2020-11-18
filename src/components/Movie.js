import React from "react"

function Movie(props){
    console.log(props)
    return (
        <div className="movieDiv">
            <h1>{props.movieData.name}</h1>
            <h3>{props.movieData.year}</h3>
        </div>
    )
}
export default Movie