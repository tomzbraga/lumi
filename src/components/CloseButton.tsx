import { X } from "lucide-react";

interface CloseButtonProps {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-500 transition-colors hover:text-gray-800"
    >
      <X className="h-5 w-5" />
    </button>
  );
}
