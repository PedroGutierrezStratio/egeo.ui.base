describe('providers.egeo.config', function () {
    var _testPath = "egeo/test";
    var _egeoConfig;
    var _egeoConfigProvider;

    beforeEach(function () {
        angular
            .module('EgeoConfigTest', ['egeo.config'])
            .config(function(EgeoConfigProvider) {
                _egeoConfigProvider = EgeoConfigProvider;
            })
            .run(function (EgeoConfig) {
                _egeoConfig = EgeoConfig;
            });
        module('EgeoConfigTest');
        inject();
    });

    it('It should return the defined path with setEgeoPath', function() {
        _egeoConfigProvider.setEgeoPath(_testPath);

        expect(_egeoConfig.getEgeoPath()).toBe(_testPath);
    });
});

describe('providers.egeo.config', function() {
    beforeEach(module('egeo'));
    beforeEach(inject(function(EgeoConfig) {
        _EgeoConfig = EgeoConfig;
    }));

    it('It should return the default config value of the Path where Egeo is installed', function() {
        var defaultPath = 'public/js/egeo';

        expect(_EgeoConfig.getEgeoPath()).toBe(defaultPath);
    });
});
