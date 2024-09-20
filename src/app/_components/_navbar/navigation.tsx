'use client'

import {type FC} from "react";
import {TooltipProvider} from "~/components/ui/tooltip";
import {NavbarButton, type NavbarButtonType} from "~/app/_components/_navbar/navbar-button";
import {navConfig} from "~/app/_utils";
import {Beef, PawPrint, Pill, Settings} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

const navList = (pathname: string): NavbarButtonType[] => {

    return [
        {
        name: "My pets",
        link: {
            href: navConfig.MY_PETS,
            isActive: isCurrentUrlActive(pathname, navConfig.MY_PETS)
        },
        Icon: <PawPrint className="h-5 w-5"/>
    },
    {
        name: "Diet",
        link: {
            href: navConfig.DIET,
            isActive: isCurrentUrlActive(pathname, navConfig.DIET)
        },
        Icon: <Beef className="h-5 w-5"/>
    },
    {
        name: "Supplements",
        link: {
            href: navConfig.SUPPLEMENTS,
            isActive: isCurrentUrlActive(pathname, navConfig.SUPPLEMENTS)
        },
        Icon: <Pill className="h-5 w-5"/>
    },
        ]
}

export const NavigationDesktop: FC = () => {
    const pathname = usePathname()

    return (
        <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                {navList(pathname).map(item => <NavbarButton key={item.name} {...item}/>)}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <NavbarButton
                    name="Settings"
                    link={{href: navConfig.SETTINGS, isActive: isCurrentUrlActive(pathname, navConfig.SETTINGS)}}
                    Icon={<Settings className="h-5 w-5"/>}
                />
            </nav>
        </TooltipProvider>
    )
}

export const NavigationMobile: FC = () => {
    const pathname = usePathname()

    return (
        <div>
            {navList(pathname).map(item => <Link
                    key={item.name}
                    href={item.link.href}
                    className={twMerge("flex items-center gap-4 px-2.5 hover:text-foreground", item.link.isActive ? 'text-blue-500' : "text-muted-foreground")}
                >
                    {item.Icon}
                    {item.name}
                </Link>
            )}
        </div>
    )
}

const isCurrentUrlActive = (pathname: string, linkHref: string) => pathname.includes(linkHref)
