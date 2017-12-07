import React, {Component} from 'react';
import './Info.css';
import FontAwesome from 'react-fontawesome';


class Info extends Component {
    render() {
        return (
            <div className="informacion">
                <div className="box_info">
                    <FontAwesome name='check' className='icon_about' size='3x'/>
                    <h2>En Shoppy hacemos tus compras como tu las harías</h2>
                    <p className="p">Nuestra prioridad es tu satisfacción, por lo que siempre buscamos los productos de mejor calidad. </p>
                    <br/>
                    <p className="ask"> <FontAwesome name='phone' className='icon_about' size='1x'/>¿Qué pasa si no hay algun producto? Te llamaremos  </p>
                    <p className="ask"> <FontAwesome name='clock-o' className='icon_about' size='1x'/>¿En cuanto tiempo llega tu pedido? En 2 hrs </p>
                    <p className="ask"> <FontAwesome name='money' className='icon_about' size='1x'/>¿Como pagar? Puedes pagar a contra-entrega </p>

                </div>
            </div>
        );
    }
}

export default Info;
