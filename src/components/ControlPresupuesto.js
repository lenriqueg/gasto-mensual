import React from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Presupuesto presupuesto={this.props.presupuesto} />
                <Restante 
                    presupuesto={this.props.presupuesto}
                    restante={this.props.restante} />
            </React.Fragment>
        )
    }
}

export default ControlPresupuesto;