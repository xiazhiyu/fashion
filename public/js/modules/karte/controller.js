/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function karteController($scope,$rootScope,$location,karteService, $mdDialog){

 console.log("fdsfadfafd");

  var tabs = [
    { title: 'カルテ：編集', tpl: "views/tpl/carteEdit.html"},
    { title: 'カルテ項目', tpl: "views/tpl/carteItem.html"}
  ];
  $scope.tabs = tabs;
  $scope.selectedIndex = 0;
  $scope.announceSelected = announceSelected;
  $scope.announceDeselected = announceDeselected;
  $scope.addTab = function (title, view) {
    view = view || title + " Content View";
    tabs.push({ title: title, content: view, disabled: false});
  };
  $scope.removeTab = function (tab) {
    for (var j = 0; j < tabs.length; j++) {
      if (tab.title == tabs[j].title) {
        $scope.tabs.splice(j, 1);
        break;
      }
    }
  };
  function announceDeselected(tab) {
    $scope.farewell = 'Goodbye ' + tab.title + '!';
  }
  function announceSelected(tab) {
    $scope.greeting = 'Hello ' + tab.title + '!';
  }

  // var alert;
  $scope.addCartItem = function(ev){
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/tpl/addCartItem.html',
      clickOutsideToClose: false,
      escapeToClose: false,
      disableParentScroll: false,
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  }

  karteService.list(function(dataList){
    // console.log(dataList);
    $scope.carteItemlist = dataList;
  });

  function DialogController($scope, $mdDialog) {

    $scope.types = [
      {name:'q_a', text:'Q&A'},
      {name:'radio', text:'リスト(文字)'},
      {name:'radio_pic', text:'リスト(画像)'},
      {name:'radio_pic_text', text:'リスト(画像&文字)'},
      {name:'check_box', text:'チェックボックス'}
    ];

    $scope.typeTpl = [
      {name:'q_a', url:'views/tpl/carteItem.qa.tpl.html'},
      {name:'radio', url:'views/tpl/carteItem.radio.tpl.html'},
      {name:'radio_pic', url:'views/tpl/carteItem.radio_pic.tpl.html'},
      {name:'radio_pic_text', url:'views/tpl/carteItem.radio_pic_text.tpl.html'},
      {name:'check_box', url:'views/tpl/carteItem.check_box.tpl.html'}
    ];

    // $scope.reviewUrl=$scope.item.type?'views/tpl/carteItem.'+$scope.item.type.name+'.html':undefined;

    $scope.isReview = false;

    $scope.review = function() {
      $scope.isReview = !$scope.isReview;
      // $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.save = function(){
      // console.log($scope.item);
      // var mode = 1;
      karteService.saveKarteItem(1, $scope.item,function(data){
          $mdDialog.hide(); 
      });      
    };


  }
}