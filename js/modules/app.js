define(["jquery","knockout","state"],function($,ko,State) {
    return function() {
        var app = this;
        this.menu = new State("menu",function(state) {
            state.setVar("app",app);
            state.displayMessage = ko.observable(true);
        });

        this.gallery = new State("gallery",function(state) {
            state.setVar("app",app);
        });

        this.currentState = ko.observable(null);
        // this.someExpressionGoesHere = true;
       //  var arrayText = [
       // "title 111"];

       // this.titleModal = ko.observable(arrayText[0]);
    }
});
