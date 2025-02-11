import { Form, Select } from "antd";
import { Controller, useFormContext, useWatch,  } from "react-hook-form";

type TSelectProps={
    label:string;
    name:string ;
    options:{value: string, label:string}[],
    defaultValue?:string| number,
    disabled?:boolean,
    mode?:'multiple' | undefined
}

// const {control} = useFormContext()
// const inputValue = useWatch({
//     control,
//     name
// })
// console.log(inputValue);

const PhSelectForm = ({label, name,options,defaultValue,disabled,mode}:TSelectProps) => {
    return (
            <Controller
            name={name}
            render={({field,fieldState:{error}})=>(
                <Form.Item label={label}>
                <Select
                mode={mode}
                  defaultValue={defaultValue}
                  style={{ width: '100%' }}
                  {...field}
                  options={options}
                   size="large"
                   disabled={disabled}
              />
              {error && <small className ='text-red-500'>{error.message}</small>}
            </Form.Item>
            )}
            />
    );
};

export default PhSelectForm;