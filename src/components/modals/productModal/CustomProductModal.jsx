import React, { useContext, useState } from "react";
import Modal from "react-modal";
import style from "./CustomProductModal.module.css";
import { ProductContext } from "../../contexts/ProductContext";
import { TfiClose } from "react-icons/tfi";
import AddButton from "../../../sharedComponents/buttons/addButton/addButton";
import Category from "../../category/Category";
import SubcategoryField from "../../subcategoryField/SubcategoryField";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    maxWidth: "900px",
    height: "auto",
    borderRadius: "5px",
  },
};

const CustomProductModal = ({ onOpen, id, isSub }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const { state, dispatch } = useContext(ProductContext);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState(2);
  const [value, setValue] = useState("");

  function closeModal() {
    setIsOpen(false);
    onOpen(false);
  }

  function addCategory() {
    const category = {
      id: Date.now(),
      title: value.trim(),
      image: image,
      gender: gender,
      subcategory: [],
    };
    dispatch({
      type: "addCategory",
      payload: category,
    });
    closeModal();
  }

  function addSubCategory() {
    const subcategory = {
      id: Date.now(),
      title: value.trim(),
    };
    dispatch({
      type: "addSubcategory",
      payload: subcategory,
    });
    closeModal();
  }

  function uploadImage(e) {
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      setImage(image);
    }
    console.log(image);
  }

  function closeImage(e) {
    e.stopPropagation();
    setImage(null);
    URL.revokeObjectURL(image);
  }

  //************ Callback functions */

  const getCategory = (category)=>{
    console.log(category);
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
            <span>добавить изделия</span>
            <button onClick={closeModal} className={style.closeModalbtn}>
              <TfiClose />
            </button>
          </div>
          <div className={style.main}>
            <Category toAdd={false} isCallback={true} callback={getCategory}/>
            <SubcategoryField toAdd={false}/>
          </div>
          {/* <input
            className={style.inputCategory}
            type="text"
            placeholder={isSub ? "подкатегория" : "категория"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input> */}
          {/* {!isSub && (
            <label
              style={{ backgroundImage: `url(${image})` }}
              className={style.image_upload}
              htmlFor="upload_image"
            >
              {!image && (
                <>
                  <img src="./src/assets/images/imageUploadIcon.png" />
                  <span>Загрузить Фото</span>
                </>
              )}
            </label>
          )}
          <input
            style={{ display: "none" }}
            type="file"
            id="upload_image"
            onChange={uploadImage}
          ></input>
          {image && (
            <button onClick={closeImage} className={style.closeImageBtn}>
              <TfiClose />
            </button>
          )} */}
          {/* <AddButton
            onClick={isSub ? addSubCategory : addCategory}
            disabled={value.trim() && (isSub ? true : image) ? false : true}
          >
            Добавить
          </AddButton> */}
        </div>
      </Modal>
    </div>
  );
};

export default CustomProductModal;
