import React from 'react';
import styles from './ConfirmDeleteModal.module.scss';

type ConfirmDeleteModalProps = {
    onClose: () => void;
    onConfirm: () => void;
    count?: number;
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onClose, onConfirm, count }) => {
    const message = count && count > 1
        ? `Ви впевнені, що хочете видалити ${count} фільмів?`
        : 'Ви впевнені, що хочете видалити цей фільм?';

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modalTitle}>Підтвердження видалення</h2>
                <p className={styles.modalMessage}>{message}</p>
                <div className={styles.modalActions}>
                    <button className={styles.modalButton} onClick={onClose}>Скасувати</button>
                    <button className={styles.modalButton} onClick={onConfirm}>Видалити</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
