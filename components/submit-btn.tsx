import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <div className="spinner"></div>
      ) : (
        <>
          Submit <FaPaperPlane />
        </>
      )}
    </button>
  );
}
