import propTypes from 'prop-types';
import styles from './Button.module.css';

function Button({text}) {
  return <button className={styles.btn}>{text}</button>;
}

// propTypes를 사용하여 Button의 text prop이 필수이고 타입이 string이라는 것을 명시한다.
Button.prototype = {
  text: propTypes.string.isRequired,
}

//App.js가 Button을 사용할 수 있게 한다.
export default Button;