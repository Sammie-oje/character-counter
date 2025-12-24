import Header from "./components/Header.jsx";
import TextArea from "./components/TextArea.jsx";
import StatDensityContainer from "./components/metrics/Container.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function App() {
    return (
        <>
            <Header />

            <div className="p-200 flex justify-center md:flex-col md:items-center md:p-0">
                <h1 className="font-[dmSans] font-bold text-preset-mobile  text-center md:text-preset-1 md:max-w-lg">
                    Analyze your text in real-time.
                </h1>
            </div>

            <TextArea />

            <StatDensityContainer />
        </>
    );
}

export default App;
