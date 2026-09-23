import TextInput from "./TextInput.jsx";
import TextOptions from "./TextOptions.jsx";

function TextArea() {
  return (
    <section className=" px-200 flex flex-col gap-200 md:px-400">
      <form className="contents">
        <TextInput />
        <TextOptions />
      </form>
    </section>
  );
}

export default TextArea;
