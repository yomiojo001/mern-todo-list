import React, { useState, useEffect } from 'react'
import './App.css';



function App() {

  const[pageload, setPageload] = useState('')

  useEffect(
    () => {
      try {
        fetch("/server")
          .then(response => response.json())
          .then(json =>  {
            console.log(json);
            setPageload(json)
          });
      } catch (error) {
        console.error(error);
      }
    }, []
  );

  // backenddisplay = () =>{
  //   fetch('/server',{
  //     method: 'GET',
  //     Accept
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({display: json})
  //     console.log(json)}
  //   )

  // }
  

    return (
      <div>
        <h2>Client todo active</h2>
        <p>{JSON.stringify(pageload)}
        </p>
      </div>
    )
}

export default App