document.addEventListener('keydown', function(event) {
  const editor = document.querySelector('[contenteditable="true"]');
  if (!editor || !editor.contains(event.target)) return;

  if (event.key === 'Enter' && !event.metaKey && !event.ctrlKey) {
    event.stopPropagation();
  } else if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
    const sendButton = document.querySelector('button[aria-label="Send Message"]');
    if (sendButton) sendButton.click();
  }
}, true);
