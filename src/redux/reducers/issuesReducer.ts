import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/usersActions";
import { IIssue } from "../../components/Issue/Issue";

type issuesStateType = Readonly<{
  data: IIssue[];
  loading: boolean;
}>;

const tempIssues: IIssue[] = [
  { issueText: "1", priority: "1", id: 1 },
  { issueText: "2", priority: "3", id: 2 },
  { issueText: "4", priority: "5", id: 3 },
  { issueText: "6", priority: "7", id: 4 },
  { issueText: "8", priority: "9", id: 5 },
];

const initialState: issuesStateType = {
  data: tempIssues,
  loading: false,
};

export type issuesActions = ActionType<typeof actions>;

const usersReducer = (
  state = initialState,
  action: issuesActions,
): issuesStateType => {
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
