import { Button } from "@/shad/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/shad/ui/tooltip"
import Image from "next/image"

export function WesternToolTip() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>

                        <Image height={40} width={250} src="/payoneer-ar21.svg" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
