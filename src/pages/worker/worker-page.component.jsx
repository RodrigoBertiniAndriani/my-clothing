import React from 'react';
import WorkerItem from '../../components/worker-item/worker-item.component';

import './worker-page.styles.scss';

class WorkerPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dataUser: []
        }
    }

    componentDidMount() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTQxMzM5NjksInVzZXJfbmFtZSI6InJvZHJpZ29AZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfT1BFUkFUT1IiXSwianRpIjoiOGU2MDhhNDctZGIwNy00MGEyLTlkNmMtYmIxOTllMTk1YTRjIiwiY2xpZW50X2lkIjoibXlhcHBjbGllbnQxMjMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.D6o0Nusly0cAA0ki5rKVXIwCxny5Zb3YyuRRefZiDHo');

        fetch('http://localhost:8765/odk-worker/workers', {
            method: 'GET',
            headers: myHeaders,
        })
        .then(response => 
            response.json()
        )
        .then(res => 
            this.setState({...this.state, dataUser: res})
        );
    }
    
    render(){
        console.log(this.state.dataUser);
        return(
            this.state.dataUser.map((user) => 
                <WorkerItem 
                    key={user.id_worker} 
                    user={user}
                />
            )
        )       
    }
}

export default WorkerPage;