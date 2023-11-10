import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  // State to set Modal open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler function to change modal state
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section>
        <h3>Velkommen til le galleria de DOGE</h3>
        <p>
          <b onClick={() => handleModal()}>Læs mere</b> om dette spændende
          emne...
        </p>
      </section>

      <Gallery />
      {/* Modal requires a function to change state and a state (boolean) */}
      <Modal handleModal={handleModal} isModalOpen={isModalOpen}>
        <h1>Hello</h1>
      </Modal>
    </>
  );
}

export default App;