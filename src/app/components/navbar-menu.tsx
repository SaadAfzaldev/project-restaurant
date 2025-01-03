"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
                             setActive,
                             active,
                             item,
                             children,
                         }: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black hover:text-cyan-500"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && children && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
                         setActive,
                         children,
                         name
                     }: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
    name : string
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="fixed top-0 left-0 w-full z-10 rounded-b-lg border border-gray-300 bg-white shadow-md flex justify-between items-center px-8 py-6" // Adjusted for spacing
        >
            <div className="text-lg font-bold text-black">{name}</div> {/* Name on the left */}
            <div className="flex space-x-6"> {/* Menu items on the right */}
                {children}
            </div>
        </nav>
    );
};

export const ProductItem = ({
                                title,
                                description,
                                href,
                                src,
                            }: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2 items-center">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-lg"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem]">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 hover:text-cyan-500"
        >
            {children}
        </Link>
    );
};
