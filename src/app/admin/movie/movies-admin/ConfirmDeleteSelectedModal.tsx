import React from 'react';
import styles from './ConfirmDeleteSelectedModal.module.scss';

type ConfirmDeleteSelectedModalProps = {
    onClose: () => void;
    onConfirm: () => void;
    count: number;
};

const ConfirmDeleteSelectedModal: React.FC<ConfirmDeleteSelectedModalProps> = ({ onClose, onConfirm, count }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modalTitle}>Підтвердження видалення</h2>
                <p className={styles.modalMessage}>Ви впевнені, що хочете видалити {count} фільмів?</p>
                <div className={styles.modalActions}>
                    <button className={styles.modalButton} onClick={onClose}>Скасувати</button>
                    <button className={`${styles.modalButton}`} onClick={onConfirm}>Видалити</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteSelectedModal;
