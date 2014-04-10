'use strict';

/**
 * The accounts controller. Gets accounts passing auth parameters
 */
angular.module('spaApp')
.controller('AccountsCtrl', function($scope,$http,$location,$rootScope,$log,ctsBiometricas,accountsProvider) {
	$scope.client = 'Ricardo Montemayor Morales';
	$rootScope.titulo = 'Saldos';
    $scope.biometricAccounts = $rootScope.biometricAccounts;


	//behavior stack accounts group
	$scope.show_hide_table=function(elemento, titulo ){
		if( $(elemento).css('display') == 'block' ){
			$(elemento).slideToggle('slow');
			$(titulo).removeClass('abierto').addClass('cerrado');
		}else{
			$(elemento).slideToggle('slow');
			$(titulo).removeClass('cerrado').addClass('abierto');
		}
	};

	$scope.load_accounts = function () {
		$('.page_accounts').css({
			'opacity': '0'
		});
		$('.table-responsive').hide();
		setTimeout(function(){
			$('.page_accounts').animate({
				'opacity': '1'
			},300);
		},500);

		$( $('.table-responsive').get().reverse() ).each(function( index ){
			var $this = $(this);
			setTimeout(function(){
				$this.slideToggle('slow');
			}, ((index + 1) * 500) );
		});
	};

	/*Controller for module invertions   */
	$scope.inversiones=function(){
		$location.path('#investment' );
	}
});