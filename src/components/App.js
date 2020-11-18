import React from "react"
import Movie from "./Movie"

class main extends React.Component{

    render()
    {
        return(
            <div>
                 <Header/>
              
                 <Greeting />
               <Greeting2/>
               <cars/>

            </div>
        )
    }
}



// #3
class Greeting extends React.Component {
    render(){
     
     return (
         <div>
           <Movie movieData={{name:"The Shawshank Redemption",year:"1984*"}}/>
        <Movie movieData={{name:"Intersteller",year:"2014"}}/>
        <Movie movieData={{name:"The Hurt Locker",year:"2009"}}/>
        <Movie movieData={{name:"Prestige",year:"2009"}}/>
        <Movie movieData={{name:"Bad Boys",year:"2020"}}/>
        
         </div>
     )
    }
 }
 
 class Greeting2 extends React.Component {
    render(){
     
     return (
         <div>
           <Movie movieData={{name:"The Shawshank Redemption",year:"1984*"}}/>
        <Movie movieData={{name:"Intersteller",year:"2014"}}/>
        <Movie movieData={{name:"The Hurt Locker",year:"2009"}}/>
        <Movie movieData={{name:"Prestige",year:"2009"}}/>
        <Movie movieData={{name:"Bad Boys",year:"2020"}}/>
        
         </div>
     )
    }
 }
class Header extends React.Component{
    render()
    {
        return (
           <header>
               <h1>Welcome</h1>
           </header>
        )
    }
}
export default main
