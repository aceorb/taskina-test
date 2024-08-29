import PropTypes from 'prop-types';

import CustomCheckbox from "../CustomCheckBox/CustomCheckBox.jsx";
import styles from './CustomListSelectItem.module.css';

function CustomListSelectItem({text, selected, setSelected}) {
    return (
        <div className={styles.customListSelectItem}>
            <div className={styles.customTitle}>{text}</div>
            <CustomCheckbox checked={selected} onChange={setSelected} />
        </div>
    )
}


CustomListSelectItem.propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    setSelected: PropTypes.func.isRequired,
};

export default CustomListSelectItem;