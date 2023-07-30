import React, {ReactNode} from 'react';
import './ButtonWithIcon.css';

interface ButtonWithIconProps {
    text: string;
    icon: ReactNode;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ text, icon }) => {
    return (
        <button className="btn-with-icon">
            <span className="btn-icon">{icon}</span>
            <span className="btn-text">{text}</span>
        </button>
);
};

export default ButtonWithIcon;