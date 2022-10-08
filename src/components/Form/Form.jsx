import { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    experience: 'junior',
    licence: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  handleLicenseChange = event => {
    this.setState({ licence: event.currentTarget.checked });
  };

  resetForm = () => {
    this.setState({ firstName: '', lastName: '' });
  };

  render() {
    const { firstName, lastName, experience, licence } = this.state;
    const { handleChange, handleSubmit, handleLicenseChange } = this;

    return (
      <form className="Form" onSubmit={handleSubmit}>
        <label className="Form__label">
          <span className=" Name">Name</span>
          <input
            className="Form__input"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </label>
        <label className="Form__label">
          Surname
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>
        <p className="Radio-btn__title">Your experience:</p>
        <label className="Form__label">
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={handleChange}
            checked={experience === 'junior'}
          />
          Junior
        </label>
        <label className="Form__label">
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={handleChange}
            checked={experience === 'middle'}
          />
          Middle
        </label>
        <label className="Form__label">
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={handleChange}
            checked={experience === 'senior'}
          />
          Senior
        </label>
        <div>
          <label className="Form__label">
            <input
              type="checkbox"
              name="licence"
              checked={licence}
              onChange={handleLicenseChange}
            />
            Accept conditions
          </label>
        </div>
        <button
          type="submit"
          className={licence ? 'Form__btn' : 'Disabled'}
          disabled={!licence}
        >
          Send
        </button>
      </form>
    );
  }
}
export default Form;
