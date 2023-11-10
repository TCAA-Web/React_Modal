import { useState } from "react";
import { useFetch } from "../../helpers/useFetch";
import { Modal } from "../Modal/Modal";
import style from "./gallery.module.scss";

export const Gallery = () => {

  // Fetch dog data
  const { data, error } = useFetch(
    `https://shibe.online/api/shibes?count=98&urls=true&httpsUrls=true`
  );

  // States to control modal and selected image url
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState()

  // Modal handler (changes true/false state on modal)
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Image handler (sets selected image and opens modal)
  const imageHandler = (_url) => {
    setSelectedImage(_url)
    handleModal()
  }

  return (
    <>
    <section className={style.gallery}>
      {/* Map array of dog images with onClick image handler on each image*/}
      {data?.map((item, index) => {
        return (
          <div
            onClick={() => imageHandler(item)}
            className={style.dogImage}
            style={{ backgroundImage: `url(${item})` }}
            alt={`shiba-img-${index}`}
          />
        );
      })}
    </section>

    {/* Notice how modal content is rendered as props.children */}
    <Modal handleModal={handleModal} isModalOpen={isModalOpen}>
      <div className={style.galleryContainer}>
        <h3>Dog image</h3>
        <img src={selectedImage} />
      </div>
    </Modal>
    </>
  );
};
