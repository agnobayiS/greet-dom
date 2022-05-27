function greeting(data) {

    
    var arr = data || []
    var alphabets = /^[a-zA-Z]+$/g;

    function existingName(name, language) {
        
        // if (arr.includes(name)) {
            if (language === 'english') {
                return "Name already exist"
            }
            else if (language === 'isixhosa') {
                return "Eligama selikhona"
            }
            else if (language === 'afrikaans') {
                return "Naam bestaan reeds"
            }

        // }
    }

    function invelidName(name, language) {

        if (alphabets.test(name) === false) {
            if (language === 'english') {
                return 'Please enter a valid name'

            }
            else if (language === 'isixhosa') {
                return 'Nceda ngenisa igama'

            }

            else if (language === 'afrikaans') {
                return 'Voer asseblief n naam in'

            }
        } 
    }


    function velidName(name, language) {

        arr.push(name)
        
        if (language === 'english') {
            return 'Hello, ' + name
        }
        else if (language === 'isixhosa') {
            return 'Mholo, ' + name
        }
        else if (language === 'afrikaans') {
            
            return 'Hallo, ' + name
            
        }

    }
    function getArr() {
        return arr
    }
    function noLanguage(name, language) {
        if (language === "" && name == name) {
            return " Please select language"
        }
    }

    return {
        noLanguage,
        getArr,
        existingName,
        invelidName,
        velidName,


    }
}
