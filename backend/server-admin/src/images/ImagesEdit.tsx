import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImagesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="url" multiline source="url" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
