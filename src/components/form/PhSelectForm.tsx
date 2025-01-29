import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps={
    label:string;
    name:string;
    options:{value:string | number, label:string |number}[],
    defaultValue?:string| number
}

const PhSelectForm = ({label, name,options,defaultValue}:TSelectProps) => {
    return (
            <Controller
            name={name}
            render={({field})=>(
                <Form.Item label={label}>
                <Select
                  defaultValue={defaultValue}
                  style={{ width: 220 }}
                  {...field}
                  options={options}
              />
            </Form.Item>
            )}
            />
    );
};

export default PhSelectForm;