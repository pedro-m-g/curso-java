document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('figure img').forEach($img => {
    $img.addEventListener('click', () => {
      window.open($img.src, '_blank');
    });
  })
})
