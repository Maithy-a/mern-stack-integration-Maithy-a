import React from "react";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label"

export default function CustomInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = "",
}) {
  return (
    <div className="w-full flex flex-col space-y-2">
      {label && (
        <Label
          htmlFor={name}
          className="mt-6"
        >
          {label}
        </Label>
      )}
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {error && <p className="text-sm text-rose-500">{error}</p>}
    </div>
  );
}
