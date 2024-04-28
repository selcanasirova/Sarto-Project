// export const newReducer=(state= [],action)=>{
//   switch (action.type) {
//     case 'Add_Product':
//       return [...state,action.product];
//       case "Edit_Product":
//       return state.map(item => {
//         if (action.id === item.id) {
//           return { ...item, ...action.update }
//         } else {
//           return item
//         }
//       })
//     case 'Remove_Product':
//       return state.filter(item=>item.id !== action.id)
//       case "Set_Product":
//             return action.product;
//     default:
//       return state;
//   }
// }


export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return [...state, action.news];

    case "EDIT_NEWS":
      return state.map(item => {
        if (action.id === item.id) {
          return { ...item, ...action.update }
        } else {
          return item
        }
      })
    case "REMOVE_NEWS":
      return state.filter(item => item.id !== action.id)
      case "SET_NEWSS":
        return action.newss;
    default:
      return state;
  }
}

