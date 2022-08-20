/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ba32453e83cef8264d05d4b790553e7a"
  },
  {
    "url": "assets/css/0.styles.e74664de.css",
    "revision": "4b27ab13be9da443dbe3539610d448df"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.87fb036a.js",
    "revision": "e1b8f061a33588a0a39ba825fd8311ee"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
  },
  {
    "url": "assets/js/15.a975046b.js",
    "revision": "714b13b4f0cf84904e7153799f78c49e"
  },
  {
    "url": "assets/js/16.86c34caa.js",
    "revision": "4f001832c1dcab7779e16712ad73048c"
  },
  {
    "url": "assets/js/17.56d1af05.js",
    "revision": "622d6936320aaae2051c5c39e4dfec05"
  },
  {
    "url": "assets/js/18.54f12e55.js",
    "revision": "0d28aa7b2977ece511f2b2193ad79b44"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.ac7cf4a7.js",
    "revision": "c607aadcee7574cc855980db3cee37b5"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "1b9fc49ab5b9a6801f8492025db972cf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "cf8fecf75b7078aa06d881d17e5e0e39"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "dc7a73a31ee7815803e89cbf6a16cc47"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f55ebf1318e20cfddcc1bb8ec96ebe9f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a6f6abb30b939a5af8366a40f99687e3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a7529c9484308e6dd9f802c2c18f5ec1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "86e29c93013f16356c0773bbc0f4d22c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4f86ef3dc7495641c8d46a7c72b4825d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b3e084b43072957224a0382851298462"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ec6d1f238554325d4b456336fba656d2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5e04345a186cc50774b577e256518c9e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "66f5a5617b94fc0b3dbb4a1f5728dc9b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1418187678d736fc94c71e930e55269d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "443e76490ea9f7ef69df6c180f80542a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2eb819f98a66d76450d1926c34c106e7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "92d664ec9e92aebfd40cdd4f748f16ee"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "23eee6b25f80ebb8c864c54bda695575"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cb501ecec16374aa470f15cedecc9c8b"
  },
  {
    "url": "timeline/index.html",
    "revision": "2389571755854fdc5140673b4a9052e7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "fafa4cd2838f9e683096caa280a02a99"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1c5f185cc1de876c7fbef5e42379e13c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4140c55416dd75613769a8d9c48da80e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1f0b197e8a83a87fc69cc292e23c6ed5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bc82ee21407164a340786957aa54e3d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
