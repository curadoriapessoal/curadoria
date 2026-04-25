// sw.js
const CACHE_NAME = 'editing-pro-online-only-v1';

self.addEventListener('install', (event) => {
    // Força o SW a se tornar ativo imediatamente
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Reivindica o controle imediato de todas as abas abertas
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Aplicação estritamente online: todas as requisições passam direto para a rede.
    // Isso garante que as chamadas da API do Google nunca fiquem presas em cache desatualizado.
    event.respondWith(fetch(event.request));
});
