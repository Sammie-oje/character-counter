import LetterDensity from "./LetterDensity.jsx";
import Stat from "./Stat.jsx";

function StatDensityContainer() {
    return (
        <section className="px-200 flex flex-col gap-300 md:px-400 ">
            <dl
                className="flex flex-col gap-200 h-[422px] w-full md:flex-row md:h-[150px]"
                aria-live="polite"
            >
                <Stat
                    bgColor={"bg-purple-400"}
                    id={"character-count"}
                    text={"Total Characters"}
                />
                <Stat
                    bgColor={"bg-yellow-500"}
                    id={"word-count"}
                    text={"Word Count"}
                />
                <Stat
                    bgColor={"bg-orange-500"}
                    id={"sentence-count"}
                    text={"Sentence Count"}
                />
            </dl>
            <LetterDensity />
        </section>
    );
}

export default StatDensityContainer;
