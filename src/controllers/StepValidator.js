const StepValidator = {
    validate( step, selectedInput, type ){
        var valid = false;

        if( type == "radio" ){
            if( step.correct == step.options[selectedInput] ) valid = true;
        }

        if( type == "checkbox" ){
            const userAnswer = getCheckboxesData( step, selectedInput );
            const equal = arraysAreEqual( userAnswer, step.correct );
            
            if( equal ) valid = true;
        }

        return valid;
    }
}

function getCheckboxesData( step, indexes ){

    var checkboxesData = [];

    indexes.forEach((i, pos) => {
        checkboxesData.push( step.options[pos] )
    });

    return checkboxesData;
}

function arraysAreEqual( array1, array2 ){

    if( array1.length != array2.length ) return false;

    array1.forEach(element => {
        if( !array2.includes(element) ) return false;
    })

    return true;
}

export default StepValidator;