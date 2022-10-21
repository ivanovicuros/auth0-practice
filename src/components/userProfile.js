import { useAuth0 } from "@auth0/auth0-react";

function UserProfile (){
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    if(isLoading) {
        return <div>Loading!</div>
    }

    return (
       isAuthenticated && (
        <div>
            <img src={user.picture} alt="no pic" />
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </div>
       )
    )
};

export default UserProfile;