import { useGitHubUserMutation } from "../../api/githubAPI";
import { GitHubProfile, GitHubSearch } from "../../components"

export const Main = ({ }) => {
    const { mutate, isLoading, data, isError } = useGitHubUserMutation();
    return (
        <>
            <GitHubSearch mutate={mutate} isLoading={isLoading} />
            <GitHubProfile isError={isError} user={data} isLoading={isLoading} />
        </>
    )
}