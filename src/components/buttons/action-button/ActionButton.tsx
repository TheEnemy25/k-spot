"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface ActionButtonProps {
    onClick?: () => void;
    href?: string;
    children: React.ReactNode;
    className: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, href, children, className }) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
};

export default ActionButton;