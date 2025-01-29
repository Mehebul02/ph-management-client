import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps={
    label:string;
    name:string;
    options:{value:string, label:string}[]
}

const PhSelectForm = ({label, name,options}:TSelectProps) => {
    return (
            <Controller
            name={name}
            render={({field})=>(
                <Form.Item label={label}>
                <Select
                  defaultValue="Autumn"
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