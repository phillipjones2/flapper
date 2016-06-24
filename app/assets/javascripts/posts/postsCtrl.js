
.controller('PostsCtrl',[
  '$scope',
  '$stateParams',
  'posts',
  $scope.addComment = function(){
    if($scope.body == ''){return;}
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];
  }]);
