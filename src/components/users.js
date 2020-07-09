import React from "react";
import { Card } from "reactstrap";
import GitHubCalendar from "react-github-calendar";
class User extends React.Component {
  render(props) {
    console.log(this.props.data);

    // console.log(mapData, "follower data");
    return (
      <div>
        {this.props.data.map((data) => {
          return (
            <Card style={{ margin: "auto", width: "50%", marginTop: "10px" }}>
              <img
                src={data.avatar_url}
                alt="No img"
                style={{ width: "25%", borderRadius: "50%", margin: "auto" }}
              />
              <p style={{ margin: "auto" }}>Name: {data.name}</p>
              <p style={{ margin: "auto" }}>Bio: {data.bio}</p>
              <p style={{ margin: "auto" }}>followers: {data.followers}</p>
              <p style={{ margin: "auto" }}>Following: {data.following}</p>
              <GitHubCalendar username={data.login} />
            </Card>
          );
        })}
      </div>
    );
  }
}

export default User;
