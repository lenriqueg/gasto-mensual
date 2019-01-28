import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import '../css/App.css';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			presupesto: null,
			restante: null,
			gastos: []
		}
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
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
