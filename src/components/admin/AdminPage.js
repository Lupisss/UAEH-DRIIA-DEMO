import React, {Component} from 'react';
import {AdminComponent} from "./AdminComponent";

const fakeData = [
    {id: '244755', fullName: 'Miguel Rafael González Durón', college: 'MSSU' },
    {id: '244284', fullName: 'Guadalupe Reyes Delgadillo', college: 'Camp College' },
    {id: '345637', fullName:  'Rafael González Reyo', college: 'University of Texas At Arlington' },
    {id: '123456', fullName: 'Arnold Azael Bautista Jimenez', college: 'Some college at Germany' },
    {id: '897832', fullName: 'Some Name Some Last Name', college: 'Another College' }
];

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    render() {
        const {search} = this.state;
        let items = fakeData.slice();
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.fullName)|| regEx.test(item.id) || regEx.test(item.college));
        return (
            <div className="Main-admin">
                <AdminComponent search={search} onChange={this.handleChange} data={items}/>
            </div>
        );
    }
}

export default AdminPage;