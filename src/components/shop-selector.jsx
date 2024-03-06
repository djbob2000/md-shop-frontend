import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group-btn";
import { HeartPulse, Microscope, ActivitySquare } from "lucide-react";

export default function ShopSelector() {
  return (
    <>
      <div className="flex flex-col space-y-1.5 mb-4">
        <h3 className="font-semibold leading-none tracking-tight">
          Select your shop
        </h3>
        <p className="text-sm text-muted-foreground">
          Products are displayed only from the selected store
        </p>
      </div>

      <RadioGroup role="radiogroup" style={{ outline: "none" }}>
        <div>
          <RadioGroupItem
            type="button"
            role="radio"
            aria-checked="checked"
            data-state="checked"
            value="1"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
          >
            <HeartPulse size={32} className="mb-3" />
            Drugstore 24
          </RadioGroupItem>
        </div>
        <div>
          <RadioGroupItem
            type="button"
            role="radio"
            aria-checked="unchecked"
            data-state="unchecked"
            value="2"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
          >
            <Microscope size={32} className="mb-3" />
            Pharmacy 48
          </RadioGroupItem>
        </div>
        <div>
          <RadioGroupItem
            type="button"
            role="radio"
            aria-checked="unchecked"
            data-state="unchecked"
            value="3"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
          >
            <ActivitySquare size={32} className="mb-3" />
            Farengate 36.6
          </RadioGroupItem>
        </div>
      </RadioGroup>
    </>
  );
}
