/**
 * Created by kevingreb on 11.09.15.
 */
(function() {
    var app = angular.module('timerecord', []);
    app.controller('DropdownController', function(){
        this.courses = coursearray;
        this.efforts = effortarray;
    });
    var coursearray = [
        {
            id: "1",
            name: "Finance 1"
        },
        {
            id: "2",
            name: "Wirtschaftsprivatrecht"
        }
    ]
    var effortarray = [
        {
            id: "1",
            name: "Lesen"
        },
        {
            id: "2",
            name: "Übungen"
        }
    ]
})();