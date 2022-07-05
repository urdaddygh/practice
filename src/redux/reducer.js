export const ORDER = "ORDER";
export const GET_BY_ID = "GET_BY_ID"
export const CHANGE_ORDER = "CHANGE_ORDER"
export const DELETE_ORDER = "DELETE_ORDER"
export const ADD_ORDER = "ADD_ORDER"

const initialState = {
  order: [
    {
      id: 1,
      name: "Евгений",
      date: "04.06.2022",
      phone: "+996505423311",
      adress: "Улица достоевского д2",
      type: "Мебель",
      note_man: "Пожауйста будьте аккуратны",
      price:"2000c"
    },
    {
      id: 2,
      name: "Карина",
      date: "04.07.2022",
      phone: "+996505423212",
      adress: "Мкр 4, дом2, кв2",
      type: "Мебель",
      note_man: "Прошу по-быстрее",
      price:"4000c"
    },
    {
      id: 3,
      name: "Арген",
      date: "21.06.2022",
      phone: "+996709982311",
      adress: "Джал 23 д4, кв24",
      type: "Мебель",
      note_man: "Много мебели",
      price:"3000c"
    },
    {
      id: 4,
      name: "Арсен",
      date: "22.01.2022",
      phone: "+996555421345",
      adress: "Панфилова 23 1",
      type: "Мебель",
      note_man: "Очень много мебели",
      price:"2000c"
    },
    {
      id: 5,
      name: "Айгерим",
      date: "10.02.2022",
      phone: "+9965778231123",
      adress: "Манаса 23 4",
      type: "Кухонные принадлежности",
      note_man: "Позвонить перед выездом",
      price:"4021c"
    },
    {
      id: 6,
      name: "Азирет",
      date: "05.07.2022",
      phone: "+996776231123",
      adress: "Исанова д5 кв1",
      type: "Мебель",
      note_man: "Пожауйста будьте аккуратны",
      price:"1000c"
    },
  ],
  oneOrder:{}
};
export const order = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return { ...state };
    case GET_BY_ID:
      return { ...state, oneOrder: state.order.filter(el=>action.payload===el.id)};
    case CHANGE_ORDER:
      return { ...state, oneOrder:[action.payload]};
    case DELETE_ORDER:
        return { ...state, order: state.order.filter(el=>action.payload!==el.id)};
        case ADD_ORDER:
        return { ...state, order:[action.payload, ...state.order]};
    default:
      return state;
  }
};