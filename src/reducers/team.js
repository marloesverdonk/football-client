import { FETCH_TEAM_SUCCESS } from "../actions/teams";
import { PLAYER_CREATE_SUCCESS } from "../actions/players"
import { TEAM_UPDATE_SUCCESS } from "../actions/teams"

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_TEAM_SUCCESS:
      return { ...action.payload };
    case PLAYER_CREATE_SUCCESS:
      return { ...state, players: [...state.players, action.payload] }
     case TEAM_UPDATE_SUCCESS:
        return action.team
    
    default:
      return state;
  }
};
