import React from 'react';
import styles from './ConfirmDeleteModal.module.scss';
import ActionButton from '../../buttons/action-button/ActionButton';

type EntityType = 'movie' | 'actor' | 'director' | 'movies' | 'actors' | 'directors';

type ConfirmDeleteModalProps = {
    onClose: () => void;
    onConfirm: () => void;
    entityType: EntityType;
    count?: number;
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onClose, onConfirm, entityType, count }) => {
    const getMessage = () => {
        if (count && count > 1) {
            return `Are you sure you want to delete ${count} ${entityType}?`;
        }
        return `Are you sure you want to delete this ${entityType}?`;
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modalTitle}>Delete Confirmation</h2>
                <p className={styles.modalMessage}>{getMessage()}</p>
                <div className={styles.modalActions}>
                    <ActionButton className={styles.modalButton} onClick={onClose}>Cancel</ActionButton>
                    <ActionButton className={styles.modalButton2} onClick={onConfirm}>Delete</ActionButton>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;