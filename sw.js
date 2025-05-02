self.addEventListener("push", function (event) {
	const data = event.data ? event.data.json() : {};
	const title = data.title || "New Notification";
	const options = {
		body: data.body || "You have a new notification.",
		icon: data.icon || "/icon.png", // Default icon, can be replaced with your own icon
		badge: data.badge || "/icon.png", // Optional badge image
	};

	event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click
self.addEventListener("notificationclick", function (event) {
	event.notification.close(); // Close the notification when clicked

	// Perform any action when notification is clicked
	event.waitUntil(
		clients.openWindow("https://thegrtnx.github.io/vapid/") // Open a specific URL (e.g., your website)
	);
});

// Optional: you can also listen for the `install` and `activate` events to control the service worker lifecycle

self.addEventListener("install", (event) => {
	console.log("Service Worker Installed");
});

self.addEventListener("activate", (event) => {
	console.log("Service Worker Activated");
});
