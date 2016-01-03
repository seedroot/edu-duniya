(function(){
	'use strict'

	angular
		.module('edu')
		.controller('GeneralSettingController',GeneralSettingController)

		GeneralSettingController.$inject = [];
		function GeneralSettingController () {
			var vm = this;


			vm.arr = [{
				sr_no: 1,
				aca_year: '2014',
				is_current: false
			},
			{
				sr_no: 2,
				aca_year: '2015',
				is_current: false
			},
			{
				sr_no: 3,
				aca_year: '2016',
				is_current: true
			}]


			vm.mediaList = [{
			    imagePath: "../../img/profile/profile-1.jpg"
			},
            {
                imagePath: "../../img/profile/profile-1.jpg"
            },
            {
                imagePath: "../../img/profile/profile-1.jpg"
            }
			]
		}
})
();