interface CloseButtonProps {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button onClick={onClick} className="mt-4 text-sm text-gray-500">
      X
    </button>
  );
}
