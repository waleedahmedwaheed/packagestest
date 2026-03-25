// Ensures styles are loaded automatically in any consuming project
if (typeof document !== 'undefined') {
  const id = 'your-ui-lib-styles';
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'styles.css';
    document.head.appendChild(link);
  }
}
