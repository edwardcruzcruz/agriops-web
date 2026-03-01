import { useNavigate } from "react-router-dom";

export const Menu = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        if( localStorage.getItem("token") ){
            localStorage.removeItem("token");
        }
        navigate("/login")
    };
    return (
        <nav>
            <ul>
                <li>Users</li>
                <li onClick={handleLogout}>
                    Logout
                </li>
            </ul>
        </nav>
    )
}
