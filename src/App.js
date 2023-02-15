import React, { Component } from "react"
import "./App.css"
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"
import { reduxForm } from "redux-form"

class App extends Component {
  render() {
    const {
      fields: { firstName, lastName },
      increaseCounter, decreaseCounter,
      count
    } = this.props;
    return (
      <div>
        <div>
          <label>First Name</label>
          <input type="text" {...firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...lastName} />
        </div>
        <div>Count: {count}</div>
        <button onClick={() => {
          console.log('call came to me ~')
          increaseCounter()
          console.log('Fuckkkk')
        }}>
          Increase Count Form
        </button>
        <button onClick={() => decreaseCounter()}>
          Decrease Count Form
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

const appForm = reduxForm(
  {
    form: "App Form",
    fields: ["firstName", "lastName"],
  },
  mapStateToProps,
  mapDispatchToProps
)(App);

export default appForm
