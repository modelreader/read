var app=angular.module("titleSelection",[]);
app.controller("titleSelectionCtrl",["$scope",function($scope){
	$scope.hide=function($e){
		console.log($e)
		$("#titleSelection .header .hide").toggle();
	}
}])
app.directive("ngChose",[function(){
	return{
		restrict:"A",
		link:function($scope,el){
			$(el).on("touchend",".click",function(){
				$(el).find(".click.now").removeClass("now");
				$(this).addClass('now');
			})
		}
	}
}])
app.directive("ngChoseside",[function(){
	return{
		restrict:"A",
		link:function($scope,el){
			$(el).on("touchend","li",function(){
				$(el).find(".now").removeClass("now");
				$(this).addClass('now');
			})
		}
	}
}])