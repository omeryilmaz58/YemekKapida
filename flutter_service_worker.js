'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f83ebd375439d99073c7dd32a67cce61",
".git/config": "e2220690632c6f84b18b9974affd7404",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4e43398d702ea1a598d87a377781186a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "a7a50ebdd1d5010a2dfefc654719ba51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5bfc34f980c49949aec77170180bb472",
".git/logs/refs/heads/master": "76e44dc55d183b1b40d8ac4cc8ec6310",
".git/logs/refs/remotes/origin/master": "82ec69e6ef0769f4fd1f17e69ec8c30f",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/06/c891849cffc1499737bb5bcf03b5585e25b440": "10b0e3d2367cecbdbae988418e36714e",
".git/objects/08/8e01daee21bf041117a47aa9314d7b9e42c841": "3fd06ebe41c463df530abe8a683fe6e8",
".git/objects/09/903c4be6d94c130b6f1cb983d8eb3e8176c0e4": "335cefa7d5497abfd9114f0f98a44008",
".git/objects/09/e17a04c94263187e1f28caad64690312dfcf70": "f364e0c53a45d5af12abff91f7dcf7f1",
".git/objects/0c/0f0b7968aeefc5c396100e83cae51935c4e4b9": "219e2c8d674a8f97a4f13b79c98c1702",
".git/objects/0c/bfc326af3b9bb7c130355adcd8a38d45d6ea69": "266ec85ef6f5cfc83b55fbdff841c0a5",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/d3b31b45f64422982dc9ff8969e0c1163de3dc": "bd554d26b2ba3e2dd5730929a453b44f",
".git/objects/13/4c8e0151439843ddd93b8992f548e75f633189": "58a88f656f1c630fa03f33b0ece29bff",
".git/objects/13/ed2ed86f8e925b42a7887155ba827def1e5a35": "56238308612f8f46c27be109b6fe8c9e",
".git/objects/18/a0de8f6521a017cd7b4be7dbdf33515774b6bc": "8c977ef6870b655d063c4e60c3a452d2",
".git/objects/18/a22cb6f91dd82c901354dcf3fc84ae30ccad76": "66fa088f6aac6343473cc05735c07abe",
".git/objects/20/4a843b2858bc707fb468f4e718f40ddf3db20a": "38c4834807ce94a5ae9c3b00a083a094",
".git/objects/22/cd29ce82d7ef28b724be04797850ac4b076146": "4a3b4e516e477d6fdc840f10c7571d46",
".git/objects/25/805223aa930343607ab816f05eee70dc54f9ab": "1321a6018c9cda5559276c32356b1fb0",
".git/objects/2a/8f7f2110bb5a16c3220e52a01c71374fd1c4df": "d15b3ded3c0429b552aa9eb0e4415b6d",
".git/objects/2b/7b5a44f05c90090aa4c3ad4bd92b9dca723389": "176e41bab7076af78044d74307a792ad",
".git/objects/2c/b38fe7bf84e8fcaa1ebfb0fcdff44fdc2e8eec": "b15a7b4c9fd5baacb4bd8c09b8d4f921",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/8e4b52cf01a912ad8aa3855a4fda67a13eb8e7": "ed23adb05609ed2f7588cd234aebd166",
".git/objects/2d/c9c821fa1d48c9096ebd1cfaedfc248ce815ca": "aa2f336716e969b51a5e011992e15998",
".git/objects/2f/1aae4e7042c6cdfc1469f19f23210f65e41ac3": "40b83aeed45ddcffbec5decb53ca0b52",
".git/objects/33/5050b2faef2e3d9d4f8669ddf11f44f52b828d": "1f06a41a461d1323746e5e135cd61202",
".git/objects/33/5d9b81ec17c5276c1884e9355fe73024a8ecc3": "1c78da6b4ae348b420a6193d594ca43d",
".git/objects/34/7f84823cefd2658f0ed32a8c1c04215a9ca599": "9cad44a5312ce9fdb5b7e19aab720d7e",
".git/objects/36/a353a6db4b33d74e0a6260ef97aa5e2ae8b280": "78be756f5aed5dc75afb4b04d941099f",
".git/objects/37/37bd5b98aea457106182dbe341ba20d2cd9367": "7683b3163fde9b4ac33c514ad212855f",
".git/objects/37/6d5fc1a2ce9677690ae28fc602fa86d9c9342f": "0368e71e3ef706103c2a46f388e11e41",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/9daad18aad5b022f13634ce91238535a54ddd2": "18f4cbe068a643d93d7c8438801bead8",
".git/objects/3e/333473e0788026c8594477fe14a9a39d2a5f4a": "ac5744af23b9ed09a4410be1a256a4b9",
".git/objects/40/df97a4e75b1d81d08b34db43dde3ab43cf57fd": "8b685160caf2e35f05e2a10df0912d80",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/302a2fa2588ed4be1300cff125d26669c757cb": "1d4cfd6139f4265eb862ed20fba006d3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7ffc3d202bcacf53228a975f679a7eaa85f5d7": "b4965fe7651ce899e42ecb4ae2a24ce0",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/d6937e979b66b80039750f48120c8792db04b8": "595414cc0c8f9c9cecab316bd4d46439",
".git/objects/4e/fea7075d61e028db568f04dea30e47b78f76fb": "92d7cb76c1cbc67b96582c3f488740a8",
".git/objects/50/2c5853666c05301d6f55be2a77aa08b24c282d": "eb6f6a6a3ff017d6a07edc7a33bd7f82",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/bb744f01ff36b451710c372710ba27f43659c7": "54f71f98576ee67106276c88f8bac52e",
".git/objects/56/f140b58eaaadc52aa575a0b8f90ffb45e970aa": "5fb896f9cb057b6e1b3036f017a85a75",
".git/objects/59/9b16cda55d33ba280b2ca3916ed2368acd7fab": "96e9934fb8af4e1f0c4f9fda0b178f21",
".git/objects/5a/13d62a0419d0fe4e75d40c1cb5bcd3e1d73ebb": "689894eb6483f3d769f65f2531d0d13f",
".git/objects/5c/562cfb63b88e9e9e76d69ce73c7853c1297401": "96b22f1e532c916734924f9cf7f432b0",
".git/objects/62/5e564ce551b61300b407b0be65d1ca41bb8f2f": "2483c8a3bd0a44e58e5e253084e588ba",
".git/objects/63/8da07e763f4aa04dc7e4b77893d533c3ea89d1": "f46d5248d68484006dcfd177e846ce01",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/66/87d70bb104cd1f5a1a3fd1bbfb2a80aa08dfb7": "fa85b528c605947cdd6f595331b19429",
".git/objects/67/61b0ecc7c8bd7d76fb2aa39feffc80b12c9004": "daa2dbf7589c7f56dab99a1e8ec5460e",
".git/objects/69/216d1ad4ff6f4f96cbd95700dcf10da17816d4": "1c82e72ddb5ccdf936f14fb2577ae5e7",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/e41dcf5c742a6c1d20205ab75fd8aab3397d51": "fb331751f118d69fe43fb5b2f8386f7a",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/72/5cba960378e2d85d7bfaabd433696faa1c7fc2": "a407c2501e65789d5ef29f2c2ab834cb",
".git/objects/72/6e23938f51560a7a2b52a0ce023f43bf6ec06d": "ce4cf29a9adb74908990e1276d885189",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/50173909b5a61eac5b3e84ec505f9f64f165c7": "f3b016948d197b07d05df3c38d885289",
".git/objects/76/dd9d0f594bfc6a81347271576c5d4f38ff6b07": "d84cd5f20c99bf7dfe579dadd5f89b56",
".git/objects/76/f52d4413d24b9a53af091f1fcf9c3cc60a37fd": "b9d03b79addaf99200a34eb9ef5b805a",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/79/5e927d387ed15c7e8c9b4b57d50c2cbb94da26": "1bf8ca7aa198df5a7f6f5abe63eb4393",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/cb4e83496770677b0555765b295b8a9bb17fe2": "1a6480bf5a6a15bc5f9a7b875f12f374",
".git/objects/7e/73ab267b6ae81abfe0d2ca7bf9cab5472a8c4a": "64e07b1169cdd824af07f1a7305015c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1a43f309588f0cdd52fbc7959b58d66ffa6016": "6e6661c05d0d500eff086439bbedbed5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/efe9e58cbafd605e85f04adbec8b5ef85615b8": "c64fb4f591c4f22f87b01ab43c09f1e5",
".git/objects/95/ae2e3d2c41ef9de3e1faddf2453d2aeda290d5": "1b0b2646ca8b29bc545ad2d0b46d3c0f",
".git/objects/97/2dc9d4c75e0954ddb30c3b1bb9ec25642b5c5c": "4da06e434ed56689f608343fdfe415f0",
".git/objects/9e/3f9bcc43fdfd026174635ebe9244b6fdcc5590": "f0c45e8ac7f255fef1300a88c6867cc1",
".git/objects/a0/d4e062a031ac68b8280e541edc5d1eadb3e28c": "759dae8a5069f916d29d334f83aab2f2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/acdbddaecea0843d3a5f78125bd2f197bfce11": "63f097007f301eeb8a2cae0cae3bfcdc",
".git/objects/a4/cf72b83ca65eb5647fa9487059a584ce1f7426": "71e64b153e892f5a260c6ed36850810e",
".git/objects/aa/27e12d044a37f653492ada5967f98a34da0fa8": "6c2c742049785f0dd5294588d0b79fe8",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/82d4d1a9daa7cdf6666cec8cc23419d33a5fa6": "8b64c6d467a883860366fdecc2c22b21",
".git/objects/ac/ba4851f450a3be91fe71f4630e0347d5443dd7": "9ba4e033697ce6b8b7d4c2447521a065",
".git/objects/b0/305f57979bd22026cf4027d20d5a49dd3833ee": "ab94fda148b46d63e1a90c38274c3dac",
".git/objects/b7/2d4c42822e07f5198971acf4ee01fd8f0beb6e": "be62101b8cbe2389dcc546709a07b155",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/67e1339c5104d4851bc550e0acc0588c722102": "6c24a1a111025f782b612a9b5a5b4f0a",
".git/objects/bd/5d317ed806fd7dc85950435267fec77f912b28": "e7bb2143672abe8fd4c8c12be7f420f8",
".git/objects/bd/f7a537e61f1bc60855e5a64bcd2dfc6fbf4508": "316b9f23d5c861ebfffbc991fce66f48",
".git/objects/be/9b62fe962affd51429753d53a8ac3d3e38ff56": "8118acbc7d5ce08b7762ad90fdcb75b1",
".git/objects/c0/8a39c6daff4238c15db21a7e45ad564feee989": "07f71f06435e2336674a7d6d1a6eafc9",
".git/objects/c1/07df50a4a859aaa2b503e1b0ff8934f64004b9": "7da4ffc1fbd11e03cc61eea85a7e5367",
".git/objects/c1/eed35a619b05589dbf33ea8dc791cfbee9b206": "9c72862119ea8fb381c1f0fa76846453",
".git/objects/c2/abb80b23351093dae390edaa4afa3385f78392": "5071d963e9177924820422abecb18cfb",
".git/objects/c3/237320b2fadfd995ff2a3bca08d143df1c9e61": "f1a3bbfd010b9242e6e1379ad0e54d14",
".git/objects/c3/de9f653eee092a8395f4945784624d47bf24d5": "209210f12ce0f1f11b665134308bc9dd",
".git/objects/c4/7b1e715e9409e8d27f19a29ade53842ced703c": "c5104ea22a6c7c426c3e845d39e96f54",
".git/objects/c4/eb445a8c0e991a9fa2aad69e0672ac74238eb4": "e12eddf574e5552769de818cc75de369",
".git/objects/c5/f41fd84d505fff67f3c922b39026396a95c533": "a57bbd22af8bdb305ae2285694593e67",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cd/1b1be4b84ae1345c12184e54ff8e183248d1f1": "3ea7b1d3ebc73156d8a347f2193c6f66",
".git/objects/cf/4b0add3c794d04ab8f9c151b061df43ee0140b": "33d388918e1ba02370d72466899d18b5",
".git/objects/d0/3428c3aee1da4212920f782d25967118978e17": "9765ce04421f34004fdad81f2ed99229",
".git/objects/d4/84bd4f5ab1267dd1f53c6c0ee58714a023a808": "e14b7c695fd4ba33f71dbe742e3cbf3b",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8e193a298cb814cc6aacf9e6fc05b85e8312fd": "c4a04892518a115103168c2832e050f4",
".git/objects/e0/0b6622b4df44fe115cd8f8db4452e04e4c5c20": "af306187f8b24aa78dfb45d07336a2ad",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e5/6722f7a8c41295d1b6e27e0b55bd8a978d7bf1": "8af5adaccb722a1bf3fd1b16140fcd38",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/e9/e9f28e24db26b354268808c1ebb7777db163db": "354254600e0914c4f4318a628a6dfc53",
".git/objects/ea/579c42475ad3c027760af36e8411bd31a9351a": "6c45ae03e45b9d2307fdb0fbd2152e2d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/f4ee094a84d929b70a27bda27aaddad438e77c": "8702f4d2f32f1bb93f06ee9dcc7cb2d3",
".git/objects/f1/3d064f7a35b02beec1af26000797741162ae28": "56fef5c304c17667ef7b5f938a825086",
".git/objects/f3/a9bd7ae3b230c5d1dea0033d2dd0c3db529fbd": "40642e33b7dd5bbd36baec18814a9a10",
".git/objects/f3/cef095599f8a9fb58f2d8badc69a6ebbbfc815": "24ca49d095d269669a9d54f5512b983e",
".git/objects/f4/03e9c8481c67ccc1317012fef8e1e82a76452a": "a28b759fb45fe0eede7a0d6805e8ee0f",
".git/objects/f5/26ef8eb36aa6cb41149ac42bdcd1173f468ceb": "b48d1e4c928c54e85615c73238d5e2c8",
".git/objects/f8/d4635e160bc69c2a299f15da35d0765ecb2cfb": "99adf2a3fc91b9b4f704c96138f14df0",
".git/objects/f9/cd191161aa0fe01809c228284511267d37a6e2": "2f35ae5d1c45b6c950da99dcf316b69d",
".git/objects/fa/c3dc063815c65756f6295a853f742de2abfe2d": "1c3a278818a146a6536388f77a6c947a",
".git/objects/ff/5eb2928f4a20ba8bfd6228b8ba57c6db1129c2": "530a236bf558216b8c5525237197e680",
".git/ORIG_HEAD": "c7f8eb39377733917c878313cdac7837",
".git/refs/heads/master": "c0dce8956a6be52c897bbc332af89f86",
".git/refs/remotes/origin/master": "c0dce8956a6be52c897bbc332af89f86",
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
"index.html": "82390f658c01413f2ed94268db114db5",
"/": "82390f658c01413f2ed94268db114db5",
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
