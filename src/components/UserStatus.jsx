function UserStatus({IsLoggedIn}){
    return(
        <div>
            <h2>{IsLoggedIn ? "Welcome Back!" : "Please Log In."}</h2>
        </div>
    )
}
export default UserStatus;