import React, {useState}from "react";
import axios from "axios";
import './assets/clima.css'
import Mapa from './map';

//const url='https://api.openweathermap.org/data/2.5/weather?id=4000821&appid=763a3a3fc222d79627713511e778a8ae'
function Clima (){
    const [ciudad, setCiudad] = useState('La Piedad');
    const [resultado, setResultado] = useState('');
    const [coord, setCoord] = useState([20.34495, -102.05876]);
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=763a3a3fc222d79627713511e778a8ae&units=metric`;	
    
    const peticion =(event)=>{
        if(event.key === 'Enter'){
            axios.get(url).then(res => {
                setResultado(res.data);
                console.log(res.data);
                setCoord([res.data.coord.lat, res.data.coord.lon]);
            })
            setResultado('');
        }
    }

    return<div id="container">
    
    <div id="lateral">Este es el Cima actual en:
        <h1>{resultado.name}</h1>
        {resultado.main ? <h1>{resultado.main.temp} °C</h1>:null}
        {resultado.main ? <p>Temperarura Max:{resultado.main.temp_max} °C</p>:null}
        {resultado.main ? <p>Temperarura Min:{resultado.main.temp_min} °C</p>:null}
        

        
        <input type="text" value={ciudad} onChange={(event)=>setCiudad(event.target.value)} onKeyPress={peticion}/> 
        
    </div>
    <div id="siguiente">
    <Mapa coords={coord}/> 
    </div>
    </div>
    

}
export default Clima;