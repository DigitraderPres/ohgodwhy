/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductListCreateFormInputValues = {
    productName?: string;
    productImgPath?: string;
    endtimeUnix?: number;
};
export declare type ProductListCreateFormValidationValues = {
    productName?: ValidationFunction<string>;
    productImgPath?: ValidationFunction<string>;
    endtimeUnix?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductListCreateFormOverridesProps = {
    ProductListCreateFormGrid?: FormProps<GridProps>;
    productName?: FormProps<TextFieldProps>;
    productImgPath?: FormProps<TextFieldProps>;
    endtimeUnix?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductListCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductListCreateFormInputValues) => ProductListCreateFormInputValues;
    onSuccess?: (fields: ProductListCreateFormInputValues) => void;
    onError?: (fields: ProductListCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductListCreateFormInputValues) => ProductListCreateFormInputValues;
    onValidate?: ProductListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductListCreateForm(props: ProductListCreateFormProps): React.ReactElement;
