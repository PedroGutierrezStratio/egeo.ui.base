describe('factories.egeo.childrenClass', function () {
    var _EgeoChildrenClass;
    var _$rootScope;
    var _elem;
    var _testClass = "test-class";

    beforeEach(function(){
        module("egeo");
        
        _elem = angular.element('<div>').append(angular.element("<span/><span/><span/>"));

        inject(function(_$rootScope_, _EgeoChildrenClass_) {
            _$rootScope = _$rootScope_;
            _EgeoChildrenClass = _EgeoChildrenClass_;
        });
    });

    it("It should return a function after call it passing a className", function(){
        expect(typeof _EgeoChildrenClass()).toBe('function');
    });

    it("It should add a class to him children asynchronously", function(done){
        var link = _EgeoChildrenClass(_testClass);
        
        link(_$rootScope, _elem);

        expect(_elem.html()).not.toMatch(_testClass);

        setTimeout(function(){
            expect(_elem.html()).toMatch(_testClass);
            done();
        }, 1);
    });
});
