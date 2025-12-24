function TextArea() {
    return (
        <section className="px-200 flex flex-col gap-200 md:px-400">
            <TextInput />
            <TextOptions />
        </section>
    );
}

function TextInput() {
    return (
        <div>
            <textarea
                className="p-150 bg-neutral-100 border-2 border-neutral-200 rounded-12 h-[200px] w-full resize-none text-neutral-700 text-preset-3 cursor-pointer focus:shadow-[0_0_8px_2px] focus:shadow-purple-500/60 focus:outline-2 focus:outline-purple-500 focus:bg-neutral-200"
                placeholder="Start typing here... (or paste your text)"
            ></textarea>
        </div>
    );
}

function TextOptions() {
    return (
        <div className="flex flex-col gap-150 items-start md:flex-row md:justify-between">
            <div className="contents md:flex md:gap-300">
                <label className="flex items-center gap-[10px]">
                    <input
                        type="checkbox"
                        className="cursor-pointer appearance-none size-4 border border-neutral-900 rounded-4 checked:bg-purple-400 checked:bg-[url('assets/images/icon-check.svg')] bg-no-repeat bg-center checked:border-none focus:outline-2 checked:focus:border-none focus:outline-purple-400 focus:outline-offset-2 focus:border-1 focus:border-neutral-200 "
                    />
                    <span>Exclude Spaces</span>
                </label>

                <label className="flex items-center gap-[10px]">
                    <input
                        type="checkbox"
                        className="cursor-pointer appearance-none size-4 border border-neutral-900 rounded-4 checked:bg-purple-400 checked:bg-[url('assets/images/icon-check.svg')] bg-no-repeat bg-center checked:border-none focus:outline-2 checked:focus:border-none focus:outline-purple-400 focus:outline-offset-2 focus:border-1 focus:border-neutral-200 "
                    />
                    <span>Set Character Limit</span>
                </label>
            </div>
            <p className="text-preset-4">
                Approx. reading time: <span>1 minute</span>
            </p>
        </div>
    );
}

export default TextArea;
