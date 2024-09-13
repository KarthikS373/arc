"use client"
import React from "react"

import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/providers/sidebar"
// import { IconMenu2, IconX } from "@tabler/icons-react";

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  )
}
export const DesktopSidebar = ({ className, children, ...props }: React.ComponentProps<typeof motion.div>) => {
  const { setOpen } = useSidebar()
  return (
    <>
      <motion.div
        className={cn("hidden w-[20vw] flex-shrink-0 bg-[#1e1e1e] border-r-1 border-black px-2 md:flex md:flex-col", className)}
        // animate={{
        //   width: animate ? (open ? "300px" : "60px") : "300px",
        // }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  )
}

export const MobileSidebar = ({ className, children, ...props }: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar()
  return (
    <>
      <div
        className={cn("flex h-10 w-full flex-row items-center justify-between bg-neutral-800 px-4 py-4 md:hidden")}
        {...props}
      >
        <div className="z-20 flex w-full justify-end">
          {/* IconMenu2 */}
          <button
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          >
            button
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed inset-0 z-[100] flex h-full w-full flex-col justify-between bg-neutral-900 p-10",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                X{/* <IconX /> */}
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
