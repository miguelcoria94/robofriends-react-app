import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          robots: [],
          searchfield: ""
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({ robots: users })
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        let robots = this.state.robots.filter(robot => {
          return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={robots}/>
            </div>
        );
    };
};

export default App;