import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser().then(() => {
            console.log('User loaded successfully!');
        });
    }, []);

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8888/api/v1/users/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error loading user:", error);
            // You may want to handle this error, e.g., redirect to an error page
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of User ID: {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b> {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Username:</b> {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b> {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;
