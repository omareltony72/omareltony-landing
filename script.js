document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

  document.querySelectorAll('.proof-img img').forEach(function (img) {
    img.addEventListener('error', function () {
      img.classList.add('img-missing');
      img.closest('.proof-img').classList.add('is-missing');
    });
  });
});
