document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !event.metaKey) {
    event.stopPropagation();
  } else if (event.key === 'Enter' && event.metaKey) {
    const sendButton = document.querySelector('button[aria-label="Send message"]');
    if (sendButton) {
      sendButton.click();
    }
  }
}, true);
