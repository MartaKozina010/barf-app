import {type FC, type PropsWithChildren} from "react";
import {Button} from "~/components/ui/button";
import {type ButtonProps} from "~/components/ui/button";
import {ReloadIcon} from "@radix-ui/react-icons";
import {clsx} from "clsx";

type Props = {
    isPending?: boolean;
} & ButtonProps

export const ButtonWithLoader: FC<PropsWithChildren<Props>> = ({isPending, children = "Submit", ...rest}) => {

    return (
        <Button {...rest} disabled={isPending} className="relative">
            <ReloadIcon className={clsx(`h-4 w-4 animate-spin absolute`, isPending ? "visible" : "invisible")}/>
            <span className={isPending ? "invisible" : "visible"}>{children}</span>
        </Button>
    )
}