import React, { useContext, useState } from "react";
import Modal from "react-modal";
import style from "./Modal.module.css";
import { ProductContext } from "../../contexts/ProductContext";
import { TfiClose } from "react-icons/tfi";
import AddButton from "../../../sharedComponents/buttons/addButton/addButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "301px",
    height: "360px",
    borderRadius: "5px",
  },
};

const CustomModal = ({ onOpen, id }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const { state, dispatch } = useContext(ProductContext);
  const [image, setImage] = useState(null);

  //   const addCategory = () =>{
  //     dispatch({
  //       type: "add",
  //       payload: id
  //     })
  //   }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    onOpen(false);
  }

  function addCategory() {}

  function uploadImage(e) {
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      setImage(image);
    }
    console.log(image);
  }

  function closeImage(e){
    e.stopPropagation();
    setImage(null);
    // URL.revokeObjectURL(image);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen} //openModal?
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById("root")}
      >
        <div className={style.addBox}>
          <div className={style.titleBox}>
            <span>Добавить Категория</span>
            <button className={style.closeModalbtn}>
              <TfiClose />
            </button>
          </div>
          <div className={style.genderSelectBtn}>
            <button className={style.btn}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                  //   fill={state.gender === 2 ? "rgba(0, 8, 193, 1)" : "#939393"}
                  fill="#939393"
                />
              </svg>
              <span>Женский</span>
            </button>
            <button className={style.btn}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.989 17.5343L18.514 15.7343C18.2886 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0633 8.62499C13.0491 8.48974 13.0827 8.35383 13.1591 8.23873C13.2825 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8511 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50088 0C7.35161 0.0819844 5.62907 1.71387 5.54253 3.75001V5.73827C5.35112 5.87218 5.21526 6.06537 5.15856 6.28429C5.15055 6.31392 5.14657 6.34444 5.14669 6.37502C5.19998 6.93868 5.34303 7.49145 5.57103 8.01453C5.60532 8.12053 5.69524 8.20206 5.80853 8.2298C5.85288 8.25078 5.936 8.35956 5.936 8.62506C6.03661 9.41917 6.4555 10.1463 7.1061 10.6561C7.02297 11.1473 6.63663 12.4426 5.81094 12.7696L2.29672 13.875C1.39708 14.1588 0.714268 14.8603 0.488568 15.7328L0.0135683 17.5328C-0.0402032 17.7336 0.0879726 17.9376 0.299867 17.9885C0.331521 17.9962 0.364066 18 0.396723 18.0001H18.6051C18.8237 18 19.0008 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z"
                  //   fill={state.gender === 1 ? "rgba(0, 8, 193, 1)" : "#939393"}
                  fill="#939393"
                />
              </svg>
              <span>Мужской</span>
            </button>
          </div>
          <input
            className={style.inputCategory}
            type="text"
            placeholder="категория"
          ></input>
          <label
            style={{ backgroundImage: `url(${image})` }}
            className={style.image_upload}
            htmlFor="upload_image"
          >
            {image && (
                    <button onClick={closeImage} className={style.closeImageBtn}>
                    <TfiClose />
                  </button>
            )}
            {!image && (
              <>
                <img src="./src/assets/images/imageUploadIcon.png" />
                <span>Загрузить Фото</span>
              </>
            )}
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="upload_image"
            onChange={uploadImage}
          ></input>
          <AddButton onClick={addCategory}>Добавить</AddButton>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
