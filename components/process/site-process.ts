import { HeartHandshake, MessageCircle, RefreshCw, Target } from "lucide-react";
import type { ProcessStep } from "@/components/process/process-steps";

export const siteProcessSection = {
  title: "Our Process",
  intro: "A structured approach that keeps recommendations practical and easy to follow.",
  steps: [
    {
      title: "Discovery",
      body: "We start with your goals, priorities, and current position.",
      icon: MessageCircle
    },
    {
      title: "Strategy",
      body: "We build recommendations aligned to your timeline and risk profile.",
      icon: Target
    },
    {
      title: "Review",
      body: "We review and refine your plan as life and markets evolve.",
      icon: RefreshCw
    },
    {
      title: "Ongoing Support",
      body: "We help keep your plan aligned with regular reviews as your life and goals evolve.",
      icon: HeartHandshake
    }
  ] satisfies ProcessStep[]
};
