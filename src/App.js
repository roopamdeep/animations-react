import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
class App extends Component {
  state = { opacity: 1, fontSize: 100, rotate: 360 };
  onAnimate = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        fontSize: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        fontSize: [50],
        rotate: [360],
        timing: { duration: 2000, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate, fontSize }) => {
        return (
          <div
            style={{
              position: "absolute",
              opacity: opacity,
              fontSize: fontSize,
              color: "teal",
              transform: `translate(0px,100px) rotateY(${rotate}deg)`,
            }}
          >
            Hello World!
          </div>
        );
      }}
    </Animate>
  );
  render() {
    return <div>{this.onAnimate()}</div>;
  }
}

export default App;
