import CloseButton from "./CloseButton";
import NewTaskForm from "./tasks/NewTaskForm";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative rounded-xl bg-white p-6 shadow-lg">
        <CloseButton onClick={onClose} />
        <NewTaskForm />
      </div>
    </div>
  );
}
