import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  title: string;
  body: string;
  icon?: LucideIcon;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  titleClassName?: string;
  bodyClassName?: string;
};

const COLUMN_CLASS: Record<number, string> = {
  3: "service-process-steps-cols-3",
  4: "service-process-steps-cols-4",
  5: "service-process-steps-cols-5"
};

export function ProcessSteps({ steps, titleClassName, bodyClassName }: ProcessStepsProps) {
  const colsClass = COLUMN_CLASS[steps.length] ?? "service-process-steps-cols-5";

  return (
    <div className="relative min-w-0 overflow-hidden">
      <div className="service-process-rail" aria-hidden />
      <ol className={cn("service-process-steps", colsClass)}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <li key={step.title} className="service-process-step min-w-0">
              <span className="service-process-marker">
                {Icon ? <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden /> : index + 1}
              </span>
              <div className="min-w-0 md:px-1">
                <h3
                  className={cn(
                    "mb-1 font-heading text-base font-semibold text-primary",
                    titleClassName
                  )}
                >
                  {step.title}
                </h3>
                <p className={cn("text-sm leading-relaxed text-muted-foreground", bodyClassName)}>
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
