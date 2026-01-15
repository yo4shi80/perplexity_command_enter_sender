document.addEventListener('keydown', function(event) {
  const editor = document.querySelector('.ql-editor, textarea');
  if (!editor || !editor.contains(event.target)) return;

  if (event.key === 'Enter' && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
    event.stopPropagation();
  } else if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
    const sendButton = document.querySelector('button[aria-label="Send message"]');
    if (sendButton) sendButton.click();
  }
}, true);
