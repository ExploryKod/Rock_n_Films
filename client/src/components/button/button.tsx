import React from 'react';
import './button.scss';

interface ButtonProps {
    children: React.ReactNode;
    buttonChange?: keyof typeof BUTTON_CHANGE_CLASSES;
}

const BUTTON_CHANGE_CLASSES = {
    inverted: 'inverted',
    social: 'social'
}

const Button = ({ children, buttonChange }: ButtonProps) => {
    return (
        <button className={`button-container ${buttonChange && BUTTON_CHANGE_CLASSES[buttonChange]}`}>
            {children}
        </button>
    );
};

export default Button;

