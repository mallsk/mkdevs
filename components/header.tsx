"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CircleUser, Contact, ContactRound, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="lg:w-10 lg:h-10 w-6 h-6 bg-black dark:bg-white rounded-xl flex items-center justify-center">
              <img
                src="./M.png"
                className="rounded-xl dark:border dark:border-1"
                alt=""
              />
            </div>
            <span className="lg:text-4xl text-md font-bold text-black dark:text-white">
              MS Tech Solutions
            </span>
          </div>

          {/* Contact Button & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={() => {
                window.open("https://wa.me/6362879620", "_blank");
              }}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border border-gray-200 dark:border-gray-700"
            >
              <CircleUser className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
