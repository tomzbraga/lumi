import FormField from "../FormField";
import { useState, SubmitEvent } from "react";
import { Upload } from "lucide-react";

interface NewTaskFormProps {
  onClose: () => void;
  onSubmit: (data: NewTaskData) => void;
}

export interface NewTaskData {
  name: string;
  description: string;
  deadLine: string;
  files: File[];
}

export default function NewTaskForm({ onSubmit, onClose }: NewTaskFormProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadLine, setDeadLine] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, description, deadLine, files });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <h1 className="text-lg font-semibold text-indigo-950">Nova Tarefa</h1>
      <FormField label="Nome da tarefa" id="name">
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </FormField>
      <FormField label="Descrição" id="description">
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </FormField>
      <FormField label="Prazo" id="description">
        <input
          id="deadLine"
          type="date"
          value={deadLine}
          onChange={(e) => setDeadLine(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm
                     focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        />
      </FormField>
      {files.length > 0 && (
        <ul className="text-xs text-gray-600">
          {files.map((f, i) => (
            <li key={i}>{f.name}</li>
          ))}
        </ul>
      )}
      <FormField label="Arquivos (opcional)" id="file">
        <label
          htmlFor="file"
          className="flex cursor-pointer flex-col items-center justify-center gap-1
                     rounded-lg border-2 border-dashed border-indigo-400/40 py-6 text-indigo-400
                     transition-colors hover:border-indigo-400 hover:bg-indigo-50"
        >
          <Upload className="h-5 w-5" />
          <span className="text-xs m-4">
            Clique para selecionar um ou mais arquivos
          </span>
          <input
            id="file"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          />
        </label>
      </FormField>
      <button type="submit">salvar</button>
    </form>
  );
}
