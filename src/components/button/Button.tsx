import React from 'react';
import './button.scss';

interface ButtonProps {
    text: string;
    icon?: JSX.Element;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, icon, onClick } = props;

    return (
        <button className="btn" onClick={onClick}>
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default Button;
