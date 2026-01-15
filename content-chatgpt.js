document.addEventListener('keydown', function(event) {
  const textarea = document.getElementById('prompt-textarea');
  if (!textarea || !textarea.contains(event.target)) return;

  if (event.key === 'Enter' && !event.metaKey && !event.ctrlKey) {
    event.stopPropagation();
  } else if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
    const newEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      metaKey: true,
      bubbles: true
    });
    textarea.dispatchEvent(newEvent);
  }
}, true);
