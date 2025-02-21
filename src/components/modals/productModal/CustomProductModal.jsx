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
  const { dispatch } = useContext(ProductContext);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [category, setCategory] = useState({});
  const [subcategory, setSubcategory] = useState({});
  const [gender, setGender] = useState(2);
  
  function closeModal() {
    setIsOpen(false);
    onOpen(false);
  }

  function addProduct() {
    const product = {
      id: Date.now(),
      name: name,
      article: Math.floor(Math.random() * 10000000),
      image: image,
      price: price,
      categoryId: category.id,
      subcategoryId: subcategory.id,
    };
    dispatch({
      type : "selectGender",
      payload : gender,
    })
    dispatch({
      type: "addProduct",
      payload: product,
    });
    dispatch({
      type: "selectCategory",
      payload: category,
    });
    dispatch({
      type: "selectedSubcategory",
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
  }

  function closeImage(e) {
    e.stopPropagation();
    setImage(null);
    URL.revokeObjectURL(image);
  }

  //************ Callback functions */

  const getCategoryAndGender = (payload) => {
    setCategory(payload.category);
    setGender(payload.gender);
  };
  const getSubcategory = (subcategory) => {
    setSubcategory(subcategory);
  };

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
            <Category toAdd={false} isCallback={true} callback={getCategoryAndGender} />
            <SubcategoryField
              toAdd={false}
              isCallback={true}
              data={category?.subcategory}
              callback={getSubcategory}
            />
          </div>
          <div className={style.container}>
            <div className={style.images}>
              <input
                style={{ display: "none" }}
                type="file"
                id="upload_image"
                onChange={uploadImage}
              ></input>
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
              {image && (
                <button onClick={closeImage} className={style.closeImageBtn}>
                  <TfiClose />
                </button>
              )}
            </div>

            <div className={style.inputs}>
              <label htmlFor="name" className={style.inputbox}>
                имя
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </label>
              <label htmlFor="price" className={style.inputbox}>
                цена
                <input
                  type="number"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </label>
            </div>
          </div>

          {
            <AddButton
              onClick={addProduct}
              disabled={name.trim() && price.trim() && image ? false : true}
            >
              Добавить
            </AddButton>
          }
        </div>
      </Modal>
    </div>
  );
};

export default CustomProductModal;
