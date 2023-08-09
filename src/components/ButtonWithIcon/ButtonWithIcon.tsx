import React, {ReactNode} from 'react';

interface ButtonWithIconProps {
    text: string;
    icon: ReactNode;
    onclick?: () => void;
    type?: "submit";
    className?: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ text, icon, onclick, type, className}) => {
    return (
        <button className={"bg-light-green hover:bg-green p-2.5 border-0 flex items-center justify-center " + className}
                onClick={onclick}
                type={type}>
            <span className="mr-1">{icon}</span>
            <span>{text}</span>
        </button>
    );
};

export default ButtonWithIcon;
