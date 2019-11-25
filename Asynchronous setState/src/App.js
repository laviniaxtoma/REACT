import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 46 + this.props.increment
    };
  }

  //CALLBACK METHOD
  // handleClick = () => {
  //   this.setState({meaningOfLife: this.state.meaningOfLife + 1}, ()=> console.log(this.state.meaningOfLife));
  // }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { meaningOfLife: prevState.meaningOfLife + prevProps.increment };
      },
      () => console.log(this.state.meaningOfLife)
    );
  };
  render() {
    return (
      <div className="App">
        <img
          alt="none"
          src="https://reactscript.com/wp-content/uploads/2016/06/React-Components-For-The-Web-Animations-API.gif"
        />
        <p>{this.state.meaningOfLife}</p>
        <button onClick={this.handleClick}>Update State</button>
      </div>
    );
  }
}

export default App;
