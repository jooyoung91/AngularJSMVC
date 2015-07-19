var EmployeeController = function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;

    };
    $scope.salary = 88000;
    $scope.companies = [{ Name: "Google", Position: "Web developer" }, { Name: "Amazon", Position: "CFO" }];
    $scope.books = [{ Title: "AngularJS for Dummy", Price: 13.34 }, { Title: "Data Structure", Price: 25.25 }, { Title: "HTML5 And CSS3", Price: 30.34 }]
}

EmployeeController.$inject = ['$scope'];