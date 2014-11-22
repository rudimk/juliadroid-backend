juliadroid-backend
==================

Backend for the JuliaDroid app for Android.

This is simply a basic API, that accepts expressions in Julia, passes them to a Julia interpreter using [node-julia](http://node-julia.readme.io/), and simply passes the result back as a basic JSON object. Currently, it's supposed to be used with the (JuliaDroid)[https://github.com/rudimk/juliadroid-app] app for Android, but you can use it anywhere.

To run this API, you're going to need Express, and node-julia, along with a working Julia installation on the same machine. Then, simply fork the repo, run ```npm install``` inside the repo directory to update your node modules, and run ```node app.js```.

This was built in a 5-hour nocturnal pizza-plus-Tzinga-fuelled session at the Hacknight for Droidcon India 2014. But I am thinking of a lot of ways in which to take this further. Adding support for passing Julia scripts from a client app to the API, marshalling datatypes, even support for SVG plots, which can be rendered on compatible clients - all on the roadmap.