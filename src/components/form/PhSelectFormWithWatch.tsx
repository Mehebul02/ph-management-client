import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    defaultValue?: string | number;
    disabled?: boolean;
    mode?: "multiple" | undefined;
    onValueChange?: (value: any) => void; 
};

const PhSelectFormWithWatch = ({ label, name, options, defaultValue, disabled, mode, onValueChange }: TSelectProps) => {
    const { control } = useFormContext();
    const inputValue = useWatch({
        control,
        name
    });
    console.log(inputValue);

    useEffect(() => {
        if (onValueChange) {
            onValueChange(inputValue);
        }
    }, [inputValue, onValueChange]);

    return (
        <Controller
            name={name}
            control={control} 
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        mode={mode}
                        defaultValue={defaultValue}
                        style={{ width: "100%" }}
                        {...field}
                        options={options}
                        size="large"
                        disabled={disabled}
                    />
                    {error && <small className="text-red-500">{error.message}</small>}
                </Form.Item>
            )}
        />
    );
};

export default PhSelectFormWithWatch;
