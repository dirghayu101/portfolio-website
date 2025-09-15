"use client"
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { createSubscriber } from "@/lib/actions";
import SubmitButton from "../ui/SubmitButton";

export const SubscriptionForm = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <div className="space-y-4">
      <h3 className="text-md font-semibold">Newsletter</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        Subscribe to our newsletter to stay up-to-date with the latest news and
        updates.
      </p>
      <form action={dispatch}>
        <div className="flex space-x-2">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="flex-1"
            defaultValue=""
            aria-describedby="email-error"
          />
          <SubmitButton />
        </div>
        <div
          id="email-error"
          aria-label="polite"
          aria-atomic="true"
          className="px-1"
        >
          {state?.errors?.email && (
            <p key={state.errors.email[0]} className="text-xs text-red-500">
              {state.errors.email[0]}
            </p>
          )}
          {!state?.errors?.email && (
            <p className="text-xs text-green-500">{state?.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};
