/** Singleton example with module pattern **/
var mySingletonObj = (function() {

    //private variables
    var surname = "blondel";
    var firstname = "camille";

    return {
        surname : "ibled",
        // privileged methods
        getSurname: function() { //return blondel
            return surname;
        },
        getFirstname: function() {
            return firstname;
        },
        getObjSurname: function() { //return ibled
            return this.surname;
        }
    }
})();