import PropTypes from 'prop-types';

import styles from './CustomCard.module.css';

function CustomCard({children}) {
    return (
    <div className={styles.customCard}>
        {children}
    </div>
    )
}

CustomCard.propTypes = {
    children: PropTypes.node,
};

export default CustomCard;