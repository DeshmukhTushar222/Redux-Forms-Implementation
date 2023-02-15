import React, { Component } from "react"
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/Counter/counter.actions"
import { reduxForm, change } from "redux-form"
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    const {
      fields: { firstName, lastName },
      increaseCounter, decreaseCounter,
      count, formActions
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
          increaseCounter()
        }}>
          Increase Count Form
        </button>
        <button onClick={() => formActions.change("App Form", "randomField", count)}>
          Update random field
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
    formActions: bindActionCreators({change}, dispatch),
  };
};

const appForm = reduxForm(
  {
    form: "App Form",
    fields: ["firstName", "lastName", "randomField"],
  },
  mapStateToProps,
  mapDispatchToProps
)(App);

export default appForm
