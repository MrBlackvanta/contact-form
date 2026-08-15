import { CheckCircleIcon } from "@/components/icons";

export default function SuccessToast() {
  return (
    <div className="fixed inset-x-6 top-6 mx-auto max-w-112.5 rounded-xl bg-grey-900 p-6 text-white">
      <p className="flex items-center gap-3 text-field font-bold">
        <CheckCircleIcon className="w-5 shrink-0" />
        Message Sent!
      </p>
      <p className="mt-2 text-green-200">
        Thanks for completing the form. We&rsquo;ll be in touch soon!
      </p>
    </div>
  );
}
