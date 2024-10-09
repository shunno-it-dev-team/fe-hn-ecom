import dayjs from "dayjs";
import TooltipSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { Controller } from "react-hook-form";
import { cn } from "../../../helpers/dynamicClassName";
import FieldArray from "./FieldArray";
// import ImageInput from "./ImageInput";
// import RichEditor from "./RichEditor";

// ========================= GRID COLUMNS FOR DYNAMICALLY SET THE NUMBER OF COLUMNS ==========================
const colSpan = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};
const colSpanSM = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12",
};
const colSpanMD = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
};
const colSpanLG = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
};
const colSpanXL = {
  1: "xl:col-span-1",
  2: "xl:col-span-2",
  3: "xl:col-span-3",
  4: "xl:col-span-4",
  5: "xl:col-span-5",
  6: "xl:col-span-6",
  7: "xl:col-span-7",
  8: "xl:col-span-8",
  9: "xl:col-span-9",
  10: "xl:col-span-10",
  11: "xl:col-span-11",
  12: "xl:col-span-12",
};

const FormInput = ({
  formData,
  control,
  colSpans = { xs: 12, sm: 1, md: 2, lg: 3, xl: 4 },
}) => {
  const commonInputTypes = ["text", "email", "number", "date", "url"];

  return formData.reduce((acc, input, index) => {
    // ========================= GRID COL SPAN ==========================
    // PARSE GRID COLUMNS
    const colXS = colSpan[input?.column?.xs || colSpans.xs || 1];
    const colSM = colSpanSM[input?.column?.sm || colSpans.sm || 1];
    const colMD = colSpanMD[input?.column?.md || colSpans.md || 2];
    const colLG = colSpanLG[input?.column?.lg || colSpans.lg || 3];
    const colXL = colSpanXL[input?.column?.xl || colSpans.xl || 4];
    // GRID COLUMNS CLASS
    const colSpanClass = [colXS, colSM, colMD, colLG, colXL].join(" ");

    const { visible = true } = input;

    if (commonInputTypes.includes(input.type) && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass} ${input.className}`}>
              <div className={`relative border border-secondary/20 rounded `}>
                <input
                  type={input.type}
                  id={input.id}
                  disabled={input.disabled}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-secondary/20 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${input.inputClassName}`}
                  placeholder={input.placeholder}
                  {...field}
                  onChange={
                    input.onChange
                      ? input.onChange
                      : ({ target }) =>
                          field.onChange(dayjs(target.value).toISOString())
                  }
                  value={
                    input.type === "date"
                      ? dayjs(field.value).format("YYYY-MM-DD")
                      : field.value
                  }
                />
                <label
                  htmlFor={input.id}
                  className="ms-3 absolute text-sm transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:top-2 peer-focus:scale-75"
                >
                  {input.label}{" "}
                  {input.required && <span className="text-error">*</span>}
                </label>
              </div>
              {fieldState?.error && (
                <div className="text-red-500 text-xs ">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
    } else if (input.type === "textarea" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass} ${input.className}`}>
              <div className={`relative border border-secondary/20 rounded `}>
                <textarea
                  id={input.id}
                  className={`block px-2.5 pb-2.5 pt-6 w-full text-sm bg-transparent rounded-lg border-1 border-secondary/20 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${input.inputClassName}`}
                  placeholder={input.placeholder}
                  disabled={input.disabled}
                  {...field}
                  onChange={input.onChange ? input.onChange : field.onChange}
                />
                <label
                  htmlFor={input.id}
                  className="ms-3 absolute text-sm transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:top-1 peer-focus:scale-75"
                >
                  {input.label}{" "}
                  {input.required && <span className="text-error">*</span>}
                </label>
              </div>
              {fieldState?.error && (
                <div className="text-red-500 text-xs ">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
      // -> SINGLE CHECKBOX TYPE
    } else if (input.type === "single-checkbox" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div
              className={`${colSpanClass} ${input.className} flex flex-col gap-1 justify-start items-start w-full`}
            >
              <div className="form-control">
                <label
                  className={`label gap-2 ${
                    !input.disabled ? "cursor-pointer" : ""
                  }`}
                >
                  <input
                    {...field}
                    disabled={input.disabled}
                    type="checkbox"
                    className={`checkbox ${input.inputClassName}`}
                    checked={field.value}
                  />
                  <span style={{ lineHeight: "1.5rem" }} className="label-text">
                    {input.label}
                  </span>
                </label>
              </div>
              {fieldState?.error && (
                <div className="text-red-500 text-xs ">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
    } else if (input.type === "multiple-checkbox" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass} ${input.className}`}>
              <label htmlFor={input.id} className="font-bold pb-1 w-full block">
                {input.label}{" "}
                {input.required && <span className="text-error">*</span>}
              </label>
              <div className={cn("flex flex-wrap gap-2", input.direction)}>
                {input?.options?.map((option, i) => {
                  return (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        {...field}
                        type="checkbox"
                        disabled={input.disabled}
                        onChange={() => {
                          if (field.value.includes(option.value)) {
                            const nextValue = field.value.filter(
                              (value) => value !== option.value
                            );
                            return field.onChange(nextValue);
                          }
                          return field.onChange([...field.value, option.value]);
                        }}
                        value={option.value}
                        checked={field.value.includes(option.value)}
                        className={`checkbox checkbox-sm ${input.inputClassName}`}
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
              {fieldState?.error && (
                <div className="text-red-500 text-xs">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
      // -> PASSWORD TYPE
    } else if (input.type === "radio" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass} `}>
              <label htmlFor={input.id} className="pb-1 w-full block">
                {input.label}{" "}
                {input.required && <span className="text-error">*</span>}
              </label>

              <div className={`flex gap-2 ${input.className}`}>
                {input?.options?.map((option, i) => (
                  <label
                    key={i}
                    // className="flex items-center gap-2 cursor-pointer"
                    className={`label gap-2 ${
                      !input.disabled ? "cursor-pointer" : ""
                    }`}
                  >
                    <input
                      {...field}
                      type="radio"
                      defaultChecked={field.value === option.value}
                      disabled={input.disabled}
                      value={option.value}
                      className={`radio radio-sm ${input.inputClassName}`}
                    />
                    <span className="text-xs">{option.label}</span>
                  </label>
                ))}
              </div>
              {fieldState?.error && (
                <div className="text-red-500 text-xs">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
      // -> PASSWORD TYPE
    } else if (input.type === "password" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => {
            return (
              <div className={`${colSpanClass} ${input.className}`}>
                <div className={`relative border border-secondary/20 rounded `}>
                  <input
                    type={input.type}
                    id={input.id}
                    disabled={input.disabled}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-secondary/20 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${input.inputClassName}`}
                    placeholder={input.placeholder}
                    {...field}
                    onChange={input.onChange ? input.onChange : field.onChange}
                  />
                  <label
                    htmlFor={input.id}
                    className="ms-3 absolute text-sm transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:top-2 peer-focus:scale-75"
                  >
                    {input.label}{" "}
                    {input.required && <span className="text-error">*</span>}
                  </label>
                </div>
                {fieldState?.error && (
                  <div className="text-red-500 text-xs ">
                    {fieldState?.error?.message}
                  </div>
                )}
              </div>
            );
          }}
        />
      );
      // -> SINGLE SELECT TYPE
    } else if (input.type === "single-select" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass}`}>
              <div className={`relative`}>
                <select
                  {...field}
                  id={input.id}
                  disabled={input.disabled}
                  className={cn(
                    "block select select-bordered w-full rounded appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    input.inputClassName
                  )}
                >
                  {input.placeholder && (
                    <option value="">{input.placeholder}</option>
                  )}

                  {input?.options?.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor={input.id}
                  className="ms-3 absolute text-sm transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:top-2 peer-focus:scale-75"
                >
                  {input.label}{" "}
                  {input.required && <span className="text-error">*</span>}
                </label>
              </div>

              {fieldState?.error && (
                <div className="text-red-500 text-xs">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
    } else if (input.type === "range" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass}`}>
              <label htmlFor={input.id} className="font-bold pb-1 w-full block">
                {input.label}{" "}
                {input.required && <span className="text-error">*</span>}
              </label>
              <div className="flex items-center justify-between">
                <span>{input.min || 0}</span>
                <span>{field.value}</span>
              </div>
              <input
                type="range"
                disabled={input.disabled}
                min={input.min || 0}
                max={input.max}
                {...field}
                className={`range w-full ${input.className}`}
              />

              {fieldState?.error && (
                <div className="text-red-500 text-xs">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
    } else if (input.type === "two-way-range" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => {
            // const sliderStyles = {
            //   rail: "bg-base-200", // Background for the unselected portion
            //   track: "bg-primary", // DaisyUI primary color for the selected portion
            //   handle: "bg-primary border-primary", // Handle with primary color
            // };

            return (
              <div className={`${colSpanClass} px-2`}>
                <label
                  htmlFor={input.id}
                  className="font-bold pb-1 w-full block"
                >
                  {input.label}{" "}
                  {input.required && <span className="text-error">*</span>}
                </label>
                <div className="flex items-center justify-between">
                  <span>{input.min || 0}</span>
                  <span>{field.value ? field.value.join(" - ") : ""}</span>{" "}
                  {/* Display range values */}
                </div>

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
                      backdropFilter: "blur(50px)",
                    },

                    track: {
                      backgroundColor:
                        "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))",
                    },
                  }}
                />

                {fieldState?.error && (
                  <div className="text-red-500 text-xs">
                    {fieldState?.error?.message}
                  </div>
                )}
              </div>
            );
          }}
        />
      );
    } else if (input.type === "toggle" && visible) {
      acc.push(
        <Controller
          key={input.id}
          name={input.name}
          control={control}
          render={({ field, fieldState }) => (
            <div className={`${colSpanClass}`}>
              <div className="form-control border border-secondary/20 px-2 py-1 rounded-md hover:border-secondary/50">
                <label
                  className={cn("label", !input.disabled && "cursor-pointer")}
                >
                  <span className="label-text">
                    {input.label}{" "}
                    {input.required && <span className="text-error">*</span>}
                  </span>
                  <input
                    disabled={input.disabled}
                    {...field}
                    type="checkbox"
                    className="toggle"
                    defaultChecked
                  />
                </label>
              </div>

              {fieldState?.error && (
                <div className="text-red-500 text-xs">
                  {fieldState?.error?.message}
                </div>
              )}
            </div>
          )}
        />
      );
    } else if (
      input.type === "field-array" &&
      input.fieldArrayFormData &&
      visible
    ) {
      acc.push(
        <div className={`${input.className} col-span-12`}>
          <label htmlFor={input.id} className="font-bold pb-1 w-full block">
            {input.label}
          </label>

          <FieldArray
            key={input.id}
            control={control}
            name={input.name}
            fieldArrayFormData={input.fieldArrayFormData}
          />
        </div>
      );
      // } else if (input.type === "file" && visible) {
      //   acc.push(
      //     <Controller
      //       key={input.id}
      //       name={input.name}
      //       control={control}
      //       render={({ field, fieldState }) => {
      //         return (
      //           <div className={cn("mb-2", colSpanClass)}>
      //             <label htmlFor={input.id} className="label p-0 pb-1">
      //               <div className="label-text text-xs">
      //                 {input.label}{" "}
      //                 {input.required && <span className="text-error">*</span>}
      //               </div>
      //             </label>

      //             <ImageInput field={field} label={input.label} input={input} />

      //             {fieldState?.error && (
      //               <div className="text-red-500 text-xs">
      //                 {fieldState?.error?.message}
      //               </div>
      //             )}
      //           </div>
      //         );
      //       }}
      //     />
      //   );
    } else if (input.type === "component" && visible) {
      acc.push(
        <div key={index} className={`${colSpanClass} ${input.className}`}>
          {input.component}
        </div>
      );
    }
    return acc;
  }, []);
};

export default FormInput;
