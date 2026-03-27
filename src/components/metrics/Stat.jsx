import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

function Stat({ bgColor, id, text, onCount }) {
    return (
        <div
            className={`p-250 ${bgColor} rounded-12 overflow-hidden relative h-[130px] w-full md:h-full md:px-150 md:py-200 xxl:p-200`}
            id={id}
        >
            <div className="flex flex-col gap-100 h-full justify-center">
                <dt className="text-preset-mobile md:text-preset-1">
                    {onCount ? onCount : "00"}
                </dt>
                <dd className="text-preset-3 z-100">{text}</dd>
            </div>
            <figure className="absolute -top-2 -right-15 ">
                <img src={`assets/images/pattern-${id}.svg`} alt={`${id}-bg`} />
            </figure>
        </div>
    );
}

export default Stat;
