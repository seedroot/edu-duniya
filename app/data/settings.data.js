(function () {
	'use strict'

	angular
		.module('edu')
		.service('settingsService', settingsService);

	settingsService.$inject = ['$http', '$q', 'config'];
	function settingsService ($http, $q, config) {
		this.addCourse = function (id, _course) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/settings/' + id + '/general/course', {course: _course})
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.getCourses = function (id) {
			var deferred = $q.defer();

			$http.get(config.apiUrl + '/settings/' + id + '/general/course')
				.success(function (data) {
					deferred.resolve(data[0].course);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.updateCourse = function (id, _course) {
			var deferred = $q.defer();

			$http.put(config.apiUrl + '/settings/' + id + '/general/course', { course: _course })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.getBatches = function (id) {
			var deferred = $q.defer();

			$http.get(config.apiUrl + '/settings/' + id + '/batch')
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.addBatch = function (_batch) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/settings/' + _batch.institute_id + '/batch', { batch: _batch })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.updateBatch = function (id, _batch) {
			var deferred = $q.defer();

			$http.put(config.apiUrl + '/settings/' + id + '/batch', {batch: _batch})
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.addSubject = function (id, batch_id, _subjects, type) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/settings/' + id + '/batch/' + batch_id + '/subject/' + type, { subjects: _subjects })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.getSubjects = function (id, batch_id) {
			var deferred = $q.defer();

			$http.get(config.apiUrl + '/settings/'+ id +'/batch/'+ batch_id +'/subject')
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.addAdmission = function (id, _payload) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/admission/' + id, _payload)
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.getAdmissions = function (id) {
			var deferred = $q.defer();

			$http.get(config.apiUrl + '/admission/' + id)
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				});

			return deferred.promise;
		}

		this.addField = function (id, _field) {
			var deferred = $q.defer();

			//abcd is admission_id which is hardcoded in api server, for now
			$http.post(config.apiUrl + '/admission/' + id + '/abcd', { field: _field })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.addAcademicYear = function (id, academic_year) {
			var deferred = $q.defer();

			$http.post(config.apiUrl + '/settings/' + id + '/general/academic_year', { academic_year: academic_year })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.updateAcademicYear = function (id, academic_year) {
			var deferred = $q.defer();

			$http.put(config.apiUrl + '/settings/' + id + '/general/academic_year', { academic_year: academic_year })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.removeAcademicYear = function (id, year_id) {
			var deferred = $q.defer();
			console.log(year_id);
			$http.delete(config.apiUrl + '/settings/' + id + '/general/academic_year', { params: { year: year_id } })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.getGeneralSettings = function (id) {
			var deferred = $q.defer();
			$http.get(config.apiUrl + '/settings/' + id + '/general')
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}

		this.updateGeneralSettings = function (id, settings, type) {
			var deferred = $q.defer();
			$http.put(config.apiUrl + '/settings/' + id + '/general', { settings: settings, type: type })
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(err);
				})

			return deferred.promise;
		}
	}
})();