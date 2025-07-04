import * as React from "react";
import {Input} from "@heroui/input";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import {PatternFormat} from "react-number-format";



type CusInputProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    className?: string;
    label?: string;
    type?: string;
}


export const CusInput = <T extends FieldValues>(props: CusInputProps<T>) => {
    const {
        control,
        name,
        className,
        label,
    } = props;



    const classNames = {
        input: "!text-primary",
        label: "!text-foreground/50",
        inputWrapper: [
            "bg-white",
            "border border-primary/40",
            "rounded-[24px]",
            "h-12",
            "outline-[2px]  outline-primary",
            "data-[hover=true]:bg-primary/20",
            "group-data-[focus=true]:bg-primary/20",
        ],
    }


    return(
        <Controller
        control={control}
        name={name}
        render={({field, fieldState, formState}) => {
            if(name === "phone") {
                return (
                    <PatternFormat
                        dir="ltr"
                        format="###########"
                        customInput={Input as React.ComponentType<any>}
                        label={label}
                        className={className}
                        size="md"
                        classNames={classNames}
                        {...field}
                        isInvalid={!!fieldState.error}
                        errorMessage={fieldState.error?.message}
                        isDisabled={field.disabled || formState.disabled || formState.isSubmitting}
                    />
                )
            }
            return (
                <Input
                    label={label}
                    className={className}
                    size="md"
                    classNames={classNames}
                    {...field}
                    // value={field.value}
                    // ref={field.ref}
                    // onChange={field.onChange}
                    // onBlur={field.onBlur}
                    // value={field.value}
                    // ref={field.ref}
                    isInvalid={!!fieldState.error}
                    errorMessage={fieldState.error?.message}
                    isDisabled={field.disabled || formState.disabled || formState.isSubmitting}
                />
            )
        }}
    />
    )
}