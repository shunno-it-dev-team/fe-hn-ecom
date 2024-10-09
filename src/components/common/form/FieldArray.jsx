import { useFieldArray } from "react-hook-form";
import { LuPlusCircle, LuTrash } from "react-icons/lu";
import FormInput from "./FormInput";
import PropTypes from "prop-types";

// ========================= GRID COLUMNS ==========================
// GRID COLUMN FOR DYNAMICALLY SET THE NUMBER OF COLUMNS
// const gridCols = {
//   1: "grid-cols-1",
//   2: "grid-cols-2",
//   3: "grid-cols-3",
//   4: "grid-cols-4",
//   5: "grid-cols-5",
//   6: "grid-cols-6",
//   7: "grid-cols-7",
//   8: "grid-cols-8",
//   9: "grid-cols-9",
//   10: "grid-cols-10",
//   11: "grid-cols-11",
//   12: "grid-cols-12",
// };
// const gridColsSM = {
//   1: "sm:grid-cols-1",
//   2: "sm:grid-cols-2",
//   3: "sm:grid-cols-3",
//   4: "sm:grid-cols-4",
//   5: "sm:grid-cols-5",
//   6: "sm:grid-cols-6",
//   7: "sm:grid-cols-7",
//   8: "sm:grid-cols-8",
//   9: "sm:grid-cols-9",
//   10: "sm:grid-cols-10",
//   11: "sm:grid-cols-11",
//   12: "sm:grid-cols-12",
// };
// const gridColsMD = {
//   1: "md:grid-cols-1",
//   2: "md:grid-cols-2",
//   3: "md:grid-cols-3",
//   4: "md:grid-cols-4",
//   5: "md:grid-cols-5",
//   6: "md:grid-cols-6",
//   7: "md:grid-cols-7",
//   8: "md:grid-cols-8",
//   9: "md:grid-cols-9",
//   10: "md:grid-cols-10",
//   11: "md:grid-cols-11",
//   12: "md:grid-cols-12",
// };
// const gridColsLG = {
//   1: "lg:grid-cols-1",
//   2: "lg:grid-cols-2",
//   3: "lg:grid-cols-3",
//   4: "lg:grid-cols-4",
//   5: "lg:grid-cols-5",
//   6: "lg:grid-cols-6",
//   7: "lg:grid-cols-7",
//   8: "lg:grid-cols-8",
//   9: "lg:grid-cols-9",
//   10: "lg:grid-cols-10",
//   11: "lg:grid-cols-11",
//   12: "lg:grid-cols-12",
// };
// const gridColsXL = {
//   1: "xl:grid-cols-1",
//   2: "xl:grid-cols-2",
//   3: "xl:grid-cols-3",
//   4: "xl:grid-cols-4",
//   5: "xl:grid-cols-5",
//   6: "xl:grid-cols-6",
//   7: "xl:grid-cols-7",
//   8: "xl:grid-cols-8",
//   9: "xl:grid-cols-9",
//   10: "xl:grid-cols-10",
//   11: "xl:grid-cols-11",
//   12: "xl:grid-cols-12",
// };

// ========================= GRID GAP ==========================
// GRID GAP FOR DYNAMICALLY SET THE NUMBER OF COLUMNS
const gridGap = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
};
const gridGapSM = {
  1: "sm:gap-1",
  2: "sm:gap-2",
  3: "sm:gap-3",
  4: "sm:gap-4",
  5: "sm:gap-5",
  6: "sm:gap-6",
  7: "sm:gap-7",
  8: "sm:gap-8",
  9: "sm:gap-9",
  10: "sm:gap-10",
  11: "sm:gap-11",
  12: "sm:gap-12",
};
const gridGapMD = {
  1: "md:gap-1",
  2: "md:gap-2",
  3: "md:gap-3",
  4: "md:gap-4",
  5: "md:gap-5",
  6: "md:gap-6",
  7: "md:gap-7",
  8: "md:gap-8",
  9: "md:gap-9",
  10: "md:gap-10",
  11: "md:gap-11",
  12: "md:gap-12",
};
const gridGapLG = {
  1: "lg:gap-1",
  2: "lg:gap-2",
  3: "lg:gap-3",
  4: "lg:gap-4",
  5: "lg:gap-5",
  6: "lg:gap-6",
  7: "lg:gap-7",
  8: "lg:gap-8",
  9: "lg:gap-9",
  10: "lg:gap-10",
  11: "lg:gap-11",
  12: "lg:gap-12",
};
const gridGapXL = {
  1: "xl:gap-1",
  2: "xl:gap-2",
  3: "xl:gap-3",
  4: "xl:gap-4",
  5: "xl:gap-5",
  6: "xl:gap-6",
  7: "xl:gap-7",
  8: "xl:gap-8",
  9: "xl:gap-9",
  10: "xl:gap-10",
  11: "xl:gap-11",
  12: "xl:gap-12",
};

const FieldArray = ({
  control,
  name,
  gap = { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 },
  // colSpans = { xs: 12, sm: 1, md: 2, lg: 3, xl: 4 },
  fieldArrayFormData,
}) => {
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name, // unique name for your Field Array
  });

  // PARSE GRID COLUMNS
  const gapXS = gridGap[gap.xs || 1];
  const gapSM = gridGapSM[gap.sm || 1];
  const gapMD = gridGapMD[gap.md || 2];
  const gapLG = gridGapLG[gap.lg || 3];
  const gapXL = gridGapXL[gap.xl || 4];
  // GRID COLUMNS CLASS
  const gridGapClass = [gapXS, gapSM, gapMD, gapLG, gapXL].join(" ");

  return (
    <div>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex items-start justify-between gap-3 mb-3"
        >
          <div className={`grid grid-cols-12 flex-grow ${gridGapClass}`}>
            <FormInput
              {...{
                control,
                formData: fieldArrayFormData.map((item) => ({
                  ...item,
                  name: `${name}.[${index}].${item.name}`,
                })),
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-sm btn-ghost text-error"
            onClick={() => remove(index)}
          >
            <LuTrash />
          </button>
        </div>
      ))}

      <button
        className="btn btn-sm btn-primary-light-bg-outline  mt-3"
        type="button"
        onClick={() =>
          append(
            fieldArrayFormData.reduce((acc, curr) => {
              acc[curr.name] = "";
              return acc;
            }, {})
          )
        }
      >
        <LuPlusCircle /> Add
      </button>
    </div>
  );
};

FieldArray.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  gap: PropTypes.object,
  colSpans: PropTypes.object,
  fieldArrayFormData: PropTypes.array.isRequired,
};

export default FieldArray;
