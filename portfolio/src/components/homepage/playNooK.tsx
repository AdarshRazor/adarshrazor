import { Ripple } from "@/components/magicui/ripple";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export function PlayNooK() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  });
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const Google_Link =
    "https://script.google.com/macros/s/AKfycbwVYncJJn5rZkYxwYlzTHdR8GEuJxcv3YKE18EXCXnEbNq-FPQu71Wxx3MlUVL3La0b/exec";

  const placeholders = [
    "What is playNooK? - Well, you have to subscribe to know",
    "When will it gets release? - Dunno 💭",
    "What is it based on? - Curiosity, Obviously",
    "You could have already, subcribed by now 😶",
    "Or you can reach out to me, if you like the website",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      setDialogContent({
        title: "Invalid Email",
        description: "Please enter a valid email address before sending.",
      });
      setShowDialog(true);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(Google_Link, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "playNooK",
          email,
        }),
      });

      if (response.type === "opaque") {
        setEmail(""); // clear the input after submission
        setDialogContent({
          title: "Success!",
          description: "Thanks !! You’re on the waitlist!",
        });
      } else {
        throw new Error("Network response was not successful");
      }
    } catch (err) {
      console.error("Error submitting email:", err);
      setDialogContent({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setShowDialog(true);
      setSubmitting(false);
    }
  };

  return (
    <div
      id="playNooKHome"
      className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-mono font-bold tracking-tighter">
        <AuroraText>playNooK is coming soon!</AuroraText>
      </p>
      <p className="text-muted-foreground text-xl mt-4 mb-4">
        Join the waitlist!
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        submitting={submitting}
      />
      <Ripple />
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogContent.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {dialogContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
