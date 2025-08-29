const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Remove ao sair do viewport
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .zoom, .slide-left').forEach(el => {
  observer.observe(el);
});
