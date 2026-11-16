export async function copyToClipboard(text, e) {
  e.preventDefault();

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy : ", err);
  }
}
