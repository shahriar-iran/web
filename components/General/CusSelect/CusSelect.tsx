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
    placeholder?: string;
};

export const CusSelect = <T extends FieldValues>(props: CusSelectProps<T>) => {
    const {
        control,
        name,
        className,
        placeholder,
    } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({field, fieldState, formState}) => {
                return (
                    <Select
                        className={"rounded-3xl text-foreground " + className}
                        placeholder={placeholder}
                        size="lg"
                        classNames={{
                            trigger: [
                                "bg-white",
                                "rounded-3xl",
                                "border border-primary/40",
                                "outline-[2px] outline-offset-0 outline-white/60",
                                "data-[hover=true]:bg-primary/5",
                                "data-[focus=true]:bg-primary/5",
                            ],
                            value: [
                                "text-foreground/40 text-sm",
                            ],
                            popoverContent: [
                                "rounded-2xl border border-primary/40 bg-white text-foreground"
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
                        {items.map((v) => (
                            <SelectItem
                                key={v.key}
                                className="rounded-2xl text-right flex-row-reverse"
                            >
                                {v.label}
                            </SelectItem>
                        ))}
                    </Select>
                )
            }}
        />
  );
};