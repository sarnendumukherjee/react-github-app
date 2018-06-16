import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Grid,Row,Col,Image } from 'react-bootstrap';

class UserCard extends Component {
    render() {
        var user = this.props.user? this.props.user.data : null;
        if(!user){
            return null;
        }
        
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            <Image className="avatar-url" alt="Avatar" src={user.avatar_url} circle />
                            <Link to={`/userDetail/${user.login}`}>{user.login}</Link>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Name: {user.name}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Company: {user.company}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Location: {user.location}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Email: {user.email}
                        </Col>
                        <hr/>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Followers: {user.followers}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Following: {user.following}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Member since: {new Date(user.created_at).toLocaleDateString()}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Public repos: {user.public_repos}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Public gists: {user.public_gists}
                        </Col>
                        <hr/>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            Github Profile Url: <a href={user.html_url} target="_blank">{user.name}</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UserCard;