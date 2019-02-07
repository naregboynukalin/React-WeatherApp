import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="54264c39dc75468daa9bec02dcc552ef";

class App extends React.Component{


    getWeather= async (e) => {
        e.preventDefault();
        const api_call = await fetch(`https://api.darksky.net/forecast/&{API_KEY}/37.8267,-122.4233`);
        const data = await api_call.json();
        console.log(data);
    }
        render(){
            return (

               <div> 
              <Titles />
                <Form getWeather={this.getWeather}/>
            <Weather />
            </div>
            );

    }
}

export default App;