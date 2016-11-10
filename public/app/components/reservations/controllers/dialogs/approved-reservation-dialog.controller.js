app
	.controller('approvedReservationDialogController', ['$scope', 'Helper', function($scope, Helper){
		var reservation = Helper.fetch();

		$scope.cancel = function(){
			Helper.cancel();
		}

		var request = {
			'with': [
				{
					'relation': 'location',
					'withTrashed': true,
				},
				{
					'relation': 'user',
					'withTrashed': true,
				},
				{
					'relation': 'equipments',
					'withTrashed': false,
				},
				{
					'relation':'schedule_approver',
					'withTrashed': false,
				},
				{
					'relation':'equipment_approver',
					'withTrashed': false,
				},
			],
			'where': [
				{
					'label': 'id',
					'condition': '=',
					'value': reservation.id,
				},
			],
			'first' : true,
		}

		Helper.post('/reservation/enlist', request)
			.success(function(data){
				data.start = new Date(data.start);
				data.end = data.end ? new Date(data.end) : null;

				$scope.reservation = data;
			})
			.error(function(){
				Helper.error();
			})
	}]);