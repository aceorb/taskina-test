import PropTypes from 'prop-types';

import styles from './CustomCheckbox.module.css';

function CustomCheckbox({ checked, onChange }) {
    const handleOnClick = (e) => {
        onChange();
    }
    return (
        <label className={styles.customCheckbox}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleOnClick}
                className={styles.customCheckboxInput}
            />
            <span className={styles.customCheckboxBox} ></span>
        </label>
    );
}

CustomCheckbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default CustomCheckbox;