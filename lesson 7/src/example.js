var example = {};
example.REQUIRED_FIELD_CLASS = 'example-required';
(function() {
    "user strict";
    example.validateTextField = function(field){
        if(field.value){
            field.removeAttributes("class");
        } else {
            field.setAttribute("class", example.REQUIRED_FIELD_CLASS);
        }
    };
})();
