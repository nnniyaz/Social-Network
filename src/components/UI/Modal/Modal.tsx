import {Transition} from "react-transition-group";
import {useCallback} from "react";

interface Props {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

function Modal({children, visible, setVisible}: Props) {


    return (
        <Transition
            in={visible}
            timeout={100}
            mountOnEnter
            unmountOnExit
            classNames="modal"
        >
            {
                (state) => (
                    <div className={`modal ${state}`} onClick={() => setVisible(false)}>
                        <div className={'modal__block'} onClick={(e) => e.stopPropagation()}>
                            {children}
                        </div>
                    </div>
                )
            }
        </Transition>
    );
}

export default Modal;