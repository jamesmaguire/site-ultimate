// Register service worker to control making site work offline
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('static/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}
