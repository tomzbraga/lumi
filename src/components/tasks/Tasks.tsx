import { useState } from "react";
import { NewTaskButton } from "./NewTaskButton";
import Modal from "../Modal";

export default function Tasks() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <section>
      <NewTaskButton
        onClick={() => {
          setModalAberto(true);
        }}
      />

      {modalAberto && <Modal onClose={() => setModalAberto(false)} />}
    </section>
  );
}
