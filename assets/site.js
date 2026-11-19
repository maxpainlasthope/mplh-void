(function(){
  const shareButtons = document.querySelectorAll('[data-share]');
  const title = 'MPLH : Void';
  const text = 'MPLH : Void — Two Universes. One Void.';
  const url = 'https://maxpainlasthope.github.io/mplh-void/';
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        if (navigator.share) {
          await navigator.share({ title, text, url });
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(url);
          btn.textContent = 'Link copied';
          setTimeout(() => btn.textContent = 'Share game', 1600);
        }
      } catch (_) {}
    });
  });
})();
