import React, {useState} from "react";
import Modal from "react-modal"

const Modalcrew = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <React.Fragment>
            <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
                This is Modal content
          
                <button onClick={() => setModalOpen(false)}>닫기</button>
            </Modal>
        </React.Fragment>
    );
};

export default Modalcrew;