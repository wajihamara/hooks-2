import React,{useState} from 'react'

const movieListe = ({movies}) => {
    return (
        <div>
            {movies.map (  (el) => <h1> {el.title}</h1>)}
        </div>
    )
}

export default movieListe



