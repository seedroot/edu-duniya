(function () {
	'use strict'

	angular
		.module('edu')
		.controller('SubdomainController', SubdomainController)

	SubdomainController.$inject = ['config', 'domain'];
	function SubdomainController (config, domain) {
		var vm = this;
		console.log(domain);
		vm.domain = domain.settings;
		vm.institute = domain.institute;
		vm.slider = [];
		var imgObj = {};

		if(vm.domain.slider_1){
			imgObj = {active: true, slider: vm.domain.slider_1};
			vm.slider.push(imgObj);
		}
		if(vm.domain.slider_2){
			imgObj = {active: false, slider: vm.domain.slider_2};
			vm.slider.push(imgObj);
		}
		if(vm.domain.slider_3){
			imgObj = {active: false, slider: vm.domain.slider_3};
			vm.slider.push(imgObj);
		}
		if(vm.domain.slider_4){
			imgObj = {active: false, slider: vm.domain.slider_4};
			vm.slider.push(imgObj);
		}










		$('.carousel').carousel({
        	interval: 3000
    	});
	    
	    $('.news').vTicker();
	    function hoverTiles(){
	        var tiles = $('.tile');
	        tiles.hover(function(){
	            tiles.removeClass('active');
	            $(this).addClass('active');
	        });
	    }

		hoverTiles();

        $('.tile').on('mouseleave', function () {
            $('.tile').removeClass('active');
        });
	}
})();