// Define the AngularJS app and controller
angular.module('crudApp', [])
  .controller('CrudController', function($scope) {

    // Initialize the list of users
    $scope.users = [];

    // Initialize the user object and index for editing
    $scope.user = {
      name: '',
      email: ''
    };
    $scope.editingIndex = -1; // No editing initially

    // Function to add or update a user
    $scope.saveUser = function() {
      if ($scope.editingIndex === -1) {
        // If no editing, add the user
        $scope.users.push({ name: $scope.user.name, email: $scope.user.email });
      } else {
        // If editing, update the user
        $scope.users[$scope.editingIndex] = { name: $scope.user.name, email: $scope.user.email };
      }

      // Clear the form
      $scope.user.name = '';
      $scope.user.email = '';
      $scope.editingIndex = -1; // Reset editing state
    };

    // Function to edit a user
    $scope.editUser = function(index) {
      $scope.user.name = $scope.users[index].name;
      $scope.user.email = $scope.users[index].email;
      $scope.editingIndex = index; // Set the index to know we are editing
    };

    // Function to delete a user
    $scope.deleteUser = function(index) {
      $scope.users.splice(index, 1);
    };

  });
