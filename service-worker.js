/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","8ceb2bd1c4ebd2d468ada55c0fe75538"],["/data/en/resources.json","ec10b59fc89f0c403579334b0612d171"],["/data/hoverboard.config.json","c7ddcbb24208667cd29daec97801807c"],["/data/partners.json","798500946963562d699ba69f9192b7c9"],["/data/posts/2016-08-22-valleydevfest-2016-announced.markdown","1ed814f715a3116bb63009068510a18b"],["/data/posts/2016-09-11-eventbrite-and-conference-tee.markdown","3864797c388b2224b64f0856e8eff771"],["/data/posts/code-of-conduct.markdown","01b3e7499d5b261dc1924565046e311a"],["/data/schedule.json","22d8224f8ba3824b6b6e76532a84001d"],["/data/sessions.json","9a093df3e2c7d4a973bf6ed0c5f43634"],["/data/speakers.json","ac2d75582493d2420e72bb8a4e55f9ec"],["/data/team.json","38a69c732f9e29bc84784d6054fbe828"],["/data/tweets.json","d751713988987e9331980363e24189ce"],["/data/videos.json","78fe83e55a5db07e46a3ca8556ed8130"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/gdg-devfest-2015-146.jpg","813fc30b30d59d21ddc22b69a41735a7"],["/images/backgrounds/gdg-devfest-2015-223.jpg","3212e09ca20a637df1eb8d83517be450"],["/images/backgrounds/gdg-devfest-2015-418.jpg","d0d88b972e03e9166a31830482b1aa8c"],["/images/backgrounds/home.png","c80dbf7b78e851e8ecb2905b94747c1f"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_bwss.jpg","ab75bc39cbaefbdac79132fd5d13a419"],["/images/backgrounds/location_donkeykong.jpg","bc24ee3c14e98efcb7208770ffc523b3"],["/images/backgrounds/location_geekwise.jpg","65e6fe59851a5992616260e5e291c2c3"],["/images/backgrounds/location_hall.jpg","c9e8c3abb0cff56a9eae8f105f04d899"],["/images/backgrounds/location_halo.jpg","7c63e17bdc5ec97ebb1644a13ed94474"],["/images/backgrounds/location_simcity.jpg","17f6919e4a0878ca5b098bbb871928b9"],["/images/backgrounds/location_zelda.jpg","d899f08e36710382666196b70fdbcffe"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","41bd5c14b3bdb7bd72f74ad00dde1853"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/GDG_Fresno.svg","67fe0286566971e498725238f4ab21ca"],["/images/logos/GDG_Modesto.svg","1ad9368143c4a299be38d0ee4c6ff660"],["/images/logos/GDG_Oakdale.svg","2ea8a8493cb15f433043826304967fc1"],["/images/logos/GDG_Visalia.svg","d6cf9a8b5be1e2d83619c4aaf5265f91"],["/images/logos/Intel-logo.svg","bbc8a7b267246fe161b716c99e98dc1b"],["/images/logos/bitwise.png","07664bd54a5224927cfd915b2d334c87"],["/images/logos/edit_llc.png","0958253284cbfffaba448cb74292b1da"],["/images/logos/fcc_logo_wordmark.png","1502957b4612f80cf6b987cd7001ef90"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/ideaworks-logo-invert.png","e23b1b285bba43a9236868830b717286"],["/images/logos/stickman_ventures.png","496597d47cb992544cfbcb8fe9a1be05"],["/images/people/ahsen_baig.jpg","482d476cad98b3308a9c5a124e1a9b17"],["/images/people/alec_keyl.jpg","49db9886ba5d9901f02c930e8064b547"],["/images/people/csaba_toth.jpg","441743bdc1135ac51d2a06eaa1104ede"],["/images/people/derek_payton.jpg","b2a7f616521f3c6a4048291387e88db3"],["/images/people/james_duvall.jpg","2d8287435a520b42ddb835ddd6d753c9"],["/images/people/jim_hutton.jpg","52bba20c5da24269d5db710e585d7f7d"],["/images/people/justin_ribeiro.jpg","62d25148425acb3f5233dfff5ff14328"],["/images/people/laura_krake.jpg","c076a02987ef9e7ef760bfb7780b997e"],["/images/people/mark_simonian.jpg","03140142a07d0fec3127cf7c0ef1bef8"],["/images/people/martin_omander.jpg","8542fff25cac23992a272574397389ae"],["/images/people/murat_yener.jpg","ede5914ef8bdcc2128d88ae9e7860f2f"],["/images/people/nancy_mohamed.jpg","18be2bd4af996f7b727423a18f8b6559"],["/images/people/nilay_yener.jpg","0026035b3fdaae39ec84dfde5023da86"],["/images/people/paul_bakaus.jpg","326fd3fca2899132f381f637968963d5"],["/images/people/paul_perrone.jpg","56529f0a7d5777de185db4f84ce40cb4"],["/images/people/rio_waller.jpg","6a068dd3bcc8ab70ab7ab1e86a6c9012"],["/images/people/sandeep_dinesh.jpg","86e69353e9ef75e9f19d98412a59750a"],["/images/people/todd_mcleod.jpg","0bb3419966acb4de65b76e218354d292"],["/images/people/walter_kuppens.jpg","983689d174e14fbe68c5892bd1c545ea"],["/images/posts/e-blast-2016-09-13.png","4672c626a93eb7dbc0d4d00e5936c42f"],["/images/posts/gdg-devfest-2015-6.jpg","26de22f7983bff2bb61e283ab5b2f1b1"],["/images/posts/tee-campaign-2016-09-14.png","806eefa220b6a621531e0d6d2ead485e"],["/images/sessions/101.jpg","71c7734d9095c29bc070e0fdd4528d14"],["/images/sessions/102.jpg","6ac5d81906eda526a025cce493463ccf"],["/images/sessions/103.jpg","9e0cf4dd55bec21b8d44a07a6a0f3e94"],["/images/sessions/104.jpg","09208be4eaa8f825939f5ee17f6409ea"],["/images/sessions/105.jpg","b6f8b3a199802cf832aa4f5316b21845"],["/images/sessions/106.jpg","e594b24186b5fc90e725655238f50b3d"],["/images/sessions/107.jpg","54ce575ba73b475cc301f0f59745c58b"],["/images/social-share.png","424c82948a80dadf276bdd9cb04a271d"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/images/vrview/ic_info_outline_black_24dp.svg","80022862825d5aeebeb723ed70be8037"],["/images/vrview/loading.gif","d272eebff6ed1c0fb38bb4a900363520"],["/index.html","6177c8cbc62aaa0546e2094c64507a90"],["/manifest.json","aa8aac3245e786cbb7cef8ed7a64b1db"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/helper/vrview-analytics.min.js","bf698965c508b87fa847bcd083104393"],["/scripts/helper/vrview.css","f4773175a63b4c56f05e34361824750f"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","51e3b883bd86c9aa28cf5e33055ca5bc"],["/src/elements/animatable-content.html","eefc85f4b367f5276169a1a622c3a2d4"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","71b1b11df31e12edd09f4fb9e3eb1402"],["/src/elements/drawer-block.html","a70fda0a3ce270a807e48c86e838b689"],["/src/elements/featured-people.html","90856919cc72b81a9b49f9e2ee9c3fda"],["/src/elements/featured-videos.html","57ffd3ad56a6a1095ca38b59b550c2e8"],["/src/elements/footer-block.html","84fe3bfa0b7c4e18c8dfef199bbf8b20"],["/src/elements/header-content.html","636dd44903e40ca230608fe3c7ef2e8b"],["/src/elements/latest-posts.html","1a13eafa0f25540df4b25e9fe76ca61a"],["/src/elements/logos-block.html","a1e5aecb2f31635e84dda54d775248e0"],["/src/elements/mailchimp-subscribe.html","fab801882025b1a9d4ef9847f1a6cd27"],["/src/elements/map-block.html","52747c1e96f1679f2fb4e83cbe856331"],["/src/elements/photo-block.html","f80ca07b769ca44e5fef1c6993e026b0"],["/src/elements/schedule-day.html","60d55a17f1a3b3b86d610cf76fb9732c"],["/src/elements/schedule-subnav.html","c26588b3ea009e3ae0a9d9cb3c02ae12"],["/src/elements/session-details.html","4ddeabbff0e5f37e91166c7eb7e0afea"],["/src/elements/social-feed.html","951902689abaa06e47f9e9a3f46723ba"],["/src/elements/social-post.html","5d51d2ff72f4006cff63fbe262bb5aa1"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","8b9758c0ba64ebcd24e2075557bc125e"],["/src/elements/ticket-element.html","b5c71dc01eef4f3e1d3f623746f4f3a7"],["/src/elements/tickets-block.html","7140074da1009b1a44d05b5d220fad66"],["/src/elements/toast-element.html","47ae65f5c8907528a134d3ed6364d417"],["/src/elements/toolbar-block.html","109efa9b21632b57ca82a360062d5281"],["/src/elements/truncate-marked-text.html","f8b933d872155a7d75dc34ed5d9c951b"],["/src/elements/video-dialog.html","b09a93f3121f8b394f8b5476afbc5e77"],["/src/elements/vr-view.html","d6c054e6cb4f0921da3227f02a14d0f6"],["/src/hoverboard-app.html","9e01dbd3a54b940603fe88b77a8bff6d"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","891efc6fd87312315815c9352afb3498"],["/src/pages/blog-page.html","01dae31afda5468433dda45002c03738"],["/src/pages/cod-page.html","3e14ab3d8061307e07ac5b9999f19666"],["/src/pages/home-page.html","843666db720bf7f39b7d871f893df545"],["/src/pages/post-page.html","4c76b296c34f41f4871227d0c78c78ce"],["/src/pages/schedule-page.html","bfbb1cd67fdb97544f82bb025e7d36d2"],["/src/pages/speakers-page.html","3d3f209de765a23e16079f7a7fcf9968"],["/src/pages/team-page.html","5a81e6134e8296c5b4bdfb4c52fd30a2"],["/src/styles/dialog-styles.html","f4f3f7d8ea725d086a9f70eaea49d548"],["/src/styles/icons.html","b5154a15ecfcff427d834fc43cf85732"],["/src/styles/mixins.html","5e9fd71785b723f45e28fef871231e73"],["/src/styles/shared-styles.html","1292690362c079c653bc1c0c61dea9ce"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




