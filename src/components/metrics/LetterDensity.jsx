import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LetterDensity() {
    return (
        <div className="flex flex-col gap-250">
            <h3 className="text-preset-2">Letter Density</h3>

            <dl className="flex flex-col gap-150">
                <DensityList percent={"16.06"} wordCount={"40"} letter={"E"} />
                <DensityList percent={"16.06"} wordCount={"40"} letter={"E"} />
                <DensityList percent={"16.06"} wordCount={"40"} letter={"E"} />
                <DensityList percent={"16.06"} wordCount={"40"} letter={"E"} />
                <DensityList percent={"16.06"} wordCount={"40"} letter={"E"} />
            </dl>

            <button className="flex gap-100 items-center">
                <span className="text-preset-3">See More</span>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </button>
        </div>
    );
}

function DensityList({ percent, wordCount, letter }) {
    return (
        <div className="flex items-center gap-[0.875rem] text-preset-4">
            <dt>
                <code>{letter}</code>
            </dt>
            <dd className="contents">
                <div className="w-full h-[12px] rounded-full bg-neutral-100">
                    <div className="w-20 h-[12px] rounded-full bg-purple-400"></div>
                </div>
                <output>
                    {wordCount}({percent}%)
                </output>
            </dd>
        </div>
    );
}

export default LetterDensity;
