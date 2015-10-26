/*describe('providers.egeo.config', function() {
    var _EgeoConfig;

    beforeEach(function() {
        var fakeModule = angular.module('test.egeo.config', function() {});
        fakeModule.config(function(EgeoConfigProvider) {
                    console.log("Hola");
                    EgeoConfigProvider.setEgeoPath('/test/');
                    //_EgeoConfig = EgeoConfigProvider;
                });

        module('egeo', ['test.egeo.config']);

        //inject(function() {});
    });

    it('It should return the default config value of the Path where Egeo is installed', function() {
        var defaultPath = 'public/js/egeo';

        expect(true).toBe(true);
        console.log(_EgeoConfig);
        console.log(_EgeoConfig);
        expect(_EgeoConfig.getEgeoPath()).toBe(defaultPath);
    });
});
*/

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
