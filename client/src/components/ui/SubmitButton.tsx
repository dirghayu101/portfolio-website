"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} disabled={pending}>
      {pending ? "Loading..." : "Subscribe"}
    </button>
  );
}

export default SubmitButton;
