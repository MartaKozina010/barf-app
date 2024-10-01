import {Tooltip, TooltipContent, TooltipTrigger} from "~/components/ui/tooltip";
import Link from "next/link";
import {type FC, type ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export type NavbarButtonType = {
    name: string;
    link: {
        href: string
        isActive?: boolean
    }
    Icon: ReactNode
}

export const NavbarButton: FC<NavbarButtonType> = ({name, link: {href, isActive}, Icon}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={href}
                    className={twMerge("flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8", isActive ? 'text-base-yellow' : 'text-muted-foreground')}
                >
                    {Icon}
                    <span className="sr-only">{name}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{name}</TooltipContent>
        </Tooltip>
    )
}
