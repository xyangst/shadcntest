"use client"
import React from "react"
import { CommandDialog,
CommandInput,
CommandList,
CommandEmpty,
CommandGroup,
CommandItem } from "./ui/command"
import Link from "next/link"
import {URLS} from "@/config/urls"
export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
  
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === "f") {
            setOpen((open) => !open);
            e.preventDefault(); // Prevent the default find feature from opening
          }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
  
    return (
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for a Page to open" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
          {Object.entries(URLS).map(([key, value]) => (
            <CommandItem key={key}>
              <Link href={value}>{key}</Link>
            </CommandItem>
          ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    )
  }
  