import './Madal.css';
import {ReactNode} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {modalSliceActions} from "../../redux/slices/modal-slice/ModalSlice.ts";

interface ModalProps {
    children:ReactNode
}

export const Modal = ({children}: ModalProps) => {
    const {isActive} = useAppSelector(({modalSlice})=>modalSlice);
    const dispatch = useAppDispatch();
    return (
        <div className={isActive ? 'modal active' : 'modal'}>
            <div className={'modal__wrapper'} onClick={() => dispatch(modalSliceActions.setIsActive(false))}>
                <div className={'modal__content'} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};