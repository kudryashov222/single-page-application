require.config({
    paths: {
        "jquery": "/lib/jquery/jquery.min",
        "bootstrap": "/lib/bootstrap/dist/js/bootstrap.min",
        "knockout": "/lib/knockout/knockout",
        "text": "/lib/text/text"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});


require(["knockout","state","stringTemplateEngine"], function(ko,State) {

    var sm = new State("app",function(state) {
        ko.applyBindings(state);
    });
});
