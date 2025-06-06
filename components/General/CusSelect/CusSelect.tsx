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
                        className={"rounded-[1px] text-white text-opacity-40 " + className}
                        placeholder="انتخاب واحد مورد نظر"
                        size="lg"
                        classNames={{
                            trigger: [
                                "bg-primary-400",
                                "rounded-[1px]",
                                "outline-[2px] outline-offset-0 outline-white/60",
                                "data-[hover=true]:bg-primary-400",
                                "data-[hover=true]:outline-white",
                                "data-[focus=true]:outline-white",
                                "data-[focus=true]:bg-primary-400",
                            ],
                            value: [
                                "text-white/20 text-sm",
                                "group-data-[has-value=true]:text-white",
                            ],
                            popoverContent: [
                                "rounded-none bg-white text-primary outline-[2px] outline-offset-0 outline-white"
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
                                className="rounded-[1px] text-right flex-row-reverse"
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