"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./navbar-menu";
import { cn } from "../../../lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />

        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive} name="Baba Restaurant">
            
            `<MenuItem setActive={setActive} active={active} item="Home" >
                    
                    </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/coming">Order Online</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Menu"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="About us">
                </MenuItem>`
            </Menu>
        </div>
    );
}
