myApp.service("PositionService", function ($http) {
    const getData = () => {
      return $http.get('http://localhost:3000/position');
    };

    const deletePosition = id => {
        return $http.delete(`http://localhost:3000/position/${id}`);
    };

    const edit = ({ data, id }) => {
        return $http.put(`http://localhost:3000/position/${id}`, data);
    }

    const find = (id) => {
        return $http.get(`http://localhost:3000/position/${id}`);
    }

    const store = (data) => {
        return $http.post('http://localhost:3000/position', data);
    }

    return {
        getData,
        deletePosition,
        edit,
        find,
        store
    };
});