define(["jquery","knockout","state", "bootstrap"],function($,ko,State) {
    return function() {
        var menu = this;

        this.gotoSample = function(obj,e) {
            var sampleId = $(e.target).attr("data-id");
            $('#Callback').modal();
            var newState = new State("samples/sample" + sampleId,function(state) {
                state.setVar("app",menu.app);
                state.setVar("menu",menu);
                menu.app.currentState(state);
            });
        }
    }
});
