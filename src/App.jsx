import Header from "./components/Header.jsx";
import TextArea from "./components/TextArea/TextArea.jsx";
import StatDensityContainer from "./components/metrics/Container.jsx";
import { FormProvider } from "./contexts/FormContext.jsx";

function App() {
  return (
    <>
      <Header />

      <div className="p-200 flex justify-center md:flex-col md:items-center md:p-0">
        <h1 className="font-[dmSans] font-bold text-preset-mobile text-center md:text-preset-1 md:max-w-lg dark:text-neutral-100">
          Analyze your text in real-time.
        </h1>
      </div>

      <FormProvider>
        <TextArea />
        <StatDensityContainer />
      </FormProvider>
    </>
  );
}

export default App;
