interface FormFieldProps {
  label: string;
  id: string;
  children: React.ReactNode;
}

export default function FormField({ label, id, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}
