import * as React from "react";
import { FieldValues, Control, Path, Controller } from "react-hook-form";
import {Select, SelectItem} from "@heroui/select";






export const items = [
    {key: "education", label: "مشاوره تحصیلی"},
    {key: "Job", label: "مشاوره شغلی"},
    {key: "family", label: "مشاوره خانواده"},
];


type CusSelectProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    className?: string;
};

export const CusSelect = <T extends FieldValues>(props: CusSelectProps<T>) => {
 
  
    const {
        name,
        control,
        className,
    } = props;

  return (
    <Controller
            control={control}
            name={name}
            render={({field, fieldState, formState}) => {
                return (
                    <Select
                        className={"rounded-3xl text-foreground " + className}
                        placeholder="حوزه‌ی مشاوره‌ای که نیاز دارید را از این لیست انتخاب کنید"
                        size="lg"
                        classNames={{
                            trigger: [
                                "bg-white",
                                "rounded-3xl",
                                "border border-primary/40",
                                "outline-[2px] outline-offset-0 outline-white/60",
                                "data-[hover=true]:bg-primary/20",
                                "data-[focus=true]:bg-primary/20",
                            ],
                            value: [
                                "text-foreground",
                                // "group-data-[has-value=true]:text-white",
                            ],
                            popoverContent: [
                                "rounded-lg bg-white text-foreground"
                            ],
                            selectorIcon: [
                                "w-6",
                                "h-6",
                            ],
                        }}
                        {...field}
                        isInvalid={!!fieldState.error}
                        errorMessage={fieldState.error?.message}
                        isDisabled={field.disabled || formState.disabled || formState.isSubmitting}
                    >
                        {items.map((animal) => (
                            <SelectItem
                                key={animal.key}
                                className="rounded-2xl text-right flex-row-reverse"
                            >
                                {animal.label}
                            </SelectItem>
                        ))}
                    </Select>
                )
            }}
        />
  );
};