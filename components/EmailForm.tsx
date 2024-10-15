"use client";
import React, { useTransition } from "react";
import Mail from "/public/mail.svg";
import Image from "next/image";
import toast from "react-hot-toast";

const EmailForm = () => {
  const [isPending, startTransaction] = useTransition();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const email = form.get("email");
    if (!email) {
      return null;
    }

    startTransaction(async () => {
      try {
        const res = await fetch("/api/resend", {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          target.reset();
          toast.success("Thank you for subscribing to coderfpv 🎉");
        } else {
          console.error("Error:", res.status, res.statusText);
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center items-center gap-2"
    >
      <div className="relative">
        <label
          htmlFor="email"
          className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
        >
          <Image src={Mail} alt="mail" className="filter invert w-5 h-5" />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Join our waiting list..."
          className="lg:w-[300px] py-2 px-3 pl-10 rounded-md text-base border border-[#00ffff] bg-[#1a1a2e]/50 text-[#00ffff] placeholder-[#00ffff]/50 focus-visible:outline-none focus-visible:bg-[#1a1a2e] focus-visible:border-[#ff00ff] transition-all duration-200"
        />
      </div>
      <button
        disabled={isPending}
        type="submit"
        className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-[#1a1a2e] font-semibold py-2 px-3 rounded-md text-base transition-all duration-200 hover:from-[#ff00ff] hover:to-[#00ffff]"
      >
        Subscribe
      </button>
    </form>
  );
};

export default EmailForm;
