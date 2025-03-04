addEventListener('fetch', event => {
  event.respondWith(
    fetch('https://your-website-url.com/assets/home.html')  // Path to your home.html file
  );
});
