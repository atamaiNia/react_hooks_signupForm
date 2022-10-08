import { Component } from 'react';
import 'components/Form/Form.css';
import Form from 'components/Form/Form';

class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { formSubmitHandler } = this;

    return <Form onSubmitForm={formSubmitHandler} />;
  }
}

export default App;
