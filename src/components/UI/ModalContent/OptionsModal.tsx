import React from 'react';
import classes from "./ModalContent.module.scss";
import Modal from "../Modal/Modal";

function OptionsModal({visible, setVisible, handleDelete}: { visible: boolean, setVisible: (value: boolean) => void, handleDelete: () => void}) {
    return (
        <Modal visible={visible} setVisible={setVisible}>
            <div className={classes.modal__inner__block}>
                <div className={classes.modal__inner__block__title}>Are you sure you want to delete this post?</div>
                <div className={classes.modal__inner__block__row}>
                    <button className={classes.modal__inner__block__btn} onClick={() => setVisible(false)}>
                        Cancel
                    </button>
                    <button className={classes.modal__inner__block__btn} onClick={handleDelete}>
                        Delete post
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default OptionsModal;