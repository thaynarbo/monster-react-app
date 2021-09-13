import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
	}

	// componentDidMount renderiza assim que a página carrega

	async componentDidMount() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const data = await response.json();
		this.setState({ monsters: data });
	}

	render() {
		return (
			<div>
				<CardList monsters={this.state.monsters} />
			</div>
		);
	}
}

export default App;
