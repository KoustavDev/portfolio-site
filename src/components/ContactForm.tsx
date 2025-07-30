"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setError("All fields are required.");
      toast("Please fill in all fields.", {
        description: "Make sure to complete all fields before submitting.",
      });

      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      toast("Invalid email address.", {
        description: "Please enter a valid email format.",
      });
      return;
    }
    setError(null);

    try {
      const res = await fetch(
        "https://ccrokqbv2c.execute-api.ap-south-1.amazonaws.com/default/portfolioMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        toast("Message sent successfully!", {
          description:
            "Your message has been sent. We'll get back to you soon.",
        });
      } else {
        setError(data.message || "Failed to send message.");
        toast("Error sending message.", {
          description: data.message || "Please try again later.",
        });
      }
    } catch (error) {
      console.log("Error sending message:", error);
      setError(
        "An error occurred while sending your message. Please try again later."
      );
      toast("Error sending message.", {
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        placeholder="Your Message"
        rows={4}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" className="w-full cursor-pointer">
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
