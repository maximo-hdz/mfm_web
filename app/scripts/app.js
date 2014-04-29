'use strict';

var app = angular.module('spaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngGrid',
  'accounts-route',
  'administration-route',
  'authorize-route',
  'authentication-route'
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('dashboard', {
    abstract: true,
    url: '/',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl',
    breadcrumb: {
      title: 'dashboard'
    }
  })
 
  .state('dashboard.connection', {
    url: 'connection',
    templateUrl: 'views/partials/connection/connection.html',
    controller: 'ConnectionCtrl',
    breadcrumb: {
      title: 'connection'
    }
  })
  .state('dashboard.transfer', {
    url: 'transfer',
    //templateUrl: 'views/transferAddCount.html',
    //controller: 'transferAddCount',
    templateUrl: 'views/partials/transfers/transfers.html',
    controller: 'TransfersCtrl',
    breadcrumb: {
      title: 'Transfer'
    }
  })
  .state('dashboard.addBeneficiary', {
    url: 'partials/transfer/add/beneficiary',
    templateUrl: 'views/partials/transfers/add-beneficiary.html',
    controller: 'AddBeneficiaryCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  /**news*/
  .state('dashboard.addBeneficiary.physical', {
    url: '/physical',
    templateUrl: 'views/partials/transfers/add-beneficiary-physical.html',
    controller: 'AddBeneficiaryPhysicalCtrl',
    breadcrumb: {
      title: 'Physical'
    }
  })
  .state('dashboard.addBeneficiary.moral', {
    url: '/moral',
    templateUrl: 'views/partials/transfers/add-beneficiary-moral.html',
    controller: 'AddBeneficiaryMoralCtrl',
    breadcrumb: {
      title: 'Moral'
    }
  })
  .state('dashboard.addMoralBeneficiaryConfirm', {
    url: 'transfer/add/moralbeneficiary/confirm',
    templateUrl: 'views/partials/transfers/add-beneficiary-moral-confirm.html',
    controller: 'AddBeneficiaryMoralConfirmCtrl',
    breadcrumb: {
      title: 'Confirm'
    }
  })
  .state('dashboard.addBeneficiaryConfirm', {
    url: 'transfer/add/beneficiary/confirm',
    templateUrl: 'views/partials/transfers/add-beneficiary-confirm.html',
    controller: 'AddBeneficiaryConfirmCtrl',
    breadcrumb: {
      title: 'Confirm'
    }
  })
  .state('dashboard.addMoralBeneficiaryResult', {
    url: 'transfer/add/moralbeneficiary/result',
    templateUrl: 'views/partials/transfers/add-beneficiary-moral-result.html',
    controller: 'AddBeneficiaryMoralResultCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  .state('dashboard.addBeneficiaryResult', {
    url: 'transfer/add/beneficiary/result',
    templateUrl: 'views/partials/transfers/add-beneficiary-result.html',
    controller: 'AddBeneficiaryResultCtrl',
    breadcrumb: {
      title: 'Beneficiary'
    }
  })
  /****END TO VIEWS */
  .state('dashboard.interbankTransfer', {
    url: ':transfer/interbankTransfer',
   templateUrl : 'views/partials/transfers/interbank.html',
   controller: 'InterbankCtrl',
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.confirmInterbankTransfer', {
    url: ':transfer/interbankTransfer/Confirm',
   templateUrl : 'views/partials/transfers/interbank-confirm.html',
   controller: 'InterbankCtrl'
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.internationalTransfer', {
    url: ':transfer/internationalTransfer',
   templateUrl : 'views/partials/transfers/international.html',
   controller: 'InternationalCtrl',
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.confirmInternationalTransfer', {
    url: ':transfer/confirmInternationalTransfer',
   templateUrl : 'views/partials/transfers/international-confirm.html',
   controller: 'InternationalCtrl'
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.same-bank-transfer', {
    url: ':transfer/same-bank-transfer',
   templateUrl : 'views/partials/transfers/same-bank.html',
   controller: 'SameBankCtrl',
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.same-bank-transfer-confirmation', {
    url: ':transfer/same-bank-transfer-confirmation',
   templateUrl : 'views/partials/transfers/same-bank-confirmation.html',
   controller: 'SameBankCtrl'
   // breadcrumb: {
      //title: 'Detail'
   // }
  })
  .state('dashboard.sameAddBeneficiary', {
    url: 'transfer/sameAddBeneficiary',
    templateUrl: 'views/partials/transfers/same-add-beneficiary.html',
      controller:'SameAddBeneficiaryCtrl',
     breadcrumb: {
      title: 'SameBank'
    }
  })
  .state('dashboard.sameConfirmBeneficiary', {
    url: 'transfer/sameConfirmBeneficiary',
    templateUrl: 'views/partials/transfers/same-confirm-beneficiary.html',
      controller:'SameAddBeneficiaryCtrl',
     breadcrumb: {
      title: 'SameBank'
    }
  })
}).factory('ctsCreditPacted', function(){
  return {}
}).factory('ctsBiometricas', function() {
  return {}
});
app.run(function($rootScope){
  $rootScope.restAPIBaseUrl = 'http://projects.anzen.com.mx:8081/mfm/api/v1/';
});

