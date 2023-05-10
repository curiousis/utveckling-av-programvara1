import { type } from 'os'
import style from './Modal.module.css'
import { ReactNode } from 'react'
import classNames from 'classnames'

export type ModalProps = {
    open:boolean,
     onClose:()=>void,
    children?:ReactNode,
   
}

export default function Modal({open,onClose,children}:ModalProps){
    return(
        <div onClick={onClose} className={classNames(
            style.background,
            {[style.open]:open}
        )}>
            <div onClick={e=>e.stopPropagation()} className={style.box}>
                {children}
            </div>
        </div>
    )
}