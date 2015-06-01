(function() {
    "user strict";

    describe("Text field validator", function() {
        var field;
        beforeEach(function(){
            field = document.createElement("input");
            field.setAttribute("type", "text");
        })

        it("applies 'required' CSS class when field is empty ", function() {
            //Arrange

            // Act
            example.validateTextField(field);

            //Assert
            expect(cssClass()).to.equal("example-required");

            it("remotes 'required' css class when field is not empty", function(){
                //arrange
                field.setAttribute("class", example.REQUIRED_FIELD_CLASS);
                field.value = "not empty";

                //act
                example.validateTextField(field);

                //assert
                expect(cssClass()).to.equal(null);
            });

            function cssClass(){
                    return field.getAttribute("class");
            }
        });
    });
})();
