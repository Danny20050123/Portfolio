"use client";

import { cn } from "@/lib/utils";
import { motion, type Transition } from "motion/react";
import {
  Children,
  cloneElement,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  useEffect,
  useId,
  useState,
} from "react";

type AnimatedBackgroundChildProps = {
  "data-id": string;
  className?: string;
  children?: ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLElement>;
};

type AnimatedBackgroundChild =
  ReactElement<AnimatedBackgroundChildProps>;

export type AnimatedBackgroundProps = {
  children: AnimatedBackgroundChild | AnimatedBackgroundChild[];
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(
    defaultValue ?? null,
  );

  const uniqueId = useId();

  function handleSetActiveId(id: string | null) {
    setActiveId(id);
    onValueChange?.(id);
  }

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn(
          "relative isolate inline-flex items-center justify-center",
          child.props.className,
        ),
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        {activeId === id && (
          <motion.div
            layoutId={`background-${uniqueId}`}
            className={cn(
              "pointer-events-none absolute inset-0 z-0",
              className,
            )}
            transition={transition}
          />
        )}

        <span className="relative z-10">
          {child.props.children}
        </span>
      </>,
    );
  });
}