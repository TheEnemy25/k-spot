import React from "react";
import styles from './AdminButtons.module.scss';
import ActionButton from "../action-button/ActionButton";

type AdminButtonsProps = {
    toggleCheckboxes: () => void;
    showCheckboxes: boolean;
    selectedEntitiesCount: number;
    toggleDeleteConfirmation: () => void;
    newItemLink: string;
};

const AdminButtons: React.FC<AdminButtonsProps> = ({
    toggleCheckboxes,
    showCheckboxes,
    selectedEntitiesCount,
    toggleDeleteConfirmation,
    newItemLink,
}) => {
    return (
        <div className={styles['admin-buttons']}>
            <ActionButton onClick={toggleCheckboxes} className={styles['admin-buttons__select-button']}>
                {showCheckboxes ? "Hide Checkboxes" : "Select Items"}
            </ActionButton>

            <ActionButton href={newItemLink} className={styles['admin-buttons__create-button']}>
                Create New Item
            </ActionButton>

            {showCheckboxes && selectedEntitiesCount > 0 && (
                <ActionButton onClick={toggleDeleteConfirmation} className={styles['admin-buttons__select-delete-button']}>
                    Delete Selected Items
                </ActionButton>
            )}
        </div>
    );
};

export default AdminButtons;
