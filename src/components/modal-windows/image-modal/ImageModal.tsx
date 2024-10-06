import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./ImageModal.module.scss";

type ImageModalProps = {
    imageUrl: string | null;
    onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
    useEffect(() => {
        if (imageUrl) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [imageUrl]);

    if (!imageUrl) return null;

    const handleOverlayClick = (event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return (
        <div className={styles["modal-window"]} onClick={handleOverlayClick}>
            <div className={styles["modal-content"]}>
                <Image
                    src={imageUrl}
                    alt="Fullscreen"
                    className={styles["modal-image"]}
                    width={500}
                    height={500}
                    priority
                />
            </div>
        </div>
    );
};

export default ImageModal;
