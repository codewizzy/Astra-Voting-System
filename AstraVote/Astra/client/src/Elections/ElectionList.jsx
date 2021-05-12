import React, { Component } from 'react';
import { ipfsFetcher } from '../ipfsStore';
import SingleElection from './SingleElection';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import '../App.css'
import '../index.css'

export default class ElectionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elections: null,
            electionHash: null,
            liveElections: [],
            CRElections: [],
            otherElections: []
        }

    }

   

    render() {
      
        return (
            <div>
                <Grid
                    className="HomePageDiv"
                    container
                >
                    <Grid container item xs={3}>
                        <div className="BrandLogo"></div>
                    </Grid>
                    <Grid container item xs={9}>
                        <div className="IndianEmblem" />

                        <div className="LandingBtnDiv">
                            <button
                                className="LandingBtn"
                                onClick={() => this.props.updateHomeState(1, null)}
                            >Organizer</button>
                            <button
                                className="LandingBtn"
                                onClick={() => this.props.updateHomeState(2, null)}
                            >Candidate</button>
                            <button
                                className="LandingBtn"
                                onClick={() => this.props.updateHomeState(7, null)}>
                                Election List
                </button>
                        </div>


                    </Grid>
                    <Grid item xs={12}>
                        <div className="leftImg"></div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="LandingText"></div>
                    </Grid>

                </Grid>
            </div>
        )
    }
}