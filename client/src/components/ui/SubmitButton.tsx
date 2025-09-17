"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({className}: {className?: string}) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} disabled={pending} className={className}>
      {pending ? "Loading..." : "Subscribe"}
    </button>
  );
}

export default SubmitButton;
