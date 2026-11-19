import LetterDensity from "./letter-list/LetterDensity.jsx";
import Stat from "./Stat.jsx";

import { useForm } from "../../contexts/FormContext.jsx";

function StatDensityContainer() {
  const { stats, isSpaceExcluded } = useForm();

  return (
    <section className="px-200 flex flex-col gap-300 md:px-400 ">
      <dl
        className="flex flex-col gap-200 h-[422px] w-full md:flex-row md:h-[150px]"
        aria-live="polite"
      >
        <Stat
          bgColor={"bg-purple-400"}
          id={"character-count"}
          text={
            isSpaceExcluded ? "Total Characters (no space)" : "Total Characters"
          }
          onCount={stats.characters}
        />
        <Stat
          bgColor={"bg-yellow-500"}
          id={"word-count"}
          text={"Word Count"}
          onCount={stats.words}
        />
        <Stat
          bgColor={"bg-orange-500"}
          id={"sentence-count"}
          text={"Sentence Count"}
          onCount={stats.sentences}
        />
      </dl>
      <LetterDensity charDensity={stats.density} />
    </section>
  );
}

export default StatDensityContainer;
