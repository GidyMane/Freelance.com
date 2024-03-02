import { Button } from "@/shad/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shad/ui/popover";

export function Payment() {
    return (
        <Popover>
            <PopoverTrigger asChild>


                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Make Payment                
                    </button>



                {/* <Button variant="outline" className="capitalize dark:border-white">Make Payment</Button> */}
            </PopoverTrigger>
            <PopoverContent className="w-80 z-50 bg-blue-800">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none"></h4>
                        <p className="text-lg mt-2 text-white font-weight-bold">
                            Worldremit, Remitly, Western Union, or Sendwave Payment Details
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Country - Kenya (+254)
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Mobile money transfer
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Mpesa mobile money account
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Amount:
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            First name - Kelvin
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Last name - Njeru
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            City - Nairobi
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Mobile - 704946436
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Email: kevinnjeru44@gmail.com
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Mpesa mobile account 704946436
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Reason for sending Family or friend support
                        </p>
                        <hr className="border-gray-600 my-4" />
                        <p className="text-lg mt-2 text-white">
                            Additional Information for Airtm and Payoneer
                        </p>
                        <p className="text-sm text-white text-muted-foreground">
                            Airtm and Payoneer email: kevinnjeru44@gmail.com
                        </p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
