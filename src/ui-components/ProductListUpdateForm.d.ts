/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProductList } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductListUpdateFormInputValues = {
    productName?: string;
    productImgPath?: string;
    endtimeUnix?: number;
};
export declare type ProductListUpdateFormValidationValues = {
    productName?: ValidationFunction<string>;
    productImgPath?: ValidationFunction<string>;
    endtimeUnix?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductListUpdateFormOverridesProps = {
    ProductListUpdateFormGrid?: FormProps<GridProps>;
    productName?: FormProps<TextFieldProps>;
    productImgPath?: FormProps<TextFieldProps>;
    endtimeUnix?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productList?: ProductList;
    onSubmit?: (fields: ProductListUpdateFormInputValues) => ProductListUpdateFormInputValues;
    onSuccess?: (fields: ProductListUpdateFormInputValues) => void;
    onError?: (fields: ProductListUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductListUpdateFormInputValues) => ProductListUpdateFormInputValues;
    onValidate?: ProductListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductListUpdateForm(props: ProductListUpdateFormProps): React.ReactElement;
