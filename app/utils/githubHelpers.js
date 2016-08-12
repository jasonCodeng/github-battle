var axios = require('axios');

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        })).then(function (response) {
            return response.map(function(user) {
                return user.data;
            })
        })
    }
};

module.exports = helpers;
