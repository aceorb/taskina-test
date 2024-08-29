import styles from './CustomDivider.module.css';

function CustomDivider() {
    return (
        <div className={styles.customDividerContainer}>
            <div className={styles.customDivider} ></div>
        </div>
    );
}

export default CustomDivider;