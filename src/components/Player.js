import React, {PureComponent } from 'react';
import Counter from './Counter'

class Player extends PureComponent {
  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
          changeScore={changeScore} 
          score={score} 
          index={index} 
        />
      </div>
    );
  } 
}

export default Player;