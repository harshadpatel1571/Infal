import React from 'react'
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput } from "./form-components";
import { userNameValidator, emailValidator } from "./validators";

export default function Login() {

    const handleSubmit = (dataItem) => {
        alert(JSON.stringify(dataItem, null, 2));
    }

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                    <FormElement
                        style={{
                            width: 400,
                        }}>

                        <Field
                            id={"username"}
                            name={"username"}
                            label={"User Name"}
                            component={FormInput}
                            validator={userNameValidator}
                        />

                        <Field
                            id={"email"}
                            name={"email"}
                            label={"Email"}
                            type={"email"}
                            component={FormInput}
                            validator={emailValidator}
                        />

                        <div className="k-form-buttons">
                            <Button
                                themeColor={"primary"}
                                type={"submit"}
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Submit
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                        </div>
                    </FormElement>
                )}
            />
        </>
    )
}
