import LetterDensity from "./LetterDensity.jsx";
import Stat from "./Stat.jsx";

import { countCharacters } from "../../utils/character-count.js";
import { countWords } from "../../utils/word-count.js";
import { countSentence } from "../../utils/sentence-count.js";

import { getAnalytics } from "../../utils/letter-density.js";

function StatDensityContainer({ value }) {
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
                    onCount={countCharacters(value)}
                />
                <Stat
                    bgColor={"bg-yellow-500"}
                    id={"word-count"}
                    text={"Word Count"}
                    onCount={countWords(value)}
                />
                <Stat
                    bgColor={"bg-orange-500"}
                    id={"sentence-count"}
                    text={"Sentence Count"}
                    onCount={countSentence(value)}
                />
            </dl>
            <LetterDensity charDensity={getAnalytics(value)}/>
        </section>
    );
}

export default StatDensityContainer;
