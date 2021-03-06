app
	.controller('approvalsToolbarController', ['$scope', '$filter', function($scope, $filter){
		$scope.toolbar.childState = 'Approvals';

		$scope.$on('close', function(){
			$scope.hideSearchBar();
		});

		$scope.$on('open', function(){
			$scope.showSearchBar();
			$scope.searchUserInput();
		});

		$scope.toolbar.getItems = function(query){
			var results = query ? $filter('filter')($scope.toolbar.items, query) : $scope.toolbar.items;
			return results;
		}

		$scope.toolbar.searchAll = true;
		/**
		 * Reveals the search bar.
		 *
		*/
		$scope.showSearchBar = function(){
			$scope.reservation.busy = true;
			$scope.searchBar = true;
		};

		/**
		 * Hides the search bar.
		 *
		*/
		$scope.hideSearchBar = function(){
			$scope.searchBar = false;
			$scope.toolbar.searchText = '';
			$scope.toolbar.searchItem = '';
			/* Cancels the paginate when the user sent a query */
			if($scope.searched){
				$scope.searched = false;
				$scope.$emit('refresh');
			}
		};

		$scope.searchUserInput = function(){
			$scope.$emit('search');
			$scope.searched = true;
		};

		$scope.toolbar.options = true;
		
		$scope.toolbar.sort = [
			{
				'label': 'Title',
				'type': 'title',
				'sortReverse': false,
			},
			{
				'label': 'Remarks',
				'type': 'remarks',
				'sortReverse': false,
			},
			{
				'label': 'Date Start',
				'type': 'start',
				'sortReverse': false,
			},
			{
				'label': 'Date End',
				'type': 'end',
				'sortReverse': false,
			},
			{
				'label': 'Recently added',
				'type': 'created_at',
				'sortReverse': false,
			},
		];
		
		$scope.toolbar.refresh = function(){
			$scope.$emit('refresh');
		}
	}]);