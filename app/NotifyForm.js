"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: send `email` to a mailing list / API route.
    setSent(true);
  }

  if (sent) {
    return <p className="notify-done">Thanks! We&apos;ll let you know the moment we launch.</p>;
  }

  return (
    <form className="notify" onSubmit={handleSubmit}>
      <label htmlFor="email" className="sr-only">Email address</label>
      <input
        id="email"
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Notify me</button>
    </form>
  );
}
