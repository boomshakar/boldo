import React from 'react';
import { Inverted } from '../../../models/propTypes';
import { getTeamMembers, getTeamMembers2, getTeamMembers3 } from '../../../util/constant';

const OurTeam = ({ inverted }: Inverted) => {
  return (
    <section className={`our_team_container container${inverted ? ' inverted' : ''}`}>
      <div className="lead_container">
        <div className="info">
          <h4>Our team</h4>
          <h2>{inverted ? 'The people behind the work' : 'The leadership team'}</h2>
        </div>
        <div className="desc">
          <p>
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
            iteration. Traction stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
      </div>
      <div className="team_members_contain">
        {getTeamMembers.map((member, index) => (
          <div className="team_member" key={index}>
            <div className="team_member_display">
              <img src={member.display} alt="team_member" />
            </div>
            <div className="team_member_info">
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="team_members_contain_inverted">
        <div className="team_members_contain md_vw">
          {getTeamMembers2.map((member, index) => (
            <div className="team_member" key={index}>
              <div className="team_member_display">
                <img src={member.display} alt="team_member" />
              </div>
              <div className="team_member_info">
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team_members_contain disp_row">
          {getTeamMembers3.map((member, index) => (
            <div className="team_member" key={index}>
              <div className="team_member_display">
                <img src={member.display} alt="team_member" />
              </div>
              <div className="team_member_info">
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
