import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, varient = 'primary' }) {
  return (
    <button className={getClasses([styles.buttonstyle.bu])} type="button">
      {children}
    </button>
  );
}

export default Button;
