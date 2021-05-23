import React, {useRef, useEffect} from 'react';
import styles from './modal.module.css';
import useOutSideClickEffect from '../../hooks/useOutsideClickEffect';

const Modal = ({title, children, closeFunction}) => {

    const refContainer = useRef(null);

    const { isOutsideClicked } = useOutSideClickEffect(refContainer);

    useEffect(() => {
        if(isOutsideClicked) {
            closeFunction();
        }
    }, [isOutsideClicked]);

    return (
        <div className={styles.modal} ref={refContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button 
                    type="button" 
                    onClick={closeFunction}
                    className={`btn-close ${styles.btnClose}`}>
                        &times;
                    </button>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default Modal;
