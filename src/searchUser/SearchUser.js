import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

import UserCard from '../userCard/UserCard';

import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Collapse, Well } from 'react-bootstrap';

class SearchUser extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
          value: '',
          isCardShown: false,
          searchUserResponse: null
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length >= 3) return 'success';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    onAddClick(e){
        if(e){
            e.preventDefault();
        }
        var ctrl = this;
        if(this.state.value.length>=3){
            axios.get('https://api.github.com/users/'+this.state.value)
            .then(function(response){
                ctrl.setState({isCardShown:true});
                ctrl.setState({searchUserResponse:response});
            }).catch(function(response){
                alert("Error");
            });
        }
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Github App, created by Sarnendu Mukherjee</h1>
            </header>
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} xsOffset={3}>
                            <form onSubmit={(e)=>this.onAddClick(e)}>
                                <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                                >
                                <ControlLabel>Please Enter a Username:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter username"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter atleast 3 letters.</HelpBlock>
                                </FormGroup>
                                <Button bsStyle="primary" onClick={()=>this.onAddClick()}>Add</Button>
                            </form>
                            <hr/>
                            
                        </Col>
                    </Row>
                </Grid>
                <Collapse in={this.state.isCardShown}>
                    <div>
                        <Well>
                            <UserCard user={this.state.searchUserResponse}></UserCard>
                        </Well>
                    </div>
                </Collapse>
            </div>
          </div>
        );
    }
}

export default SearchUser;