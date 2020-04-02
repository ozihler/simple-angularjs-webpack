export function dummyService($http) {
    var service = {
        fetchExternal: fetchExternal
    };

    return service;

    function fetchExternal() {
        return $http.get('http://localhost:5000/api/dummy')
            .then(handleSuccess)
            .catch(handleError);
    }

    function handleSuccess(response) {
        return response.data;
    }

    function handleError(error) {
        console.error("Failed call.", error.data)
    }
}
