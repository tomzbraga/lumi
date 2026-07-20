import { Plus, Pencil } from "lucide-react";
import { modal } from "./Tasks";

interface NewTaskButtonProps {
  onClick?: () => void;
}

export function NewTaskButton({ onClick }: NewTaskButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex m-12 w-70 h-80 flex-col items-center justify-center gap-2
                 rounded-xl border-2 border-dashed border-indigo-400/40
                 bg-indigo-950/10 text-indigo-300
                 transition-all duration-200
                 hover:border-indigo-400 hover:bg-indigo-900/20 hover:text-indigo-200
                 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
    >
      <div className="relative">
        <Plus className="h-8 w-8" strokeWidth={2.5} />
      </div>
      <span className="text-sm font-medium">Nova tarefa</span>
    </button>
  );
}
