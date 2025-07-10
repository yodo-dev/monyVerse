"use client";

import React, { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaApple } from "react-icons/fa";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import InputField from "@/components/InputField";

const LoginSideBanner = "/images/login-side-banner.png";
const AuthLogoSvg = "/svgs/auth-logo.svg";
const EmailSvg = "/svgs/Email.svg";
const PasswordSvg = "/svgs/Password.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      redirect("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Banner Section */}
      <div className="flex-1 relative">
        <Image
          src={LoginSideBanner}
          alt="Side Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h2 className="text-4xl font-extrabold text-white">
            Explore Your World
          </h2>
          <h4 className="text-3xl text-white">Monyverse Academy</h4>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex-1 bg-gradient-to-b from-primary to-[#0F172A] flex items-center justify-center text-white">
        <div className="p-2 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <Image src={AuthLogoSvg} alt="Logo" width={80} height={80} />
            <h2 className="text-3xl font-bold">monyverse</h2>
            <h2 className="text-3xl mt-8 font-extrabold text-center uppercase">
              Login <br /> To Your Account
            </h2>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <InputField
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              svg={EmailSvg}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              svg={PasswordSvg}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-right text-sm text-white cursor-pointer hover:underline">
              Forgot Password?
            </div>

            <Button label="Sign In" type="submit" loading={loading} fullWidth />
          </form>

          <p className="px-4 text-sm my-4 text-center text-white/70">OR</p>

          <div className="flex justify-center space-x-4">
            <IconButton icon={FaFacebookF} tooltip="Login with Facebook" />
            <IconButton icon={FaGoogle} tooltip="Login with Google" />
            <IconButton icon={FaLinkedinIn} tooltip="Login with LinkedIn" />
            <IconButton icon={FaApple} tooltip="Login with Apple" />
          </div>

          <div className="mt-6 text-center text-sm text-white">
            Not a member?{" "}
            <span className="underline cursor-pointer hover:text-purple-300">
              Create Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
