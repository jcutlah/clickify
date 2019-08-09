import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Card from './components/Cards/Card';
import images from './images.json';
import './App.css';



class App extends React.Component {
    state = {
        images,
        doubleClick: false,
        clickedImages: [],
        score: 0,
        topScore: 0
    }
    hasBeenClicked = id => {
        let doubleClick = false;
        this.state.clickedImages.forEach(key => {
            console.log(key, id);
            if (key === id){
                console.log('doubleclicked');
                doubleClick = true;
                
            }
        })
        return doubleClick;
    }
    resetGame = () => {
        this.setState({
            doubleClick: false,
            score: 0,
            clickedImages: []
        })
    }
    handleImageClick = id => {
        console.log(`click to image with id ${id}`);
        if (this.hasBeenClicked(id)){
            console.log('duplicate detected');
            this.resetGame();
        } else {
            this.setState({
                clickedImages: [...this.state.clickedImages, id],
                score: this.state.score + 1,
                topScore: this.state.score > this.state.topScore ? this.state.score + 1 : this.state.topScore
            });
        }
    }
  render() {
      return (
        <div className='container'>
            <Header />
            <Scoreboard 
            score={this.state.score}
            total={this.state.topScore}
            />
            <div className="row justify-content-center">
                {this.state.images.map(image => 
                <Card 
                src={image.src}
                key={image.id}
                alt={image.name}
                id={image.id}
                handleClick={this.handleImageClick}/>
                )}
            </div>
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
        </div>

      )
  }
}

export default App;
