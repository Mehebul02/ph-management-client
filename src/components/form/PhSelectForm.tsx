import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps={
    label:string;
    name:string ;
    options:{value: string, label:string}[],
    defaultValue?:string| number
}

const PhSelectForm = ({label, name,options,defaultValue}:TSelectProps) => {
    return (
            <Controller
            name={name}
            render={({field,fieldState:{error}})=>(
                <Form.Item label={label}>
                <Select
                  defaultValue={defaultValue}
                  style={{ width: 220 }}
                  {...field}
                  options={options}
              />
              {error && <small className ='text-red-500'>{error.message}</small>}
            </Form.Item>
            )}
            />
    );
};

export default PhSelectForm;