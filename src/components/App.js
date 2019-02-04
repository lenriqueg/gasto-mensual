import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import '../css/App.css';
import {validarPresupuesto} from '../helper';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			presupesto: null,
			restante: null,
			gastos: []
		}
	}

	componentDidMount() {

		this.obtenerPresupuesto();
	}

	obtenerPresupuesto() {

		let presupuesto = prompt('¿Cual es el presupuesto?');

		let resultado = validarPresupuesto(presupuesto);

		if (!resultado) {

			this.obtenerPresupuesto();
		}

		this.setState({ 
			presupuesto: presupuesto,
			restante: presupuesto
		});
	}

	agregarGasto = (gasto) => {

			const gastos = this.state.gastos;

			gasto.uid = + new Date()

			gastos.push(gasto);

			this.setState({
				gastos
			});
	}

	render() {
		return (
			<div className="App container">
				<Header 
					titulo="Gasto semanal"
				/>

				<div className="contenido-principal contenido">
					<div className="row">
						<div className="one-half column">
							<Formulario 
								agregarGasto={ this.agregarGasto }
							/>
						</div>

						<div className="one-half column">
							<Listado
								gastos={this.state.gastos}
							/>
							<ControlPresupuesto
								restante={this.state.restante}
								presupuesto={this.state.presupuesto} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
