define(["knockout"],function(ko) {

// this.titleMod = ko.observable(true);


	var ViewModel = function() {
		var vm = this;

	};

	var PredefinedViewModel = function() {
		return new ViewModel();
	}
	return PredefinedViewModel;
});
