import {
    Package2,
    PanelLeft,
} from "lucide-react"

import {Button} from "~/components/ui/button"
import {type FC, type PropsWithChildren} from "react";
import {NavigationDesktop, NavigationMobile} from "~/app/_components/_navbar/navigation";
import {Sheet, SheetContent, SheetTrigger} from "~/components/ui/sheet"
import Link from "next/link";

export const Navbar: FC<PropsWithChildren> = ({children}) => {

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-navbar flex-col border-r bg-background sm:flex">
                <NavigationDesktop/>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    className="sticky top-0 z-30 flex h-navbar items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5"/>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110"/>
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <NavigationMobile/>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
            <main>
                <div className="m-auto max-w-[1200px]">
                    {children}
                </div>
            </main>
        </div>
    )
}
