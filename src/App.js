import React from 'react';
import axios from 'axios';
import hat from "./images/hat.png";

class App extends React.Component {
    state = { details: [], error: null }

    componentDidMount() {
        axios.get('https://secret-santa-roan.vercel.app/users/')
            .then(res => {
                console.log('API Response:', res.data);  // Log the response data
                this.setState({
                    details: res.data.users
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                this.setState({
                    error: 'Error fetching data. Please try again later.'
                });
            });
    }


    render() {
        console.log('State:', this.state);  // Log the current state
        const { details, error } = this.state;

        return (
            <div>
                <div class="logo">
                    <img src={hat} alt="1" class="hat" />
                    <h1 class="logo_name">SECRET SANTA</h1>
                    <img src={hat} alt="1" class="hat" /> 
                </div>
                <div class="user_list">
                    <span class="list">Список участников</span>
                    {error && <p>{error}</p>}
                    {details.length > 0 ? (
                        details.map((user, id) => (
                            <div>
                                <div key={id}>
                                    <div class="snow">
                                        <p>Имя: <span class="json_info">{user.username}</span></p>
                                        <p>Почта: <span class="json_info">{user.email}</span></p>
                                        <p>Пол: <span class="json_info">{user.gender}</span></p>
                                    </div>
                                    {/* dudhtdjtd */}
                                </div>     
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            
        )
    }
}

export default App;