import React from 'react';

import classes from '../styles/MeetTheTeam.module.css';

const MeetTheTeam = props => {
  const TeamMap = props.data.map((item, pos) => (
    <div className={classes.TeamMemberCard} key={pos} >
      <p>{item.firstName} {item.lastName}</p>
      <p>{item.title}</p>
      <p>{item.about}</p>
      <img className={classes.TeamImages}
        src={`${process.env.PUBLIC_URL}/media/team/${item.firstName}${item.lastName}.png`}
        // alt={item.firstName}
        alt=""
        // className={props.data.currentlySelectedTeamMember === item.id ? classes.TeamMemberSelected : classes.TeamMember}
        // onClick={() => props.data.onTeamMemberSelection(pos)}
      />
      <br></br><br></br>
      </div>
    )
  );

  return (
    <div className={classes.MeetTheTeam}>
      <h1>Meet the team</h1>
      <div>
        { TeamMap }
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default MeetTheTeam;