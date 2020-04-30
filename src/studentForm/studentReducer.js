const studentReducer = (state=[],action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            return state.concat([action.data])
        case 'DELETE_STUDENT':
            return state.filter((record) => record.Id !== action.id)
        case 'EDIT_STUDENT':
            return state.map((record) => record.Id === action.id ? {...record, editing: !record.editing} : record)
        case 'UPDATE_STUDENT':
            return state.map((record) => {
                if(record.Id === action.id){
                    return {
                        ...record,
                        Name: action.data.newName,
                        Class: action.data.newClass,
                        Section: action.data.newSection,
                        Gender: action.data.newGender,
                        editing: !record.editing
                    }
                } else {
                    return {
                        ...record, 
                        editing: false
                    }
                }               
            })
        case 'CANCEL_STUDENT':
            return state.map((record) => {
                return {
                    ...record,
                    editing: false
                }
            })
        default: 
            return state
    }
}

export default studentReducer;