export const ADD_POTLUCK = "ADD_POTLUCK"
export const EDIT_POTLUCK = "EDIT_POTLUCK"
export const ADD_LIST = "ADD_LIST"
export const EDIT_LIST = "EDIT_LIST"
export const CONFIRM_ATTENDANCE = "CONFIRM_ATTENDANCE"
export const SELECT_DISH = "SELECT_DISH"

export const addPotluck = (potluck) => {
  return({type: ADD_POTLUCK, payload: potluck})
}

export const editPotluck = (data) => {
  return({type: EDIT_POTLUCK, payload: data })
}

export const AddList = (list) => {
    return({type: ADD_LIST, payload: list})
}

export const editList = (id, list) =>{
    return({type: EDIT_LIST, payload:{id: List(id)} })
}

export const confirmAttendance = (event) => {
    return({type: CONFIRM_ATTENDANCE, payload: event})
}

export const selectDish = (id, item) => {
    return({type: SELECT_DISH, payload: {id: Item(id)}})
}