import type { SelectHTMLAttributes } from "react";
import "./Select.css";

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
  label: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
};

export function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  id,
  className = "",
  ...props
}: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;

  const describedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="ledger-select-field">
      <label className="ledger-select-label" htmlFor={selectId}>
        {label}
      </label>

      {hint && (
        <div className="ledger-select-hint" id={hintId}>
          {hint}
        </div>
      )}

      <select
        id={selectId}
        className={`ledger-select ${error ? "ledger-select--error" : ""} ${className}`.trim()}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map(({ label: optionLabel, value, disabled }) => (
          <option key={`${optionLabel}-${value}`} value={value} disabled={disabled}>
            {optionLabel}
          </option>
        ))}
      </select>

      {error && (
        <div className="ledger-select-error" id={errorId}>
          {error}
        </div>
      )}
    </div>
  );
}
