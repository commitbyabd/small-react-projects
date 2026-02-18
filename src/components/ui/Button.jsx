import React from "react";

function Button({ type = "submit", text, className, loading }) {
  return (
    <button
      type={type}
      disabled={loading}
      className={`${className} disabled:opacity-50 flex items-center justify-center gap-2`}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}
      {loading ? "Submitting..." : text}
    </button>
  );
}

export default Button;
