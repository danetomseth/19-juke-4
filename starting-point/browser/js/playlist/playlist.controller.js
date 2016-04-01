juke.controller('PlaylistCtrl', function($scope, PlaylistFactory) {
	console.log($scope.playlistName)
	$scope.submitPlaylist = function(name) {
		PlaylistFactory.createPlaylist(name).then(function(playlistData){
			console.log("PLDATA::", playlistData);
		})
	}
})

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/Playlist',
    templateUrl: '/js/playlist/Playlist.html',
    controller: 'PlaylistCtrl',
  });

});