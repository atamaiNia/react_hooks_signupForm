import { Component } from 'react';
import 'components/Form/Form.css';
import SignupForm from 'components/Form/Form';

class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { formSubmitHandler } = this;

    return (
      <div className="container">
        <h1>React - Singupform</h1>
        <SignupForm onSubmitForm={formSubmitHandler} />;
      </div>
    );
  }
}

export default App;
