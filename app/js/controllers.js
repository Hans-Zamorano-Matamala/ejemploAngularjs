// Generated by CoffeeScript 2.2.3
(function() {
  var indexController, restController;

  indexController = function($scope, recursos) {
    console.log("mensaje por consola");
    $scope.sinUniverso = false;
    $scope.sinBuscados = false;
    // obtengo desde el recurso, el listado de elementos
    return recursos.elementos(function(el) {
      $scope.elementos = el;
      if (el.universo.length === 0) {
        $scope.sinUniverso = true;
      }
      if (el.buscados.length === 0) {
        return $scope.sinBuscados = true;
      }
    });
  };

  restController = function($scope, recursosjsonplaceholder) {
    var newUser;
    newUser = {};
    $scope.enejecucion = false;
    $scope.disableEliminar = [];
    recursosjsonplaceholder.query(function(resp) {
      return $scope.usuarios = resp;
    });
    $scope.searchFilter = function(obj) {
      var re;
      re = new RegExp($scope.searchText, 'i');
      return !$scope.searchText || re.test(obj.name.toString()) || re.test(obj.username.toString()) || re.test(obj.email.toString()) || re.test(obj.phone.toString());
    };
    $scope.agregar = function() {
      $scope.enejecucion = true;
      return recursosjsonplaceholder.save(newUser, function(resp) {
        $scope.enejecucion = false;
        $scope.newUser.id = resp.id;
        $scope.usuarios.push($scope.newUser);
        return $scope.newUser = {};
      });
    };
    return $scope.eliminar = function(usuario, index) {
      recursosjsonplaceholder.delete({
        id: usuario.id
      }, function(resp) {});
      return $scope.usuarios.splice(index, 1);
    };
  };

  app.controller("indexController", ["$scope", "recursos", indexController]);

  app.controller("restController", ["$scope", "recursosjsonplaceholder", restController]);

}).call(this);
