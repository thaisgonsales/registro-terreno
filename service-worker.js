self.addEventListener('install', function(event) {
  console.log('Service Worker: Evento de instalación');
  event.waitUntil(
    caches.open('registro-visita-terreno-v1').then(function(cache) {
      console.log('Service Worker: Almacenando archivos estáticos en caché');
      return cache.addAll([
        '/',
        '/index.html',
        '/estilo_chiloe.css',
        '/estilo_valdivia.css',
        '/inicio.css',
        '/jspdf.min.js',
        '/funcoes.js',
        '/img/LOGO_PARA_LA_ROJA_63x15_75-removebg-preview-removebg-preview.png',
        '/img/Grupo saesa.png',
        '/img/elec-scaled (1).jpg',
        '/registro_chiloe.html',
        '/registro_valdivia.html'
      ]).catch(function(error) {
        console.error('Service Worker: Error al agregar archivos estáticos a la caché:', error);
      });
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Service Worker: Evento de fetch para', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Service Worker: Recuperando recursos desde la caché para', event.request.url);
        return response; // Si el recurso está en caché, devolverlo desde la caché
      }
      console.log('Service Worker: Recuperando recursos desde la red para', event.request.url);
      return fetch(event.request).then(function(response) {
        // Si el recurso no está en caché, intentar recuperarlo de la red y almacenarlo en caché para futuros usos
        return caches.open('registro-visita-terreno-v1').then(function(cache) {
          cache.put(event.request.url, response.clone()); // Almacenar la respuesta en caché
          return response; // Devolver la respuesta al cliente
        });
      }).catch(function() {
        // Si no se puede recuperar el recurso ni de la caché ni de la red, responder con una página de fallback
        return caches.match('/offline.html'); // Cambia esto a tu página de fallback offline
      });
    })
  );
});
