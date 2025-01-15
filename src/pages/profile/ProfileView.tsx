import {userProfile} from "../../constants/userProfile.ts";

const ProfileView = () => {
    return (
        <>
            <h1>Profile</h1>
            <p>{userProfile.name.firstName} {userProfile.name.lastName}</p>
            <p>{userProfile.username}</p>
            <p>{userProfile.email}</p>


        </>
    )
}

export default ProfileView;
