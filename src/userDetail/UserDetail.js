import React, { Component } from 'react';
import axios from 'axios';
import { Grid,Row,Col,Image } from 'react-bootstrap';

class UserDetail extends Component {
    constructor({match}){
      super();
      this.state = {
        userName: match.params.userName,
        user: {},
        publicReposList:[],
        followersList:[]
      }
    }

    componentWillMount() {
      var ctrl = this;
      axios.get('https://api.github.com/users/'+this.state.userName)
      .then(function(response){
          ctrl.setState({user:response.data});
          ctrl.fetchPulicReposAndGists();
      }).catch(function(response){
          alert("Error");
      });
    }

    fetchPulicReposAndGists(){
      var user = this.state.user;
      var ctrl = this;
      axios.get(user.repos_url)
      .then(function(response){
        ctrl.setState({publicReposList:response.data});
      }).catch(function(response){
        alert("Error fetching Repos")
      });
      
      axios.get(user.followers_url)
      .then(function(response){
        ctrl.setState({followersList:response.data});
      }).catch(function(response){
        alert("Error fetching Followers")
      });
    }

    render() {
        var user = this.state.user;
        if(!user){
          return null;
        }
        const publicRepos = this.state.publicReposList.map((publicRepo)=>
          <li key={publicRepo.id}>{publicRepo.name}</li>
        );
        const followers = this.state.followersList.map((follower)=>
          <li key={follower.id}>
          <a href={follower.html_url} target="_blank">{follower.login}</a>
          </li>
        );
        return (
          <div >
            <Grid>
              <Row className="show-grid">
                  <Col xs={6} xsOffset={3}>
                      <Image className="avatar-url" src={user.avatar_url} circle />
                      <span>{user.name}</span>
                  </Col>
              </Row>
              <hr/>
              <Row className="show-grid">
                  <Col xs={6}>
                      <p>List of public Repos: {this.state.publicReposList.length}</p>
                      <br/>
                      <ol>
                        {publicRepos}
                      </ol>
                  </Col>
                  <Col xs={6}>
                      <p>List of Followers: {this.state.followersList.length}</p>
                      <br/>
                      <ol>
                        {followers}
                      </ol>
                  </Col>
              </Row>
            </Grid>
          </div>
        );
    }
}

export default UserDetail;