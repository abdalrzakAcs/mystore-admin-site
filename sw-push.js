/* MyStore — إشعارات Web Push
   يُحمَّل داخل الـ Service Worker المولَّد (Workbox) عبر importScripts.
   - استقبال إشعارات Web Push وعرضها على الجهاز
   - التعامل مع النقر على الإشعار
   - عرض إشعارات بطلب من الصفحة (للعمل في الخلفية)
*/

/* ---------- تنظيف كاش النسخة اليدوية القديمة (mystore-*-v2) ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => /^mystore-(shell|assets|fonts)-/.test(k))
          .map((k) => caches.delete(k))
      );
    })()
  );
});

/* ---------- إشعارات Web Push (عند تفعيل الخادم) ---------- */
self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { body: event.data ? event.data.text() : "" };
  }
  const title = data.title || "طلب جديد";
  const options = {
    body: data.body || "وصلك طلب جديد",
    icon: "/logo.png",
    badge: "/logo.png",
    dir: "rtl",
    lang: "ar",
    tag: data.tag || "mystore-order",
    renotify: true,
    requireInteraction: true, // يضل ظاهر لحدّ ما تضغطه
    silent: false, // صوت النظام
    vibrate: [120, 60, 120, 60, 120],
    data: { url: data.url || "/orders" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || "/orders";
  event.waitUntil(
    (async () => {
      const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      for (const client of all) {
        if ("focus" in client) {
          try {
            if ("navigate" in client) await client.navigate(targetUrl);
          } catch {
            /* ignore */
          }
          return client.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })()
  );
});

/* ---------- رسائل من الصفحة ---------- */
self.addEventListener("message", (event) => {
  const msg = event.data || {};
  if (msg.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (msg.type === "SHOW_NOTIFICATION") {
    const title = msg.title || "طلب جديد";
    const options = msg.options || {};
    self.registration.showNotification(title, {
      icon: "/logo.png",
      badge: "/logo.png",
      dir: "rtl",
      lang: "ar",
      ...options,
    });
  }
});
