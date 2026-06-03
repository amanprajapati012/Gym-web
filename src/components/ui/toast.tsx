"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "12px 16px",
          borderRadius: "10px",
        },
        success: {
          style: {
            border: "1px solid #22c55e",
          },
        },
        error: {
          style: {
            border: "1px solid #ef4444",
          },
        },
      }}
    />
  );
}