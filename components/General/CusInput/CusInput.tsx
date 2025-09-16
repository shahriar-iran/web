import * as React from "react";
import {Input} from "@heroui/input";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import {PatternFormat} from "react-number-format";



type CusInputProps<T extends FieldValues> = {
    name: Path<T>;
    isPhoneNumber?: boolean;
    control: Control<T>;
    className?: string;
    label?: string;
    placeholder?: string;
    type?: string;
}


export const CusInput = <T extends FieldValues>(props: CusInputProps<T>) => {
    const {
        control,
        isPhoneNumber,
        name,
        className,
        label,
        placeholder,
        type,
    } = props;



    const classNames = {
        input: "!text-primary placeholder:!text-foreground/40 placeholder:!text-sm",
        label: "!text-foreground/50",
        inputWrapper: [
            "bg-white",
            "border border-primary/40",
            "rounded-[24px]",
            "h-12",
            "outline-[2px] outline-primary",
            "data-[hover=true]:bg-primary/5",
            "group-data-[focus=true]:bg-primary/5",
        ],
    }


    return(
        <Controller
            control={control}
            name={name}
            render={({field, fieldState, formState}) => {
                if (isPhoneNumber) {
                    return (
                        <PatternFormat
                            dir="ltr"
                            format="###########"
                            customInput={Input as React.ComponentType<any>}
                            label={label}
                            className={className}
                            size="lg"
                            classNames={classNames}
                            placeholder={placeholder}
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
                        size="lg"
                        classNames={classNames}
                        placeholder={placeholder}
                        type={type}
                        {...field}
                        isInvalid={!!fieldState.error}
                        errorMessage={fieldState.error?.message}
                        isDisabled={field.disabled || formState.disabled || formState.isSubmitting}
                    />
                )
            }}
        />
    )
}