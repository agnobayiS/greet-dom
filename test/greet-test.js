describe("The rejection massages",function(){

    it("should display (please enter a valid name) if the are numbers in the name and lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("please enter a valid name",passedNames.invelidName("Siyabonga32","english") )




    });
    it("should display (nceda ngenisa igama) if the are numbers in the name and lanuge is xhosa",function(){

        const passedNames = greeting()
        assert.equal("nceda ngenisa igama",passedNames.invelidName("Siyabonga32","isixhosa") )




    });
    it("should display (Voer asseblief n naam in) if the are numbers in the name and lanuge is afrikaans",function(){

        const passedNames = greeting()
        assert.equal("Voer asseblief n naam in",passedNames.invelidName("Siyabonga32","afrikaans") )




    });


});

describe("The Greeting massages",function(){

    it("should display (Hello and siyabonga) if the name Siyabonga is passed in and the lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("'Hello, Siyabonga",passedNames.velidName("Siyabonga","english") )




    });

});