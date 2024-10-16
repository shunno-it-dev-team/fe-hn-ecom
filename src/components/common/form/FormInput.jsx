// import dayjs from "dayjs";
import TooltipSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { Controller } from "react-hook-form";
// import FieldArray from "./FieldArray";
import FormInputWrapper from "./FormInputWrapper";
import { cn } from "../../../helpers/dynamicClassName";
import PasswordField from "./PasswordField";
// import ImageInput from "./ImageInput";
// import RichEditor from "./RichEditor";

const FormInput = ({ formData, control, size }) => {
  const commonInputTypes = ["text", "email", "number", "date", "url"];

  return formData.reduce((acc, input, index) => {
    const { visible = true } = input;

    const inputSize = input.size || size;

    if (commonInputTypes.includes(input.type) && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <FormInputWrapper
              {...{
                label: input.label,
                errorMessage: fieldState?.error?.message,
                colSpans: input.colSpans,
                className: input.className,
                required: input.required,
              }}
            >
              <input
                type={input.type}
                placeholder={input.placeholder}
                className={cn(
                  "input input-bordered w-full",
                  input.inputClassName,
                  {
                    [`input-${inputSize}`]: inputSize,
                  }
                )}
                {...field}
              />
            </FormInputWrapper>
          )}
        />
      );
    }
    if (input.type === "password" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <FormInputWrapper
              {...{
                label: input.label,
                errorMessage: fieldState?.error?.message,
                colSpans: input.colSpans,
                className: input.className,
              }}
            >
              <PasswordField
                inputProps={field}
                className={input.inputClassName}
              />
            </FormInputWrapper>
          )}
        />
      );
    } else if (input.type === "textarea" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <FormInputWrapper
              {...{
                label: input.label,
                errorMessage: fieldState?.error?.message,
                colSpans: input.colSpans,
                className: input.className,
              }}
            >
              <textarea
                placeholder={input.placeholder}
                className={cn(
                  "textarea textarea-bordered",
                  input.inputClassName,
                  {
                    [`input-${inputSize}`]: inputSize,
                  }
                )}
                {...field}
              />
            </FormInputWrapper>
          )}
        />
      );
    } else if (input.type === "single-checkbox" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <FormInputWrapper
              {...{
                label: input.label,
                errorMessage: fieldState?.error?.message,
                colSpans: input.colSpans,
                className: input.className,
              }}
            >
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className={cn(
                    "checkbox checkbox-primary",
                    input.inputClassName,
                    {
                      [`checkbox-${inputSize}`]: inputSize,
                    }
                  )}
                  {...field}
                />
              </label>
            </FormInputWrapper>
          )}
        />
      );
    } else if (input.type === "multiple-checkbox" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <FormInputWrapper
              {...{
                label: input.label,
                errorMessage: fieldState?.error?.message,
                colSpans: input.colSpans,
                className: input.className,
              }}
            >
              <ul className="space-y-2 mt-2">
                {input?.options?.map((option, i) => (
                  <li key={i}>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">{option.label}</span>
                        <input
                          type="checkbox"
                          defaultChecked
                          className={cn(
                            "checkbox checkbox-sm checkbox-primary",
                            input.inputClassName,
                            {
                              [`checkbox-${inputSize}`]: inputSize,
                            }
                          )}
                          {...field}
                        />
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </FormInputWrapper>
          )}
        />
      );
    } else if (input.type === "radio" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <FormInputWrapper
              {...{
                label: input.label,
                errorMessage: fieldState?.error?.message,
                colSpans: input.colSpans,
                className: input.className,
              }}
            >
              <ul className={cn("space-y-2 mt-2", input.className)}>
                {input?.options?.map((option, i) => (
                  <li key={i}>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">{option.label}</span>
                        <input
                          type="radio"
                          defaultChecked
                          className={cn(
                            "radio radio-sm radio-primary",
                            input.inputClassName,
                            {
                              [`radio-${inputSize}`]: inputSize,
                            }
                          )}
                          {...field}
                        />
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </FormInputWrapper>
          )}
        />
      );
    } else if (input.type === "two-way-range" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div
              className={cn(
                "form-control w-full",
                {
                  [`col-span-${input.colSpans?.xs}`]: input.colSpans?.xs,
                  [`sm:col-span-${input.colSpans?.sm}`]: input.colSpans?.sm,
                  [`md:col-span-${input.colSpans?.md}`]: input.colSpans?.md,
                  [`lg:col-span-${input.colSpans?.lg}`]: input.colSpans?.lg,
                  [`xl:col-span-${input.colSpans?.xl}`]: input.colSpans?.xl,
                },
                input.className
              )}
            >
              <label htmlFor={input.id} className="font-bold pb-1 w-full block">
                {input.label}{" "}
                {input.required && <span className="text-error">*</span>}
              </label>

              {/* Display range values */}
              <div className="flex items-center justify-between">
                <span>{input.min || 0}</span>
                <span>{field.value ? field.value.join(" - ") : ""}</span>{" "}
              </div>

              <div className="px-2">
                <TooltipSlider
                  range
                  min={input.min || 0}
                  max={input.max || 20}
                  defaultValue={[input.min || 0, input.max || 20]}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  styles={{
                    handle: {
                      borderColor:
                        "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))",
                      backgroundColor:
                        "var(--fallback-pc,oklch(var(--pc)/var(--tw-bg-opacity)))",
                    },

                    track: {
                      backgroundColor:
                        "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))",
                    },
                  }}
                />
              </div>

              {fieldState?.error?.message && (
                <div className="label text-error italic">
                  <span className="label-text-alt">
                    {fieldState.error?.message}
                  </span>
                </div>
              )}
            </div>
          )}
        />
      );
    } else if (input.type === "react-select" && visible) {
      acc.push(
        <Controller
          key={index}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div
              className={cn(
                "form-control w-full",
                {
                  [`col-span-${input.colSpans?.xs}`]: input.colSpans?.xs,
                  [`sm:col-span-${input.colSpans?.sm}`]: input.colSpans?.sm,
                  [`md:col-span-${input.colSpans?.md}`]: input.colSpans?.md,
                  [`lg:col-span-${input.colSpans?.lg}`]: input.colSpans?.lg,
                  [`xl:col-span-${input.colSpans?.xl}`]: input.colSpans?.xl,
                },
                input.className
              )}
            >
              <label htmlFor={input.id} className="font-bold pb-1 w-full block">
                {input.label}{" "}
                {input.required && <span className="text-error">*</span>}
              </label>

              {/* Display range values */}
              <div className="flex items-center justify-between">
                <span>{input.min || 0}</span>
                <span>{field.value ? field.value.join(" - ") : ""}</span>{" "}
              </div>

              <div className="px-2">
                <TooltipSlider
                  range
                  min={input.min || 0}
                  max={input.max || 20}
                  defaultValue={[input.min || 0, input.max || 20]}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  styles={{
                    handle: {
                      borderColor:
                        "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))",
                      backgroundColor:
                        "var(--fallback-pc,oklch(var(--pc)/var(--tw-bg-opacity)))",
                    },

                    track: {
                      backgroundColor:
                        "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))",
                    },
                  }}
                />
              </div>

              {fieldState?.error?.message && (
                <div className="label text-error italic">
                  <span className="label-text-alt">
                    {fieldState.error?.message}
                  </span>
                </div>
              )}
            </div>
          )}
        />
      );
    }
    return acc;
  }, []);
};

export default FormInput;
