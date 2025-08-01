"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { responsiveClasses } from "@/lib/utils/responsive";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 w-max flex-nowrap",
          responsiveClasses({
            xs: "gap-3 py-3",
            sm: "gap-4 py-4", 
            md: "gap-6 py-6"
          }),
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative rounded-xl border border-b-0 flex-shrink-0",
              "border-gray-200 dark:border-gray-700",
              "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl",
              "transition-shadow duration-300",
              responsiveClasses({
                xs: "w-[85vw] max-w-[320px] px-4 py-4",
                sm: "w-[70vw] max-w-[400px] px-6 py-5",
                md: "w-[450px] px-6 py-6",
                lg: "w-[500px] px-8 py-6"
              })
            )}
            key={item.name + idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className={cn(
                "relative z-20 leading-[1.6] text-gray-700 dark:text-gray-300 font-normal",
                responsiveClasses({
                  xs: "text-sm",
                  sm: "text-sm",
                  md: "text-base",
                  lg: "text-lg"
                })
              )}>
                &quot;{item.quote}&quot;
              </span>
              <div className={cn(
                "relative z-20 flex flex-row items-center",
                responsiveClasses({
                  xs: "mt-4",
                  sm: "mt-5", 
                  md: "mt-6"
                })
              )}>
                {item.avatar && (
                  <div className="flex-shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className={cn(
                        "rounded-full object-cover",
                        responsiveClasses({
                          xs: "w-10 h-10",
                          sm: "w-12 h-12",
                          md: "w-12 h-12"
                        })
                      )}
                    />
                  </div>
                )}
                <div className={cn(
                  "flex flex-col gap-1",
                  responsiveClasses({
                    xs: "ml-3",
                    sm: "ml-4"
                  })
                )}>
                  <span className={cn(
                    "leading-[1.6] text-gray-900 dark:text-gray-100 font-medium",
                    responsiveClasses({
                      xs: "text-sm",
                      sm: "text-base",
                      md: "text-base"
                    })
                  )}>
                    {item.name}
                  </span>
                  <span className={cn(
                    "leading-[1.6] text-gray-500 dark:text-gray-400 font-normal",
                    responsiveClasses({
                      xs: "text-xs",
                      sm: "text-sm",
                      md: "text-sm"
                    })
                  )}>
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
