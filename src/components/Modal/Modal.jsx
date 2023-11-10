import style from "./modal.module.scss";


// Requires a state (isModalOpen) and a handleModal function to change state
export const Modal = (props) => {

  // Modal is conditionally rendered from props isModalOpen (boolean)
  return props.isModalOpen ? (
    <>
    <div className={style.modalBackground} onClick={() => props.handleModal()}></div>
      <section className={style.modal}>
        {/* props.children is a special react property. Child elements are rendered here*/}
        {props.children}
        <button onClick={() => props.handleModal()}>Close</button>
      </section>
    </>
  ) : null;
};
