const list = [
    {
      name: "Українська мова",
      value: 100,
      checked: true
    }
  ];

export default function listReducer(state = list, action) {
  switch (action.type) {
    case 'UPDATE_LIST':
      return action.newList;
    default:
      return state;
  }
}
