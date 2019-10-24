import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS } from "../actions/teams";
import { TEAM_DELETE_SUCCESS } from "../actions/teams"
import { TEAM_UPDATE_SUCCESS } from "../actions/teams"

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TEAMS_FETCHED:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...state, ...action.payload];

    case TEAM_CREATE_SUCCESS:
      return [...state, { ...action.payload }];

    // case 'DELETE_TEAM'
    //   return state.filter() // filter out the team that you deleted

    case TEAM_DELETE_SUCCESS:
      return state.filter(team => team.id !== Number(action.teamId))

  case TEAM_UPDATE_SUCCESS:
  return state.map(team => team.id === action.team.id ? action.team : team )
  //[...state, action.team]

    default:
      return state;
  }
};
