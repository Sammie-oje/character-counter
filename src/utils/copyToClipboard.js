export async function copyToClipboard(text, e) {
  e.preventDefault()
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied successfully");
    } catch {
        console.error("Failed to copy : ", err);
    }
}
