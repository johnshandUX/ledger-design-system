import type { InputHTMLAttributes } from "react";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Input({
  label,
  hint,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  const describedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="ledger-input-field">
      <label className="ledger-input-label" htmlFor={inputId}>
        {label}
      </label>

      {hint && (
        <div className="ledger-input-hint" id={hintId}>
          {hint}
        </div>
      )}

      <input
        id={inputId}
        className={`ledger-input ${error ? "ledger-input--error" : ""} ${className}`.trim()}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      />

      {error && (
        <div className="ledger-input-error" id={errorId}>
          {error}
        </div>
      )}
    </div>
  );
}