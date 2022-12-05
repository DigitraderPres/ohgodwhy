/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ProductList } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductListUpdateForm(props) {
  const {
    id,
    productList,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    productName: undefined,
    productImgPath: undefined,
    endtimeUnix: undefined,
  };
  const [productName, setProductName] = React.useState(
    initialValues.productName
  );
  const [productImgPath, setProductImgPath] = React.useState(
    initialValues.productImgPath
  );
  const [endtimeUnix, setEndtimeUnix] = React.useState(
    initialValues.endtimeUnix
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...productListRecord };
    setProductName(cleanValues.productName);
    setProductImgPath(cleanValues.productImgPath);
    setEndtimeUnix(cleanValues.endtimeUnix);
    setErrors({});
  };
  const [productListRecord, setProductListRecord] = React.useState(productList);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(ProductList, id) : productList;
      setProductListRecord(record);
    };
    queryData();
  }, [id, productList]);
  React.useEffect(resetStateValues, [productListRecord]);
  const validations = {
    productName: [],
    productImgPath: [],
    endtimeUnix: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          productName,
          productImgPath,
          endtimeUnix,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            ProductList.copyOf(productListRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductListUpdateForm")}
    >
      <TextField
        label="Product name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={productName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName: value,
              productImgPath,
              endtimeUnix,
            };
            const result = onChange(modelFields);
            value = result?.productName ?? value;
          }
          if (errors.productName?.hasError) {
            runValidationTasks("productName", value);
          }
          setProductName(value);
        }}
        onBlur={() => runValidationTasks("productName", productName)}
        errorMessage={errors.productName?.errorMessage}
        hasError={errors.productName?.hasError}
        {...getOverrideProps(overrides, "productName")}
      ></TextField>
      <TextField
        label="Product img path"
        isRequired={false}
        isReadOnly={false}
        defaultValue={productImgPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName,
              productImgPath: value,
              endtimeUnix,
            };
            const result = onChange(modelFields);
            value = result?.productImgPath ?? value;
          }
          if (errors.productImgPath?.hasError) {
            runValidationTasks("productImgPath", value);
          }
          setProductImgPath(value);
        }}
        onBlur={() => runValidationTasks("productImgPath", productImgPath)}
        errorMessage={errors.productImgPath?.errorMessage}
        hasError={errors.productImgPath?.hasError}
        {...getOverrideProps(overrides, "productImgPath")}
      ></TextField>
      <TextField
        label="Endtime unix"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={endtimeUnix}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              endtimeUnix: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              productName,
              productImgPath,
              endtimeUnix: value,
            };
            const result = onChange(modelFields);
            value = result?.endtimeUnix ?? value;
          }
          if (errors.endtimeUnix?.hasError) {
            runValidationTasks("endtimeUnix", value);
          }
          setEndtimeUnix(value);
        }}
        onBlur={() => runValidationTasks("endtimeUnix", endtimeUnix)}
        errorMessage={errors.endtimeUnix?.errorMessage}
        hasError={errors.endtimeUnix?.hasError}
        {...getOverrideProps(overrides, "endtimeUnix")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
