import {ReactNode} from "react";
import './Madal.css';

interface ModalProps {
    active: boolean,
    setActive: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    children:ReactNode
}

export const Modal = ({active, setActive,children}: ModalProps) => {
    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className={'modal__wrapper'} onClick={() => setActive(false)}>
                <div className={'modal__content'}onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};