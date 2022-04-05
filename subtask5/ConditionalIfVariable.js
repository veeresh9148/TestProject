
function Circle(props) {
    const cirStyle = {
        backgroundColor: props.color
    };

    return <div className="circle"
                style={cirStyle}>
           </div>
}


function GreenCircle(props) {
    return <Circle color="green"></Circle>
}

function RedCircle(props) {
    return <Circle color="red"></Circle>
}


function StopButton(props) {
    return (
        <button className="button" onClick={props.toggle}>
            Stop
        </button>
    );
}

function GoButton(props) {
    return (
        <button className="button" onClick={props.toggle}>
            Go
        </button>
    );
}


class ToggleCircle extends React.Component {

  state = {
    go: true
  }

  toggle = () => {
      this.setState(function(prevState) {
          return {
              go: !prevState.go
          }
      });
  }

  render() {
    let button, circle;

    if (this.state.go) {
        circle = <GreenCircle />
        button = <StopButton toggle={this.toggle} />
    } else {
        circle = <RedCircle />
        button = <GoButton toggle={this.toggle} />
    }

    return (
        <div>
          {circle}
          {button}
        </div>
    );
  }

}

ReactDOM.render(<ToggleCircle/>,
    document.getElementById('react-conditional-if'));


