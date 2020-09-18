const StepValidator = {
    validate( step, selectedInput ){
        if( step.correct == selectedInput ){

            return true;
        }
    }
}

export default StepValidator;