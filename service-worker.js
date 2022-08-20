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
    "revision": "e604a7975dfc47fe46b81bc5e41fb7cb"
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
    "url": "assets/js/12.c4a2f7ea.js",
    "revision": "ca0367152de14ef4492e4a90dd62dbe2"
  },
  {
    "url": "assets/js/13.d3059b5b.js",
    "revision": "e6f24b5c2efd47346c6c52e9a6d160a6"
  },
  {
    "url": "assets/js/14.aab3276d.js",
    "revision": "58e4964a4e22e7429578d8dcdcf8746f"
  },
  {
    "url": "assets/js/15.9f4939e9.js",
    "revision": "1cf5487735c306f1be0d13126e63c689"
  },
  {
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
  },
  {
    "url": "assets/js/17.ea2fffa9.js",
    "revision": "23a16002a25969a14bdd8f81fbaa28c4"
  },
  {
    "url": "assets/js/18.bf37913f.js",
    "revision": "c4eb1f7d208b53c30bd139d83ffadd08"
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
    "url": "assets/js/app.65619e17.js",
    "revision": "f1b67035bb5a825be75ee8c4be48a00b"
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
    "revision": "0d2f3521e167bfde40548575be5ee972"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8e84110fd813fe018840eb64ce8a2ca7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fb4a6778f07c2bf4bd102502e8bf76e1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a667714d99a28d17d98fdc77a7f436cd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "25ffc03611d4400fe54136ca35592aa5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b80bb1a351fdc3517b45d607a33aef4f"
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
    "revision": "dfeee8eddce37b93395914e221867146"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "341111a42e049b6484358e37d69beffa"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "23a9b2ee652f37d15497da26ad96450c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7cc9fc785e38677db257ee67d1a5547c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "274280fe3de497f794df3a5d4a502c38"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "909b2be5dcdb6a72036c29e3884cda84"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e4c7fdf87fe740fe56a8ba0f13b5b313"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9af1d4c8a4b38c9cc8f88e1419a694a8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "81697f794c600ce34288e1a5816b915d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5a66e01060a966a36fe60e12f9290759"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "883b7aecbedcaed727e5b50461e9258d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1c8128c5c2829dfa127d82b160686fd3"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2ed630000bcc0de9835c5319ff45fb7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "3e11ceee1b2b6760765f37909c92c849"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0ddab0b923a9db3fa0ae0a97e7bf7aee"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c800ea74996eccb5c38fe422e95ceb7a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "41ef1aee41f5bfc4166031ad786aa905"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1a8a8f3c30083a45e11ae9fc3f926101"
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
