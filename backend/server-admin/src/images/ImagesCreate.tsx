import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImagesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url" multiline source="url" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
