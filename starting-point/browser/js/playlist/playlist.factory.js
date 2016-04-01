juke.factory('PlaylistFactory', function ($http, SongFactory) {

	return {
		createPlaylist: function(name){
			var hi = {};
			hi.name = name;
			return $http.post('/api/playlists/', {name: name}).then(function(newPlaylist){
				return newPlaylist.data;
			});
		}
	}

})