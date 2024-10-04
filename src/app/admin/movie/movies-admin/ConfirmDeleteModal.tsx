import React from 'react';
import styles from './ConfirmDeleteModal.module.scss';

type ConfirmDeleteModalProps = {
    onClose: () => void;
    onConfirm: () => void;
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onClose, onConfirm }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Підтвердження видалення</h2>
                <p>Ви впевнені, що хочете видалити цей фільм?</p>
                <div className={styles.modalActions}>
                    <button onClick={onClose}>Скасувати</button>
                    <button onClick={onConfirm}>Видалити</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
