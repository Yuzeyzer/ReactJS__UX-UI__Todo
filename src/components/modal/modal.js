import React from 'react';

import './modal.scss';


const Modal = ({children, modal, setModal}) => {

    return (
        <>
            <div id="modal-container" className={modal ? "one" : "one out"}>
                <div className="overlay" onClick={() => setModal(false)}></div>
                <div className="modal-background">
                    <div className="modal">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
