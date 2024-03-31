import { ChangeEvent } from "react";

interface LabelledInputType {
  type?: string;
  placeholder?: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export function LabelledInput({
  type,
  placeholder,
  label,
  onChange,
  className,
}: LabelledInputType) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white  text-2xl">{label}</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required
        className={className}
      />
    </div>
  );
}
