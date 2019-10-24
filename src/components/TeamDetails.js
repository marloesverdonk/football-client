import React from "react";
import CreatePlayerFormContainer from './CreatePlayerFormContainer'

function TeamDetails(props) {
  if (!props.team.name) return "Loading";

  return (
    <div>
      {props.team.name}
      {/* <ul>
        {props.team.players.map(player => {
          return (
            <li>
              {player.number} : {player.name}
            </li>
          );
        })}
      </ul> */}
      <CreatePlayerFormContainer/>
    </div>
  );
}

export default TeamDetails;
