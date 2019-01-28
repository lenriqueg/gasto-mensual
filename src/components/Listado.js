import React from 'react';
import Gasto from './Gasto';

class Listado extends React.Component {

    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {this.props.gastos.map(gasto => (
                    <Gasto key={gasto.uid} gasto={gasto} />
                ))}
            </div>
        )
    }
}

export default Listado;