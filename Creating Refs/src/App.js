import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.focusInput = React.createRef();
  }

  focusButton = () => {
    this.focusInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.focusInput} />
        <button onClick={this.focusButton}>Focus the text</button>
      </div>
    );
  }
}

export default App;
