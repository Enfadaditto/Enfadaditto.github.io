'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8ccb90e517a6e69b174780b26c838b3b",
".git/config": "64eba6d1844bd59d67a178b176a27ba3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "adec98076b7d07ab44e79e3f69d5e87f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "2d1531bca6004a681a831380366ec74d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41007e0e6aba5da5d4897e066ebcaa8f",
".git/logs/refs/heads/master": "bd41bfe18c9aea1778c53f072386e678",
".git/logs/refs/remotes/origin/master": "f3766491e50783450456a8bc9653dbc2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/ad1fdf02610057e35e0287a2417987e7e6e2bc": "1e2d09d2686d8f6f7806a6f7a091a79f",
".git/objects/07/9d8c0fd07b9e2f6590a73bc6f0eb238be93a4e": "724d650f5890637c5c3a0d95dee7569c",
".git/objects/08/1c3d37448fb5340e15d53632f0d22a0fe9b692": "249cf7ac39424de5d6f4adfc117fe302",
".git/objects/08/ad5d276b63fc0b3ac5822b91483ace1d475671": "31fb7f937ae53a80c98bd73d0a5fe67a",
".git/objects/0a/9f26875b3171e61a980f582c1607d4d232f32a": "830e2970e2420f1d52a510f58fd23042",
".git/objects/10/0ab9937a88d83a6b98910f22a1c531fcbaf7c8": "c746f440e5dcf802b7b290a7ba52af12",
".git/objects/16/eeec2ebf1e7029e383ea58a1a5cea99de70df9": "cbba5250d1a5e76bf5b1425277a681eb",
".git/objects/1a/7ec371308d3eff235ccfada4eef9e08c7fcf74": "e08a9f6acbf1311f3116f7058db4fa6c",
".git/objects/1b/c8b55d26beda9d2e2faa3cf288a5008097a44e": "3795c9197566c832e67d90333ec7f12d",
".git/objects/1f/eefc35f16ec6f7f85f8f03c3b2682102c49dc5": "08d9f4a74eca32ee17218bb2e6aaad3c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/9d830a66caec50d840c017ff34b5a1ab6e4b66": "50681b78a73bf04f6aab0bcfa400bca8",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/24/c75c2dd60f270dd6fafb08976376d9ae4ca5ec": "1adc64d842c47e4ec48b861a02e5a177",
".git/objects/26/66577198ebe70ac5805c4962c7fb1560d62239": "499c64701d5eaf0577ab46990c16fc44",
".git/objects/27/49828881574e877742d48a01ce31ca9a79126f": "b1f158d3b9ca2cb9657376a5989dd43c",
".git/objects/28/b39119e01959790424e4227a5b0000672d3e95": "a329eb52bfb2a923bda33fcfdf455ebc",
".git/objects/2b/a986f6f136f061ad7c345c47245788068e9218": "591c2ae0f2d54d8c6b9d59906e57581d",
".git/objects/2c/fdb542f45ccc8ba0b00e8cc06adc475b63f6ba": "c36347fde246f3562158dcaf9689f121",
".git/objects/2e/e6b2687b2551c5eead03badbf21c81fcf88305": "73a20daeda974ec080aa8d6e14db5360",
".git/objects/31/a1b60d1e5f89020b2563f2b32e4757891424bf": "8537021ebabc9af5f39eee4356c4c927",
".git/objects/34/ad0a58e5317e3d92e9519b858038c47a60e4e2": "6ae824ebfb51d1a75dcd2793df15434c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/a211e57bcf23f5830d0ddb64319978cf69c3e3": "04af98021a7d0d4e571dd068c58ebc11",
".git/objects/3f/a12b1939234bb9184604e1c64eb0afba02de2e": "61efdf30c48528ae22dc914696b2843e",
".git/objects/43/bfa2a1f18f2d0c4be8e3f78a21994dd784333f": "1d3bf8d0e7ef39e60a71afe4e35ecd84",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/85a9e003d7ed34ec92c8e1e558dddae09c99cc": "c3365f83e3c472de1272472eb9e49e23",
".git/objects/45/b5b1eb73a53186dc507dfd95afaf5874ec5051": "75f8eeb899482a12352f4d43fde923e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/be06bd0fd5f2aa1c23be9fd5a8dee4ff11c31b": "170d2bb722330cb69558db010369f785",
".git/objects/4d/c14fa75c7aa875c1b3a81e8650e876c816c7f9": "c621cabeab720caafe14731d77e23718",
".git/objects/4d/d89b799c79bfe962c8956d009df9176a306b8e": "d9fdd5d7c8f56ed413b2a90ab7d2f144",
".git/objects/4f/2ca1b8ab47ad6b3c9219918eeb05ecceb079db": "fe66518c30ba46b51bc13542994cf527",
".git/objects/4f/ffd8c2f7eaa81ef6bac745ac0be78c85279c4d": "00c5b4576514cc4a069a7b45fd13b8b0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/256242e958e02c76c762d1fcb54be2bc33e64f": "cd970727b5b4c136b36578f1294bfe10",
".git/objects/54/363419b4d71102dbc0599f53c9712d38649bca": "4bb21d34767e694579e00059eeee15c3",
".git/objects/58/b3691f0e95be01a9efd63afb881676c9ddab1d": "53b8bac4e58965888b03f8b7353f2e4b",
".git/objects/5b/3432e2bfa22a04d240e1e961e971774999c18b": "a445f11e5f7131474fe19244d5dbb06e",
".git/objects/5d/c142ea13e8a3f831127d7bf1534f662ef772fa": "6b8d35858bd3ec1fd16294fbd899445c",
".git/objects/5f/38f3df986d1796e01e058656aac1a469e45c6c": "0f8e37d4c5ae6194c71bf86f26eeb33e",
".git/objects/60/eaf711ac25752950a6504987ac876814d16990": "4a7734f877e96e8378fe435135f3ad56",
".git/objects/6b/cb14981ba54c337b019622beabdc2990d52b1f": "daab7770fee5f6663b55645cdd9e1f1f",
".git/objects/6b/d89f56e13e700977b5a77cf5ce26c97c1b1177": "ebcf3d4ade8d19142d20c1ac49c8a82f",
".git/objects/6c/d5e83195f1f362e50e5ebce671d33ad535d389": "25752731dbac3462e9b6e0698e548b68",
".git/objects/6e/3fca50053b848f9d5ebacb068f4917e0cee318": "0b6d1463ed53969cf311dea7a1923657",
".git/objects/73/0aeb8047360d7069d675ab6fcf7f6268225d76": "66de4fccdd750ac3e11f5651058322ba",
".git/objects/79/815b0a39eb5c2799c6a6905f86fc0fdc4e96ca": "176cd36572cba8351276a3785f8bb315",
".git/objects/7e/2adfe5edce73f5291641dcf9e7c3a25c98311f": "ae3ba9edab83d9b543d9f903f677075d",
".git/objects/80/202073917bcbb8ec7cb9743227c032108f9722": "a9d028a18280d87e88daf844f7251452",
".git/objects/82/667d22003cbe29a44e001676ceaa44b3b93215": "348a7e7c88daea1ade3933c98a1b4e9c",
".git/objects/83/068eaa844ff1dae7616b3e2e1e848a1e91c27d": "a8931dae7f27e9cafc9cc3a17ab91c25",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/f90cd636105500434427d385ee99272bbf6079": "466342fd2bb4465a893765661e23982e",
".git/objects/8c/01ddd5e1453c5eaf9b9775911457435c604d68": "b829053b5fc92c197bb09fea472efe1f",
".git/objects/8d/8033a80580ed78ed83ff954bfd650e6249356e": "62a78c10e892e3801a85be9024accd8a",
".git/objects/8f/62cf9ec2d8fac93aaa9d3684f6dd8810ff7e4a": "fdaa21a80f58a72f496a47a420ae3478",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/046e4dd6b98fbfc8666b7f8f94c90c8601a188": "fee4cb7b69e75a5a2ad1f987c20cf92b",
".git/objects/90/a9839d77f6c6386da9133885718f0bf44b39d2": "fa175536214182fe232697bc75c34560",
".git/objects/91/335956579b0d610b4fb4f07d897fcfb8e9f8bb": "3ac01d492d018ad366435a9aabc152a2",
".git/objects/93/3adfedc861bb883fa24639507896554c2b01d4": "badbd891e8bbf890a04233e26616a1be",
".git/objects/9d/3711f04c0a4b78df9bab6169170d2f2ca09793": "8c7ab5a861908e6c37d91ae051decc26",
".git/objects/9e/0e1de62b9b869ed3ca05f0eb4758237ffe8ed4": "a21dd48339be37ffaffe93b83fc5ae78",
".git/objects/9f/060d4d9dfbdfa43e16b4cc95a31afa3c4c2329": "f092de11a6c8569fe652d2301a80b746",
".git/objects/9f/8420b1519b43fc7b4550c891d4185dc76a4976": "47cf9753e9a5e399f88764ef06c3eb0d",
".git/objects/a0/13682205d81f1623782cd069b7f2ea60a31f88": "23739bfd549113e4a78a3252ae8dc5da",
".git/objects/a1/b59313fb9c81a7370929abe46af3329e04ccad": "5ff8d188ee68047720c97e08f7c9a52d",
".git/objects/a3/70b00eb76f82e0255fdd5d2ba0431faa80600f": "6d4db66969752be6e4fcefd3df0cbb2b",
".git/objects/a3/df32917e3a2dfe821703bfa7c47c53ce5dd3a8": "c326dafbdddbb360cbf47dfb717a9ed0",
".git/objects/a7/fbfe4d36c567472f867e76fffffc67a8999b7e": "02d83eeb49d41d83d2285d4c8322de6e",
".git/objects/ae/892420cc085e37cdee44d3637ae0395843caa9": "6c180e870698f3dc949c333c550f3caa",
".git/objects/af/12172b9fa45f4c5ad22bddd1981db8524fdc87": "8bebd7d5c8a4748705d02b4bdd73fede",
".git/objects/b5/69bbc800483025d8ddfca8717a5394a79369c8": "03fc5fb8d1476a7bf95ba2360605335d",
".git/objects/b7/30515e0c208cc4d44c6a111b5ef36cce7cb75d": "f82b6020b0df23c0c02b920e149c90e4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/799fbd8854ead08a3d41cc8d5bb8bf4dbd3667": "c37d4adafa0d368d105f2224bc47d7a5",
".git/objects/b7/8e6238897884c33586f234db9c65ad44767a9b": "607df608e5c3ebba2567315b65622463",
".git/objects/b8/bd729cf6171f18d087adea3ef44bfecc8a543b": "8e0422eb3b009d1a4af2afff7791629f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/adba42a735c841f4241fe8b9246adddb474ad7": "88f44e6e7c7f2020ca2da3021b977069",
".git/objects/bb/0738032a4985c214111b17e4755e35ff54a42e": "75dc4e8a38c7021d2dd897e4be150895",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/2a7f7f88d3c7e2ed5abd6ae55d1193ece438a6": "97465d80ba8a88c6ffcb1f3ea1bb0c36",
".git/objects/bc/af6a9adbd8b2c33de5890501c884474a026db9": "8ba678c5b407967565615e108c1c6631",
".git/objects/c0/7168fa94eade0e0ca50cd947abcfdc472637cf": "4456439b6e91aeea29300f2cbf069e9f",
".git/objects/c0/77e39a6df45baf76c018370e1c2809bf8da735": "2bf837c355e4fa592434ea2cba9de04d",
".git/objects/c5/be6c15afe9ba1cfcd2abd30e34afe4ca5c5b2c": "02d62debd945afa23cc37ec4bea69b60",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c8/5729b82f9f1b769688549d21133a2495671895": "131c25c5896cd84d683e6bdf58352a95",
".git/objects/ca/684e6d6472dde8b68b8005cbde188d8172b903": "f3e0d695d79f953c112908aa2146badb",
".git/objects/d1/3f524ba25aa714efff49295ec1280d66aeca13": "9600de156837a2f5f699a9ee509079d4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/1fd1356fdd63258a31ac52ce201954eb9edaa8": "b44a7d9ca4d59e1ef0ec49a8f09f9fe6",
".git/objects/da/4be29b810a7d7caefde3f8e7ebde3e68ca4c8d": "f2ab28bcb9745498a42e739ebc41adda",
".git/objects/dc/457099523f6113b74c0ac5c8c875a22b6f5371": "f61b794a08a812f3d986cca895a00e55",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/d45e547e37b910123eb1ed218fe1899dfca3c4": "29505b6fbc8fe9f66aa5da7c53e02855",
".git/objects/e4/55f88c7f61ea3bc3083ae283f695b4f19555a3": "50029e19ab755b73a796827954596ce3",
".git/objects/e6/0499180273bbf2d4b0a397b255559c1e409ca2": "7a316fba9a96e9b70c977f945a56ced2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/3676b66ea3f026ae3b444bfe65154c34fedc42": "896f2467320d9c0a6ac4cfc20135d07e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c82d8b7dccc86834d8490840f22868bec65ddf": "f2838602718b946a41ac58790ce2cadd",
".git/objects/f5/c91d1d6a86377fe1b417df1e15792d8769106f": "65a4e7954c9e0ec1d99979e23582c695",
".git/objects/f6/e916d2c407672ecbd748a16f86b6914cda3985": "5292d19c07c5d27f225db0b2bfa34886",
".git/objects/f7/1eb1edbcbbee63aa7a541e094ab07d001ce467": "c50c9f95a5832f3eab0edac0b0d31b9f",
".git/objects/f7/2ebe5969ef19cf6aca66c22a932aac9c3c9755": "365443d8edd615ca162fffe8426bedde",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/ORIG_HEAD": "f8bcd65420efb3daba495918c1e7bd94",
".git/refs/heads/master": "f8bcd65420efb3daba495918c1e7bd94",
".git/refs/remotes/origin/master": "f8bcd65420efb3daba495918c1e7bd94",
".vscode/launch.json": "8536c0b1b0a5a6da1637feed7ca91d43",
"assets/AssetManifest.bin": "169f007cf45865348fe78c8191601b45",
"assets/AssetManifest.json": "9530757227a6131ca06dc2af5c54707d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/lib/images/finalNeg.jpg": "ac7cc963448cae74724ed6598827a69c",
"assets/lib/images/finalNeut.jpg": "2c3ad954b158bcd7a666c79df430072b",
"assets/lib/images/finalPos.jpg": "96678ade2bb6a4f09bfba63021ced17e",
"assets/lib/images/fondo.png": "40f7ab0bf04a1b0e39e860e12fe67d63",
"assets/lib/images/LogoSample.png": "9530e5d424bd19c80dfd9f9eaa82244c",
"assets/lib/images/sit1.png": "cbcafa8bda00b7f19cc5c457f4120bd2",
"assets/lib/images/sit2.png": "6da2085d63cb42ef25aa9049e976a5a4",
"assets/lib/images/sit3.png": "f13a91e46c869d20277f6ff3dd552f13",
"assets/lib/images/sit4.png": "4b12bc4cc64d61e6beb9740af83310e2",
"assets/lib/images/sit5.png": "72a07750e67c7812ebbe548aefa49aa5",
"assets/lib/images/sit6.png": "ef486123d37606be36cd556b12eaf2ec",
"assets/NOTICES": "4e4592b3ae044e7f44132f194c4728f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/canvaskit.wasm": "6e7859012ffcf1d482a8bbc473b8171f",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "b3fabff5b6c1cb4d4e81f4551eba9ba2",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "4ca73baf420612f1657d5b2be4b7467d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1436ac24ec8b16b98df0bc4681650836",
"/": "1436ac24ec8b16b98df0bc4681650836",
"main.dart.js": "ae0efb0ed4a4479727b8567120153db9",
"manifest.json": "8e5b344d80414fa08cfe607c5a96af35",
"version.json": "0c983fdcfe6e9a99405d18378c44e93f"};
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
