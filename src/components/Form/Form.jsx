import './Form.css';
import useLocalStorage from 'components/hooks/useLocalStorage';

export default function SignupForm() {
  const [firstName, setFirstName] = useLocalStorage('firstName', '');
  const [lastName, setLastName] = useLocalStorage('lastName', '');

  const handleChange = event => {
    // const { name, value } = event.target;

    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;

      case 'lastName':
        setLastName(event.target.value);
        break;

      default:
        return;
    }
  };

  return (
    <form className="Form" autoComplete="off">
      <label className="Form__label">
        <span className=" Name">Name</span>
        <input
          className="Form__input"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={firstName}
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
      <button type="submit" className="Form__btn">
        Send
      </button>
    </form>
  );
}
