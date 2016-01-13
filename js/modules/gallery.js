define(["jquery","knockout","state", "bootstrap"],function($,ko,State) {
    return function() {
        var gallery = this;

    // function SeatReservation(name) {
    //     this.name = srcImg;
    // }
    // function ReservationsViewModel() {
    //     this.seats = ko.observableArray([]);
    //     for (var i = 1; i < 10; i++) {
    //         j = 400 +i;
    //         seats.push({ srcImg: "http://lorempixel.com/640/"+j+""});
    //     };

    //     console.log(this);

        this.gotoImage = function(obj,e) {
            $(".gallery a img").removeClass('current');
            $(e.target).addClass('current');
            $('#Callback').modal();
            var newState = new State("samples/sample2",function(state) {
                gallery.app.currentState(state);
            });
        }
       //  var arrayText = [
       // "title 222"];

       // this.titleModal = ko.observable(arrayText[0]);
    // }

    // return ReservationsViewModel;


    }
});
