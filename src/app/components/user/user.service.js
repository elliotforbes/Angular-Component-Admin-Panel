function UserService($log) {

    function newUser(user) {
        $log.log("Adding New User");
    }

    var service = {
        newUser: newUser
    };

    return service;
};

UserService.$inject = ['$log'];

angular.module('user')
    .factory('UserService', UserService);