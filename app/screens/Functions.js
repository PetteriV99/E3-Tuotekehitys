let answers = new Map()

answers.set(1, 1)
answers.set(2, 3)
answers.set(3, 2)
answers.set(4, 1)
answers.set(5, 1)
answers.set(6, 1)
answers.set(7, 4)
answers.set(8, 2)

class Answers {
    checkAnswer(question_id, answer_id){

        switch(answer_id) {
            case 1:
                if(answer_id == answers.get(question_id)){
                    return true
                }else{
                    return false
                }
            case 2:
                if(answer_id == answers.get(question_id)){
                    return true
                }else{
                    return false
                }
            case 3:
                if(answer_id == answers.get(question_id)){
                    return true
                }else{
                    return false
                }
            case 4:
                if(answer_id == answers.get(question_id)){
                    return true
                }else{
                    return false
                }
            default:
              //Alert error
          } 
    
    }
}

const AnswersClass = new Answers();
export default AnswersClass;
