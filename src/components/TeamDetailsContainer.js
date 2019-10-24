import React from "react";
import TeamDetails from "./TeamDetails";
import { connect } from "react-redux";
import { loadTeam, deleteTeam, updateTeam } from "../actions/teams";
import TeamForm from "./TeamForm"

class TeamDetailsContainer extends React.Component {
  state = {
    editMode: false,
    name: this.props.team.name
  }

  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id));
  }

  onDelete = () => {
    this.props.deleteTeam(this.props.team.id)
    this.props.history.push('/teams')
  }

  onEdit = () => {
    this.setState({
      editMode: true
    })
  }

  onChange = event => {
    this.setState({
      ...this.state.name,
      [event.target.name]: event.target.value
    });
  //  console.log(this.state.name)
  };

  onSubmit = event => {
    event.preventDefault();
   //console.log('team id',this.props.team.id)
   // console.log('state name in onSubmit:', this.state.name)
  this.props.updateTeam(this.props.team.id, this.state.name);
   // console.log('hello')
    this.setState({
      editMode: false
    });
   // this.props.history.push('/teams')
  };


  render() {
    //console.log(this.props.team);
    return (
      <div>
        {this.state.editMode === false ?
          <div> <TeamDetails team={this.props.team} />
            <button onClick={this.onDelete}>Delete team</button>
            <button onClick={this.onEdit}>Edit team</button>
          </div>
            : <TeamForm 
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state} />}
      </div>)
    }
  }
  
const mapStateToProps = state => ({
          team: state.team
      });
      
export default connect(mapStateToProps, {loadTeam, deleteTeam, updateTeam})(TeamDetailsContainer);
