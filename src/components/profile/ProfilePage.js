import React, {Component} from 'react';
import {ProfileComponent} from "./ProfileComponent";
import './ProfileStylesheet.css';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            address:{
                lat:20.1324695,
                lng:-98.8009663,
                text:''
            }
        }
    }

    onDrag = (e) => {
        let {address} = this.state;
        address.lat = e.latLng.lat();
        address.lng = e.latLng.lng();

        const googleMaps = window.google.maps;
        const geocoder = new googleMaps.Geocoder();
        geocoder.geocode({'location': address},
            r=>{
                console.log(r);
                address.text = r[0].formatted_address;
            }
        );
        console.log(geocoder);


        this.setState({address});
        //   console.log(this.state.address);
        // console.log(e);
    };

    handleClose = () => {
        this.setState({modalOpen: false});
    };

    handleOpen = () => {
        this.setState({modalOpen: true});
    };

    render() {
        const {modalOpen, address} = this.state;
        return (
            <div className="Main-profile">
                <ProfileComponent
                    open={modalOpen}
                    address={address}
                    onDrag={this.onDrag}
                    handleClose={this.handleClose}
                    handleOpen={this.handleOpen}
                />
            </div>
        );
    }
}

export default ProfilePage;