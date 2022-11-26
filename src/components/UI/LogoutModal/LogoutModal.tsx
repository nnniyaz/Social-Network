import React from 'react';
import classes from "./LogoutModal.module.scss";
import Modal from "../Modal/Modal";

function LogoutModal({visible, setVisible, handleLogout}: { visible: boolean, setVisible: (value: boolean) => void, handleLogout: () => void}) {
    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={classes.modal__inner__block}>
                <h2>Are you sure you want to logout?</h2>
                <div className={classes.modal__inner__block__row}>
                    <button className={classes.modal__inner__block__btn} onClick={() => setVisible(false)}>
                        Cancel
                    </button>
                    <button className={classes.modal__inner__block__btn} onClick={handleLogout}>
                        Sign Out
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default LogoutModal;