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
    winGame = () => {
        alert('you win!');
        this.resetGame();

    }
    handleImageClick = id => {
        console.log(`click to image with id ${id}`);
        if (this.hasBeenClicked(id)){
            console.log('duplicate detected');
            alert('You lose!');
            this.resetGame();
        } else {
            this.setState({
                clickedImages: [...this.state.clickedImages, id],
                score: this.state.score + 1,
                topScore: this.state.score >= this.state.topScore ? this.state.score + 1 : this.state.topScore
            });
            console.log("score: " + this.state.score);
            
        }
    }
    componentDidUpdate(){
        console.log('componentDidUpdate()');
        // console.log(this.state);
        if (this.state.score === this.state.images.length) {
            console.log('winningggg');
            this.winGame();
        } 
    }
    shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
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
                {this.shuffle(this.state.images).map(image => 
                <Card 
                src={image.src}
                key={image.id}
                alt={image.name}
                id={image.id}
                handleClick={this.handleImageClick}/>
                )}
            </div>
        </div>

      )
  }
}

export default App;
