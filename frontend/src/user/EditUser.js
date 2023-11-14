import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const [loading, setLoading] = useState(true);

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser().then(() => {
            setLoading(false);
        });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.put(`http://localhost:8888/api/v1/users/${id}`, user);
            navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8888/api/v1/users/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error loading user:", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>

                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email address"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary" disabled={loading}>
                                {loading ? "Updating..." : "Update"}
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/">
                                Cancel
                            </Link>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EditUser;
