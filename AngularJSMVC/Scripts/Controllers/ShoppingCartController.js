var Products = [
            { ItemKey: "0001", Name: "Beer", Price: "5" },
            { ItemKey: "0002", Name: "Snack", Price: "1.99" },
            { ItemKey: "0003", Name: "Base", Price: "13.9" },
            { ItemKey: "0004", Name: "Clock", Price: "200" },
            { ItemKey: "0005", Name: "Apple", Price: "0.94" },
            { ItemKey: "0006", Name: "Flower", Price: "3.50" },
            { ItemKey: "0007", Name: "Jar", Price: "0.99" },
            { ItemKey: "0008", Name: "TV", Price: "1299" },
            { ItemKey: "0009", Name: "XBOX", Price: "359" },
            { ItemKey: "0010", Name: "Bottle", Price: "2.98" }, 
            { ItemKey: "0011", Name: "Ice Cream", Price: "1.5"}];
var ShoppingCartController = function ($scope) {
    $scope.products = Products;
    $scope.Items = [];
    $scope.remove = function (idx) {
        $scope.Items.splice(idx, 1);
    }
    $scope.total = function () {
        var cartTotal = 0;
        for (var i = 0; i < $scope.Items.length; i++) {
            var item = $scope.Items[i];
            cartTotal += item.Qty * item.Price;
        }
        return cartTotal;
    }
    $scope.addCart = function (key) {
        var selectedItem = null;
        for(var i = 0; i< $scope.products.length; i++)
        {
            if($scope.products[i].ItemKey == key)
            {
                selectedItem = $scope.products[i];
            }
        }
        if(selectedItem)
        {
            var sItem = null;
            for (var i = 0; i < $scope.Items.length; i++)
            {
                if ($scope.Items[i].ItemKey == selectedItem.ItemKey)
                {
                    sItem = $scope.Items[i];
                }
            }
            if(sItem)
            {
                sItem.Qty++;
            }
            else
            {
                selectedItem.Qty = 1;
                $scope.Items.splice($scope.Items.length - 1, 0, selectedItem);
            }
        }
    }
}

ShoppingCartController.$inject = ["$scope"];