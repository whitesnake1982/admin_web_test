'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0e9713044008ef49272205e8bd389a93",
"index.html": "30c6f6deb4e92290f966b1351c301004",
"/": "30c6f6deb4e92290f966b1351c301004",
"main.dart.js": "83aad54a5946c2cff1c8692a60d8340e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cd5774f07425c3780fc69df3823be1b3",
"assets/AssetManifest.json": "03a2a237abc0807216dbede1e0228474",
"assets/NOTICES": "2b1551da6aa246df2ce8d46048f70e6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a8efa73bef84da4c4e7750165388aed0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8673a2ae2c116d95d87af5b75bd56372",
"assets/fonts/MaterialIcons-Regular.otf": "8d9e5c6e2020e63a48e26db057cddc42",
"assets/assets/images/image_dm1003.jpg": "4b33dfc84db88a68b0162d3f8ff1db10",
"assets/assets/images/product_image_004.jpg": "ca9d49186febdd6b3f3cab8487ca3e7f",
"assets/assets/images/product_image_005.jpg": "54cf98feb13887fa9f8f732213f16cab",
"assets/assets/images/image_dm1002.jpg": "781d9c240fe440c447e050a0453cd8e1",
"assets/assets/images/product_image_006.jpg": "f1773e01241f2edeb0f8b30a97992ff3",
"assets/assets/images/image_dm1001.jpg": "04b7da3bb43ef522f34a6eced85268e9",
"assets/assets/images/product_image_002.jpg": "0b82d5a853b5d9d12ae5d9c4e2bbe480",
"assets/assets/images/product_image_003.jpg": "d1baca8899c4f468221929b0179fc574",
"assets/assets/images/image_dm3001.jpg": "746a4dc9195d0e3ab7a91b82bbcaa8c8",
"assets/assets/images/image_dm3003.jpg": "fc568625588c508e76ad39cd02ca7065",
"assets/assets/images/product_image_001.jpg": "c91622a7ceaa7855844b748e5d3ca351",
"assets/assets/images/image_dm3002.jpg": "9a75ec7f0d5d8005e5561a8f4e424e45",
"assets/assets/images/demo_news_image_008.jpg": "196c2a75acdfb25ff329ee26ab010e5e",
"assets/assets/images/image008.jpg": "9a75ec7f0d5d8005e5561a8f4e424e45",
"assets/assets/images/image009.jpg": "ccf98748b433541868e18ded8012051e",
"assets/assets/images/demo_news_image_009.jpg": "cc378bc2c582a1e7bdcd8a1810c6efd4",
"assets/assets/images/demo_news_image_002.jpg": "e1249618665233c4483374b56c6961bb",
"assets/assets/images/image002.jpg": "98395278a96711be0500b3cd059b6156",
"assets/assets/images/image003.jpg": "fc568625588c508e76ad39cd02ca7065",
"assets/assets/images/image_equipment001.jpg": "6b5fdd2d612904779b478ae6a8e22d4d",
"assets/assets/images/demo_news_image_003.jpg": "c10f2c2a83b54cd320eb43fb6da8b3ac",
"assets/assets/images/demo_news_image_001.jpg": "4f102556e3b6b994a74b98a5f6d00ba0",
"assets/assets/images/image_equipment003.jpg": "d7c92fe81ebef15a0a6f0ad432712657",
"assets/assets/images/image001.jpg": "f62954df0b8519ab79fcc3c853480cf5",
"assets/assets/images/image_equipment002.jpg": "b2124b4370d0ea0b04f4bcf5f2db49cc",
"assets/assets/images/demo_news_image_004.jpg": "ffb0185c363545cc3925e4868d2a5580",
"assets/assets/images/demo_news_image_010.jpg": "b6455b4a5d8920e774f25efac65d6e94",
"assets/assets/images/image010.jpg": "c02e39d76b6fc563bc035db05037216b",
"assets/assets/images/image004.jpg": "7746908171a968858d1f4b299ee36a1b",
"assets/assets/images/image_dm2002.jpg": "9a75ec7f0d5d8005e5561a8f4e424e45",
"assets/assets/images/image_dm2003.jpg": "434043874e1addb025674af4ff009e35",
"assets/assets/images/image005.jpg": "3b47bb7678dc23587f63135990697d07",
"assets/assets/images/image011.jpg": "529afaa6cae39fdbc677c87f2c60b7c0",
"assets/assets/images/demo_news_image_005.jpg": "f1088847589e670ee8cd0209a5d13a39",
"assets/assets/images/demo_news_image_007.jpg": "7d2e043c41f88c2a8735923bea924998",
"assets/assets/images/image007.jpg": "70dcf5e325199e4924b8a073be722093",
"assets/assets/images/image_dm2001.jpg": "609eaae0b723e402a74ec4c56bf5b4b4",
"assets/assets/images/image012.jpg": "533305487da53bdd4a330229c5bea1b2",
"assets/assets/images/image006.jpg": "4b33dfc84db88a68b0162d3f8ff1db10",
"assets/assets/images/demo_news_image_006.jpg": "28ea2e47f1973f14e98ed5ab7e0f6cfb",
"assets/assets/images/page_indecator.png": "c4b47bbb0def82f4c7c8c38b710e024d",
"assets/assets/images/image_dm4001.jpg": "98395278a96711be0500b3cd059b6156",
"assets/assets/images/image_dm4003.jpg": "f62954df0b8519ab79fcc3c853480cf5",
"assets/assets/images/image_dm4002.jpg": "46748dac3635785baf5e099a54868709",
"assets/assets/docs/customer_agreement.html": "0f3fd1c581afd47dceea9f6a2b0eef15",
"assets/assets/docs/privacy_argreement.html": "225c43012850b67e87af2536beed6a8f",
"assets/assets/icons/return-to-the-top.png": "f535e921fae7a6c2fa5b06b5271c099b",
"assets/assets/icons/logo.jpg": "489145024719d0e8241cde3b00d0dae5",
"assets/assets/icons/logo.png": "6fe03d492b5b229636dd9fec6451964f",
"assets/assets/icons/facebook.png": "7dc11d6850809f01e7eea013016c3225",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
