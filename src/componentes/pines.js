import React, {useState}from "react";
import { Marker, Popup} from "react-leaflet";
import {icon} from './icono'
import lugares from './datos.json'
import axios from "axios";


const pines = (promps) => {
    // const [resultado, setResultado] = useState('');
    // const url=`http://localhost:3000/api/lugares`;
     let resultado=[];
    
    resultado = lugares.lugares;
    const pines = resultado.map((lugares,i) => {
        return (
            <Marker key={lugares.id} position={[lugares.lat, lugares.lon]} icon={icon}>
                <Popup>
                    <h4>ID: {lugares.id}</h4> <h4>ZONA: {lugares.zona}</h4>
                    <h4>DESC: {lugares.descripcion}</h4>
                    <h4>VENTA: {lugares.venta}</h4>

                </Popup>
            </Marker>
        );
    });




     return pines;  
 

}
export default pines;