import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //Destructuración
    const { titulo, colorPrimario, colorSecundario, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const estiloTitulo = { borderColor: colorPrimario }

    //se debe poner <></> para poder que cumpla la función
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
                <input 
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {  //para que no arroje ningún error la consola, con esto se le quita responsabilidad al navegador
                        actualizarColor(e.target.value, id);
                    }}
                
                
                
                />
                <h3 style={estiloTitulo}> {titulo} </h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />) 
                    }
                </div>
            </section>  
        } 
    </>
}

export default Equipo;