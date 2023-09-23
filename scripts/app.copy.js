import ClipboardJS from "clipboard";

export default () => {
  // Handles the behavior when text is successfully copied.
  const handleClipboardSuccess = (clipboardEvent, elementAccessor) => {
    // Get the original text that was copied.
    const originalText = clipboardEvent.text;

    // Update the target element's content to 'Copied!'.
    elementAccessor(clipboardEvent).innerHTML = "Copied!";

    // Revert the content back to the original copied text after 450ms.
    setTimeout(() => {
      elementAccessor(clipboardEvent).innerHTML = originalText;
    }, 450);

    // Clear any active text selection.
    clipboardEvent.clearSelection();
  };

  // Accessor for elements with class '.copyable'.
  const copyableElementAccessor = (clipboardEvent) =>
    clipboardEvent.trigger.firstElementChild;

  // Accessor for elements with class '.swatch-block'.
  const swatchBlockAccessor = (clipboardEvent) => clipboardEvent.trigger;

  // Initialize clipboard for '.copyable' elements.
  const copyableClipboard = new ClipboardJS(".copyable");
  copyableClipboard.on("success", (clipboardEvent) =>
    handleClipboardSuccess(clipboardEvent, copyableElementAccessor)
  );

  // Initialize clipboard for '.swatch-block' elements.
  const swatchBlockClipboard = new ClipboardJS(".swatch-block");
  swatchBlockClipboard.on("success", (clipboardEvent) =>
    handleClipboardSuccess(clipboardEvent, swatchBlockAccessor)
  );
};
