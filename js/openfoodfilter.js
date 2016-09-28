(function() {
    'use strict';

    angular.module('openfoodfilter', ['openfoodfilter.routes','openfoodfilter.products','ngAnimate','ui.bootstrap','rzModule','ui.filters' ]);

    angular.module('openfoodfilter.routes', ['ui.router']);

    angular.module('ui.filters', []);

    angular.module('openfoodfilter').run(function($animate) {

            $animate.enabled(true);

        });
})();
