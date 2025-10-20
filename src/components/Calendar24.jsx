import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Calendar24() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);

  return (
    <div className="flex flex-col gap-4">
      {/* date */}
      <div className="flex flex-col gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-[100%] justify-between font-normal text-muted-foreground text-base"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(selectedDate) => {
                if (selectedDate) {
                  // Make sure it’s a Date object
                  setDate(selectedDate instanceof Date ? selectedDate : new Date(selectedDate));
                }
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* time */}
      <div className="flex flex-col gap-3">
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="09:00:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none text-muted-foreground text-base"
        />
      </div>
    </div>
  );
}
