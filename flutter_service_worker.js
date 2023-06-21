'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0ad4242687bc9cf0ba2df7b57dfded66",
"assets/assets/image/adana.png": "df74923195443e0ad051c0aa0a19de2b",
"assets/assets/image/ayran.png": "f942ecf9e4a1f1cde1113fab03fef86b",
"assets/assets/image/baklava.png": "70e5859f7746aa57abe75b3e04565e37",
"assets/assets/image/beyti.png": "e3ec99c72aac0091d5c1ec9edf93f0ff",
"assets/assets/image/bulgur.png": "07e544aeca2ccf707ff927adc515be73",
"assets/assets/image/cag-kebap.png": "ea7763050e5e2c552a92eb2563706c83",
"assets/assets/image/cheeseburger.png": "1ba1522c36f6c80525e1cf59cf8b4971",
"assets/assets/image/domates.png": "1b8bd76f280369c4ba925c2b6ed37a2b",
"assets/assets/image/durum-et.png": "865bd18535a2b069a1956b5dffe6fb69",
"assets/assets/image/et-doner-ekmek.png": "d2d09b292238ee735de387bf57903b55",
"assets/assets/image/etli-pizza.png": "23c9d6410d3619935fa13526ce3fd33b",
"assets/assets/image/ezogelin.png": "208a71255a96536b92d51a28cf83c271",
"assets/assets/image/gazoz.png": "7b23335f4048de7f1e4e2c08016aa90d",
"assets/assets/image/gul-borek.png": "fdc4304b32cba2498add4714f54dd711",
"assets/assets/image/iskembe.png": "216a630b65d35677029e0f5c01105928",
"assets/assets/image/iskender.png": "7ededc7cd50aef8d757ed487955272f6",
"assets/assets/image/izgaraburger.png": "61560aa598c67630104c3488117d2afc",
"assets/assets/image/karisik-pide.png": "a1d6bea425805c0bcd89de8c5a488c1e",
"assets/assets/image/karisik-pizza.png": "0a74fa1337fb4ca58328e3d23fc9ac10",
"assets/assets/image/kasarli-pide.png": "899fe36b24048c0dc4e373e65e383216",
"assets/assets/image/kellepaca.png": "791344b9fb9c25e32f7e5f2053b2bded",
"assets/assets/image/kiymali-borek.png": "80e3f4cf02b7af2acbf57555a62e125e",
"assets/assets/image/kiymali-pide.png": "cc833a270ea40b7b086fcfd852778d49",
"assets/assets/image/kofteburger.png": "6e9dca18a69bd096e6e7a4532fb503e1",
"assets/assets/image/kol-borek.png": "5b982b1d70cdcbb19195c72113e91585",
"assets/assets/image/kola.png": "c84eadce1e9d3d2204204f5f196255fb",
"assets/assets/image/kurt-borek.png": "0e099f6d9045ccf5002aaa3ef04147db",
"assets/assets/image/kusbasili-pide.png": "470a227be2911c41b4bccd6ee8a9b028",
"assets/assets/image/limonata.png": "1a467d3fcd96daa1e9470acdd92ab9ee",
"assets/assets/image/logo.png": "5141a75814d469ef9224e103ec344c40",
"assets/assets/image/mantarli-pizza.png": "666e3e73d485d8da44d0a59af00edca6",
"assets/assets/image/manti.png": "ba0a8b3d6a6742d700aaffed29a091c7",
"assets/assets/image/mercimek.png": "8122435b8f9691477827d6dc319e6e9c",
"assets/assets/image/meyve-suyu.png": "00861ab8d517439e231b92e6b7ac824c",
"assets/assets/image/pasta.png": "25e40ac48d92754ab741433a798db158",
"assets/assets/image/patates.png": "d9504d1396b8f0d8ca93006aa84eacdd",
"assets/assets/image/patatesli-borek.png": "5a678fbedfbcf3367393892232e86f8b",
"assets/assets/image/patlicanli-borek.png": "56092a521c86e676e9da4914603cec3e",
"assets/assets/image/pirinc.png": "88b8093022f834fa2860b880a99c8a0d",
"assets/assets/image/profiterol.png": "76acc5349b6ddb03e57ffdc68bc86a81",
"assets/assets/image/salgam-suyu.png": "20ae332096047ec6d9386bdec2a02ecc",
"assets/assets/image/sarma.png": "672d924c8f6aac412feaa72120f3dff5",
"assets/assets/image/sebzeli-pizza.png": "2b86748c68bd209145a8b80ad8b4f6e6",
"assets/assets/image/sekerpare.png": "35c0a3933707f0fcb703f93f97d31f36",
"assets/assets/image/sigara-borek.png": "d30c2ec3efba4b051523794150597783",
"assets/assets/image/sobiyet.png": "0d8148f671754373fd675ac5a128dc43",
"assets/assets/image/soguk-cay.png": "1da34ffb159bd721a60283016723d9ef",
"assets/assets/image/sosisli-pizza.png": "19c7f3d8441fe325d31ee660b5fae471",
"assets/assets/image/su-borek.png": "97d97b069efc8b7d52313f241f94a571",
"assets/assets/image/sucuklu-pizza.png": "328efd32d5bdf55ba35d2e9e5371227c",
"assets/assets/image/sufle.png": "dd6633bc38605c71efdc8c27da9ffad8",
"assets/assets/image/supangle.png": "5b5a0911d01f4ca7f30b9fc22acb1ac8",
"assets/assets/image/sutlac.png": "72fd7c17aece3b542c1ea6db8ebee22c",
"assets/assets/image/tarhana.png": "7430d8599231169b0ceaeb16f80bdd2f",
"assets/assets/image/tavuk-doner-ekmek.png": "0cecc899da9d44452603ebb1338ab384",
"assets/assets/image/tavukburger.png": "e2ed250206688cd4cf3f1afbb651d5cf",
"assets/assets/image/tavuklu-pizza.png": "0ae077c1a418dc4f988ab62331190668",
"assets/assets/image/tavuk_durum.png": "9a0a21ab8cc0b4fd4f930cbdb3612d45",
"assets/assets/image/ton-balikli-pizza.png": "9c604fe32ccf4f1ca286ceced0d73d1f",
"assets/assets/image/urfa.png": "032979a27c341a7db898f0546e2e04e1",
"assets/assets/image/waffle.png": "441d3ef715f0c4f6b34d5ab3b03d5775",
"assets/assets/image/yayla.png": "f084a0b439a51b97ba172f4f29186cec",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cadana.png": "df74923195443e0ad051c0aa0a19de2b",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cayran.png": "f942ecf9e4a1f1cde1113fab03fef86b",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cbaklava.png": "70e5859f7746aa57abe75b3e04565e37",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cbeyti.png": "e3ec99c72aac0091d5c1ec9edf93f0ff",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cbulgur.png": "07e544aeca2ccf707ff927adc515be73",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ccag-kebap.png": "ea7763050e5e2c552a92eb2563706c83",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ccheeseburger.png": "1ba1522c36f6c80525e1cf59cf8b4971",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cdomates.png": "1b8bd76f280369c4ba925c2b6ed37a2b",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cdurum-et.png": "865bd18535a2b069a1956b5dffe6fb69",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cet-doner-ekmek.png": "d2d09b292238ee735de387bf57903b55",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cetli-pizza.png": "23c9d6410d3619935fa13526ce3fd33b",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cezogelin.png": "208a71255a96536b92d51a28cf83c271",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cgazoz.png": "7b23335f4048de7f1e4e2c08016aa90d",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cgul-borek.png": "fdc4304b32cba2498add4714f54dd711",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ciskembe.png": "216a630b65d35677029e0f5c01105928",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ciskender.png": "7ededc7cd50aef8d757ed487955272f6",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cizgaraburger.png": "61560aa598c67630104c3488117d2afc",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckarisik-pide.png": "a1d6bea425805c0bcd89de8c5a488c1e",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckarisik-pizza.png": "0a74fa1337fb4ca58328e3d23fc9ac10",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckasarli-pide.png": "899fe36b24048c0dc4e373e65e383216",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckellepaca.png": "791344b9fb9c25e32f7e5f2053b2bded",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckiymali-borek.png": "80e3f4cf02b7af2acbf57555a62e125e",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckiymali-pide.png": "cc833a270ea40b7b086fcfd852778d49",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckofteburger.png": "6e9dca18a69bd096e6e7a4532fb503e1",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckol-borek.png": "5b982b1d70cdcbb19195c72113e91585",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckola.png": "c84eadce1e9d3d2204204f5f196255fb",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckurt-borek.png": "0e099f6d9045ccf5002aaa3ef04147db",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ckusbasili-pide.png": "470a227be2911c41b4bccd6ee8a9b028",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Climonata.png": "1a467d3fcd96daa1e9470acdd92ab9ee",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cmantarli-pizza.png": "666e3e73d485d8da44d0a59af00edca6",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cmanti.png": "ba0a8b3d6a6742d700aaffed29a091c7",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cmercimek.png": "8122435b8f9691477827d6dc319e6e9c",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cmeyve-suyu.png": "00861ab8d517439e231b92e6b7ac824c",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cpasta.png": "25e40ac48d92754ab741433a798db158",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cpatates.png": "d9504d1396b8f0d8ca93006aa84eacdd",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cpatatesli-borek.png": "5a678fbedfbcf3367393892232e86f8b",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cpatlicanli-borek.png": "56092a521c86e676e9da4914603cec3e",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cpirinc.png": "88b8093022f834fa2860b880a99c8a0d",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cprofiterol.png": "76acc5349b6ddb03e57ffdc68bc86a81",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csalgam-suyu.png": "20ae332096047ec6d9386bdec2a02ecc",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csarma.png": "672d924c8f6aac412feaa72120f3dff5",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csebzeli-pizza.png": "2b86748c68bd209145a8b80ad8b4f6e6",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csekerpare.png": "35c0a3933707f0fcb703f93f97d31f36",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csigara-borek.png": "d30c2ec3efba4b051523794150597783",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csobiyet.png": "0d8148f671754373fd675ac5a128dc43",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csoguk-cay.png": "1da34ffb159bd721a60283016723d9ef",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csosisli-pizza.png": "19c7f3d8441fe325d31ee660b5fae471",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csu-borek.png": "97d97b069efc8b7d52313f241f94a571",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csucuklu-pizza.png": "328efd32d5bdf55ba35d2e9e5371227c",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csufle.png": "dd6633bc38605c71efdc8c27da9ffad8",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csupangle.png": "5b5a0911d01f4ca7f30b9fc22acb1ac8",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Csutlac.png": "72fd7c17aece3b542c1ea6db8ebee22c",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ctarhana.png": "7430d8599231169b0ceaeb16f80bdd2f",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ctavuk-doner-ekmek.png": "0cecc899da9d44452603ebb1338ab384",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ctavukburger.png": "e2ed250206688cd4cf3f1afbb651d5cf",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ctavuklu-pizza.png": "0ae077c1a418dc4f988ab62331190668",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Ctavuk_durum.png": "9a0a21ab8cc0b4fd4f930cbdb3612d45",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cton-balikli-pizza.png": "9c604fe32ccf4f1ca286ceced0d73d1f",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Curfa.png": "032979a27c341a7db898f0546e2e04e1",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cwaffle.png": "441d3ef715f0c4f6b34d5ab3b03d5775",
"assets/C%253A%255Csrc%255Cprojects%255Cmobil_app%255Cassets%255Cimage%255Cyayla.png": "f084a0b439a51b97ba172f4f29186cec",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0e85b23216cfc093d675ea191aeda578",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "194dde48aa5c57ba0b450804ac85f860",
"/": "194dde48aa5c57ba0b450804ac85f860",
"main.dart.js": "a3ee6e8d64d355cdff045c2201d1f989",
"manifest.json": "e57e6f455d6377315674c5e50f1f9373",
"version.json": "5c851e28b41686c7be33ab7b76fae177"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
