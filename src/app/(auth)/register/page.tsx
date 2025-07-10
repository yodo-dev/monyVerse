'use client';

import React, { useState } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log({ name, email, password });
      setLoading(false);
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#311B92] to-[#512DA8] flex items-center justify-center relative overflow-hidden text-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M 20 0 H 0 V 20\' stroke=\'%236C63FF\' stroke-width=\'0.2\'/></svg>')] opacity-10 z-0" />

      <div className="z-10 p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="text-4xl font-extrabold">monyverse</div>
          <h2 className="text-xl mt-4 font-bold text-center">
            CREATE AN ACCOUNT
          </h2>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <InputField
            label="Full Name"
            name="name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            label="Create Account"
            type="submit"
            fullWidth
            loading={loading}
          />
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30" />
          <span className="px-4 text-sm text-white/70">OR</span>
          <div className="flex-grow h-px bg-white/30" />
        </div>

        <div className="flex justify-center space-x-4">
          <IconButton icon={FaFacebookF} tooltip="Register with Facebook" />
          <IconButton icon={FaGoogle} tooltip="Register with Google" />
          <IconButton icon={FaLinkedinIn} tooltip="Register with LinkedIn" />
          <IconButton icon={FaApple} tooltip="Register with Apple" />
        </div>

        <div className="mt-6 text-center text-sm text-white/90">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="underline cursor-pointer hover:text-purple-300"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
