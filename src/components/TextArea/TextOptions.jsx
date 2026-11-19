import { useForm } from "../../contexts/FormContext.jsx";
import { Checkbox } from "../Checkbox.jsx";

function TextOptions() {
  const { stats, onFormData, isSpaceExcluded, isLimitBoxOpen, characterLimit } =
    useForm();

  return (
    <div className="flex flex-col gap-150 items-start md:flex-row md:justify-between">
      <div className="contents md:flex md:gap-300">
        <Checkbox
          name="excludeSpaces"
          id="exclude-spaces-checkbox"
          value={isSpaceExcluded}
          onChangeData={onFormData}
          label="Exclude Spaces"
        />

        <div className="flex gap-[10px] items-center">
          <Checkbox
            name="openLimitBox"
            id="character-limit-checkbox"
            value={isLimitBoxOpen}
            onChangeData={onFormData}
            label="Set Character Limit"
          />

          {isLimitBoxOpen && (
            <input
              name="characterLimit"
              type="number"
              className="py-050 w-[55px] text-center text-preset-4 border border-neutral-600 rounded-6 dark:text-neutral-200 [appearance: textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={characterLimit}
              onChange={isLimitBoxOpen ? onFormData : onFormData("")}
            />
          )}
        </div>
      </div>
      <p className="text-preset-4 dark:text-neutral-200">
        Approx. reading time:{" "}
        <span>
          {stats.readingTime}
          {stats.readingTime > 1 ? " minutes" : " minute"}
        </span>
      </p>
    </div>
  );
}

export default TextOptions;
