import Clipboard from "../assets/images/icon-copy.svg?react";
import { copyToClipboard } from "../utils/copyToClipboard.js";

function CopyText({ value, onCopy }) {
  function handleCopy(e) {
    copyToClipboard(value, e);
    onCopy();
  }

  return <Clipboard onClick={(e) => handleCopy(e)} />;
}

export default CopyText;
