import * as React from "react"

import { ScrollArea } from "@/shad/ui/scroll-area"
import Link from "next/link"


const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ServicesScrollArea({services}:{services:any}) {
  return (
    <ScrollArea className="h-40 w-48 rounded-md">
        
      <div className="p-4 flex-1 overflow-x-visible">
      
        {services.map((tag:string) => (
          <div key={tag} >
          <Link href={`#makeorder`}>
            <div key={tag}   className="text-sm my-2 text-white hover:scale-105 hover:cursor-pointer hover:text-black">
              {tag}
            </div>
            </Link>
            {/* <hr className="my-2" /> */}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
