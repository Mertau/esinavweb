'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d356010120c635879523b18d05bcefaa",
".git/config": "5ae01071ae1f6d4385af5dcbdc5c3929",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6d090a56b7b6c582675bf0cf1d908de2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b95cfc08e71154d0d3473a23ab0bc432",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "561728bb2f623d2d2c991d9ee6c8c612",
".git/logs/refs/heads/main": "24e989f9618b06def045735deb3c5236",
".git/logs/refs/remotes/origin/main": "06f0a45654c5fa05faf7e462979af7a7",
".git/objects/03/5646420f481da8798c7ded9e0198f8c4a9cf9d": "2056a09da512036617fe038669e77ec2",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/7c4d4dffe997ae9a3d686e2404a6f717564f8b": "33ae9fdb252ff097535e2a281c36e4ba",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/d7c395427329bf28d8dc90f3ff874ed57847d4": "282e0e65240486a9f2d848167d380d0b",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/3e8b9f380e68e8984d4e636ea454b0fff6f8fd": "41a901501a06eccf09f260357422250b",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/3b5a1ce327b5809544090029f710b9400b1cfb": "eb3bc93247cc687b9218a10a3aed3b4b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/65fe15686fa8376f1c8da1d5968886080cbab3": "b047306ea41116a5c9c10918193d57c2",
".git/objects/33/e5e4ebaa1b9855adfd9598b91d7f26d31737cf": "0913c0f7beab8021f0735a4012536c1b",
".git/objects/34/ef0d8813bbeb20d6fb8a5d81dfd26629f98b17": "5fbe0d367d5fc9b1c8a5d60b3b8d9615",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/8de453cfd9d1aeef8760eefe90bacfb940e3ca": "9c7e426283ea7e305f2afa3736e90931",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/039a974f78af33becea255ed832d729b0a63c9": "d06d11d76e880969aeab3ad2b6577142",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/669124060fcae0624051f101157f2678f241cd": "d1cdc34832abc94b1fe8ec69d7526299",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6187a6ad42aac384e69b6b3ad39359e16fa989": "b948ca4a55dbe05040078a41cb6d2ff8",
".git/objects/4a/5d54cfc54cc4819d637f22e196bc8a0587b18f": "aa7988def1b7f757ea0a5088d0349474",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/b7d75d5f2b3706300dbdee6df4ab4bc28b62b8": "8d647a8421ed4dae8c17a36f61aa5920",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/3f8f127b6ee555a7028ee53a280e01fbddf9b0": "4a552d99fe4c4c5c5538c71c73bb24ee",
".git/objects/6a/03ed5c635da75e559530d5314ed8be879e118f": "a02818a2b3a95b5c69d89afdb07356b7",
".git/objects/72/090bd36e6eff2ee1a1b11864c4fb1b14070f70": "ae042f60a259d5544cd2696902d666a7",
".git/objects/73/9b4e81e88a857061ca87128d067697fa4db5e5": "018f44190dc7a20c85eb57668383c1a1",
".git/objects/7a/612bb2c2da14576b87a6f5d7a714a98677cdbf": "d3fb253e3bd17f9e825aeebe6b3602cf",
".git/objects/7c/68ca7c450fb8db2e332f148d02323fa0e2f25a": "8c72c1a37faaeeab3e41b8e2b1d40e5a",
".git/objects/7f/dfcc2dc1639d8d7eb9fbf5eaf71de0f5fd4177": "88885474b137718283295df8b624531b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/b559426a569d4999fe1612185fe52f5fb030b9": "1d7ae7ae60b8c95f51950fee41093f19",
".git/objects/95/dbba10cc1b9305c96d7f0f943101c005023673": "ee2ede3ea4d761b99fcf8f28439d8d6a",
".git/objects/aa/dda6a8124cff66cc2025341a6aee24b3ca83c3": "5a8846be03e4e9b32bc59064925a48e1",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/8af51770cd5fc43e90c8b094d37c40b1c28398": "0c270dae49c8cfeecae7eddd5242ec90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ff41dedae2e4618bbfffeea8b11417eac529c5": "49b3c4c9a5f939fe9cedc3f74bfb12e3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cb/9b1b37ff94247fc63400dce3b1b383a442c682": "8c2bd41aca6be75a6773023c2aa514d0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6d0ab7cbb3168dad3aad5fbbe96328040eaed6": "b76c8593856c93e676c8e44e78f98187",
".git/objects/df/e55960b6d6a7cf350270457cca5ee072d44a9a": "127c9e415aa12f54700ef29e77b309c1",
".git/objects/e0/0e8e95b73824d5ad915285811092e54e61137b": "29a934f24ad7df28463dad2cc28b7845",
".git/objects/e2/24cca35bebb103dcdcdbb400af058b8e692579": "5e9e9193712d759b995d2c063814b6a0",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/02cfbd994d4037976613a30193a60f044ebe8b": "28495214c17b763895f836eefc590807",
".git/objects/ea/a71728243f3e5d62ca0577ab11b7ac6bad97a0": "e9ee603afd6efc6c196aaf17088fb848",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/23e7c6861fdc839b963c7bfada5cd06c3d43af": "4862dfd15d87b7381f9000e29eeceb8a",
".git/objects/f6/c5125e1afc2eb4eb46d485ccfaf56c1805425f": "a08e65a70be7da5a1f2f6fc90689a593",
".git/objects/f6/f40ea73ab717d953c3d5ad518d0b45abaa02af": "2fe4b48faf9b41236eb959a9298f29c3",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "028cfe19e2a5e63b968d7109625366d1",
".git/refs/remotes/origin/main": "028cfe19e2a5e63b968d7109625366d1",
"assets/AssetManifest.bin": "9f156d0b0d35a3bc6e0c433e4db009d1",
"assets/AssetManifest.json": "aedf462590ec079bb17d46fe2a63f85c",
"assets/assets/images/kapak_103014.webp": "aa86774f88c72396725902022d94c60c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "482a35404dc7ef5ba2a0140af1f0ae89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "9319c59a25b00d3f4d64e7276e0ff2b1",
"canvaskit/canvaskit.wasm": "4d86c371593190f295d8f6577f4d44a8",
"canvaskit/chromium/canvaskit.js": "c6907e24da20dcf39c2f3ceee2663f1b",
"canvaskit/chromium/canvaskit.wasm": "8b16caeab6e7fc6db6609b416f05e906",
"canvaskit/skwasm.js": "f4f37a4a8f520489f5017d9241270821",
"canvaskit/skwasm.wasm": "34fa7acedca7fa4bfefbc323b763beb5",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d41d8cd98f00b204e9800998ecf8427e",
"/": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "3c54cd46b7a1d245292ef1ca05089fcb",
"manifest.json": "beafd2490a97e3ddcfb070fad1eae8a7",
"version.json": "b811ce07c152ef32a0e24a0ed2ea2642"};
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
