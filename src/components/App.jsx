import { Component } from 'react';
import 'components/Form/Form.css';
import Form from 'components/Form/Form';

class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { formSubmitHandler } = this;

    return (
      <div className="container">
        <h1>React - form</h1>
        <Form onSubmitForm={formSubmitHandler} />;
      </div>
    );
  }
}

export default App;
