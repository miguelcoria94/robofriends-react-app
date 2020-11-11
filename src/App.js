import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBoc'

const App = () => {
    return (
        <div className="tc">
            <h1 className="">RobotFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    )
}

export default App;