import CloseButton from "./CloseButton";
import NewTaskForm from "./tasks/NewTaskForm";
import { NewTaskData } from "./tasks/NewTaskForm";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  function handleCreateTask(data: NewTaskData) {
    console.log("Tarefa Salva");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 pt-12 shadow-lg">
        <div className="absolute right-4 top-4">
          <CloseButton onClick={onClose} />
        </div>
        <NewTaskForm onClose={onClose} onSubmit={handleCreateTask} />
      </div>
    </div>
  );
}
