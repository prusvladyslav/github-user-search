import { useSelector } from "react-redux";
import { RequestStatusMessage } from "../../atoms";
import { RootState } from "../../redux/store";

export const GitHubProfile = ({ }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);
    const { login = '', bio = '', avatar_url = '', html_url = '' } = user || {}
    return (
        < >
            {loading === 'pending' && <RequestStatusMessage>Loading...</RequestStatusMessage>}
            {error && <RequestStatusMessage>{error}</RequestStatusMessage>}
            {user && (
                <div className="profile-card">
                    <img src={avatar_url} alt={login} />
                    <p>{login}</p>
                    <p>{bio}</p>
                    <a href={html_url} target="_blank" rel="noopener noreferrer">Profile</a>
                </div>
            )}
        </>
    )
}