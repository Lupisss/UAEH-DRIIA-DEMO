import React, {Component} from 'react';
import './Info.css';
import FontAwesome from 'react-fontawesome';

//Final de la pagina
class Info extends Component {
    render() {
        return (
            <div className="informacion">
                <div className="box_info">
                    <FontAwesome name='university' className='icon_about' size='3x'/>
                    <h2>Politicas</h2>
                    <p>Garantizar que la movilidad se desarrolle en Instituciones de Educación Superior con reconocimiento académico y valor curricular.</p>
                    <p>Privilegiar los destinos académicos impartidos en lenguas distintas al español.</p>
                    <p>Privilegiar Instituciones de Educación Superior Rankeadas en QS, Webometrics, SIR SCimago y ARWU (Academic Ranking of World Universities).</p>

                    <br/>
                    <p className="ask"> <FontAwesome name='phone' className='icon_about' size='1x'/> (01 771) 71 72000  ext. 6022 </p>
                    <p className="ask"> <FontAwesome name='clock-o' className='icon_about' size='1x'/> Lunes a Viernes de 8:00 a 4:00 pm </p>
                    <p className="ask"> <FontAwesome name='envelope' className='icon_about' size='1x'/> iasistemas@uaeh.edu.mx</p>
                </div>
            </div>
        );
    }
}

export default Info;
