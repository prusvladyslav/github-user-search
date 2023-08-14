import { GitHubUserResponse } from "../../api/githubAPI"
import { RequestStatusMessage } from "../../atoms"

export const GitHubProfile = ({ isLoading, isError, user }: { isLoading: boolean, isError: boolean, user?: GitHubUserResponse }) => {
    const { login = '', bio = '', avatar_url = '', html_url = '' } = user || {}

    return (
        < >
            {isLoading && <RequestStatusMessage>Loading...</RequestStatusMessage>}
            {isError && <RequestStatusMessage>Something went wrong</RequestStatusMessage>}
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