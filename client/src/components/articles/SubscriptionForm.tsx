"use client";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { createSubscriber } from "@/lib/server-actions/actions";
import SubmitButton from "@/components/ui/SubmitButton";
import { ArticleSectionContainer } from "./ArticleSectionContainer";
import { ArticleSectionHeader } from "./ArticleSectionHeader";
import { SUBSCRIPTION_PITCH } from "@/static/articles/articles-components/2-subscription-pitch";

export const SubscriptionForm = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <ArticleSectionContainer>
      <ArticleSectionHeader heading={SUBSCRIPTION_PITCH.heading} />
    <div className="p-8 text-center box-border rounded-xl shadow-sm max-w-md mx-auto">
      <h4 className="mb-6 text-lg font-semibold">
        {SUBSCRIPTION_PITCH.description}
      </h4>

      <form className="flex flex-col gap-4" action={dispatch}>

        {/* Input */}
        <Input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 rounded-md px-3 py-2 font-normal text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 text-black"
          required
          aria-describedby="email-error"
          defaultValue=""
          placeholder="Email Address"
        />

        {/* Button */}
        <SubmitButton className="w-full bg-emerald-600 text-white font-medium rounded-md px-4 py-2 transition-colors duration-200 hover:bg-emerald-700 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500" />
        <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email && (
                  <p
                    key={state.errors.email[0]}
                    className="text-xs text-red-500"
                  >
                    {state.errors.email[0]}
                  </p>
                )}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
      </form>
    </div>
    </ArticleSectionContainer>
  );
};
