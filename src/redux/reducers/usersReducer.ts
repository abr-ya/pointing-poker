import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/usersActions";
import { IUser } from "../../interfaces";

type usersStateType = Readonly<{
  data: IUser[];
  loading: boolean;
}>;

const tempUsers = [
  {
    id: "DVasX8",
    first_name: "David",
    last_name: "Blaim",
    position: "Junior",
    image: "Elon_Musk_2015.jpg",
    is_observer: false,
    is_master: true,
    game: "TVasX8",
  },
  {
    id: "8PykIx",
    first_name: "Dayana",
    last_name: "Ross",
    position: "Junior",
    image: "Elon_Musk_2015.jpg",
    is_observer: false,
    is_master: false,
    game: "TVasX8",
  },
  {
    id: "G7nRXk",
    first_name: "Mark",
    last_name: "Single",
    position: "Engeneer",
    image: "Elon_Musk_2015.jpg",
    is_observer: false,
    is_master: false,
    game: "TVasX8",
  },
  {
    id: "0Uscm9",
    first_name: "Jane",
    last_name: "Ring",
    position: "Engeneer",
    image: "Elon_Musk_2015.jpg",
    is_observer: false,
    is_master: false,
    game: "2",
  },
  {
    id: "SbPQ_k",
    first_name: "Thunder",
    last_name: "User",
    position: "tester",
    image: "milyy-kotik.jpg",
    is_observer: false,
    is_master: true,
  },
  {
    id: "dYbCae",
    first_name: "Thunder2",
    last_name: "User2",
    position: "tester",
    image: "kotik-s-sharikami.jpg",
    is_observer: false,
    is_master: true,
    game: "TVasX8",
  },
  {
    id: "zSkzCj",
    first_name: "tanya",
    last_name: "gordey",
    position: "junior",
    is_observer: true,
    image: "milyy-kotik.jpg",
    is_master: false,
    game: "12345",
  },
  {
    id: "xmW7Tt",
    first_name: "asdf",
    last_name: "zxcv",
    position: "dsf",
    is_observer: false,
    image: "milyy-kotik.jpg",
    is_master: false,
    game: "12345",
  },
  {
    id: "1RbuTY",
    first_name: "test",
    last_name: "test1",
    position: "jun",
    is_observer: false,
    image: "kotik-s-sharikami.jpg",
    is_master: false,
    game: "12345",
  },
];

const movies: usersStateType = {
  data: tempUsers,
  loading: false,
};

export type usersActions = ActionType<typeof actions>;

const usersReducer = (state = movies, action: usersActions): usersStateType => {
  switch (action.type) {
    case getType(actions.setLoading):
      return { ...state, loading: action.payload as boolean };
    // case getType(actions.setCurrentPage):
    //   return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default usersReducer;
