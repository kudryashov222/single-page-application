define(["knockout"],function(ko) {


    var ViewModel = function() {
       var vm = this;
       var urlImage = $(".gallery a img.current").attr("src");
       var index = $(".gallery a img.current").parents("li").index();
       var arrayImg = [{
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, vero, natus. Consequatur laborum nihil quos sequi, commodi rem, fugit nisi.", nameImg: "Item name 1"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolore ea nihil placeat, voluptas deserunt.", nameImg: "Item name 2"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, expedita.", nameImg: "Item name 3"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde at magni dignissimos temporibus obcaecati, tempora veniam autem illum aut aliquid repellat deleniti, aliquam ut.", nameImg: "Item name 4"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus quibusdam soluta, accusantium hic quidem nesciunt dolore maxime vero dicta delectus praesentium suscipit modi porro, illo natus sint laudantium.", nameImg: "Item name 5"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolorum.", nameImg: "Item name 6"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cupiditate veritatis voluptatum inventore repudiandae reiciendis, nulla voluptates ipsa, beatae.", nameImg: "Item name 7"},
        {text: "Lorem ipsum dolor sit.", nameImg: "Item name 8"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem similique nulla officia at nobis placeat quas voluptatum velit? Earum quod consectetur, quaerat repellendus! Autem, quis omnis! Placeat quam, nesciunt.", nameImg: "Item name 9"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, obcaecati eligendi nobis?", nameImg: "Item name 10"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus quibusdam soluta, accusantium hic quidem nesciunt dolore maxime vero dicta delectus praesentium suscipit modi porro, illo natus sint laudantium.", nameImg: "Item name 11"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolorum.", nameImg: "Item name 12"}];

       vm.textImg = ko.observable(arrayImg[index].text);
       vm.nameImg = ko.observable(arrayImg[index].nameImg);
       vm.src = ko.observable(urlImage);

       this.nextImg = function() {
            var urlNextImage = $(".gallery a img.current").parents("li").next().find("img").attr("src");
            $(".gallery a img.current").parents("li").next().find("img").addClass('current');
            $(".gallery a img.current").parents("li").prev().find("img").removeClass('current');
            $(".modal-dialog").find("img").attr('src', urlNextImage);
            var index = $(".gallery a img.current").parents("li").index();
            vm.textImg = ko.observable(arrayImg[index].text);
            vm.nameImg = ko.observable(arrayImg[index].nameImg);
            $(".textImg").text(vm.textImg());
            $(".modal-title").text(vm.nameImg());
        }

    };

    var PredefinedViewModel = function() {
        return new ViewModel();
    }
    return PredefinedViewModel;
});
