import PropTypes from 'prop-types';

import styles from './CustomButton.module.css';

function CustomButton({onClick}) {
    return (
        <div className={styles.customButtonContainer}>
            <button className={styles.customButton} onClick={onClick}>
                Done
            </button>
        </div>

    )
}

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CustomButton;