import React, {ReactNode} from 'react';
import './ButtonWithIcon.css';

interface ButtonWithIconProps {
    text: string;
    icon: ReactNode;
    onclick?: () => void;
    type?: "submit"
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ text, icon, onclick, type}) => {
    return (
        <button className="btn-with-icon" onClick={onclick} type={type}>
            <span className="btn-icon">{icon}</span>
            <span className="btn-text">{text}</span>
        </button>
    );
};

export default ButtonWithIcon;
