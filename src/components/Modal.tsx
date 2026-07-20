import CloseButton from "./CloseButton";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative rounded-xl bg-white p-6 shadow-lg">
        <CloseButton onClick={onClose} />
        <h1>Modal!</h1>
      </div>
    </div>
  );
}
