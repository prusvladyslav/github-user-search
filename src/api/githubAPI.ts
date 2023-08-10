export interface GitHubUserResponse {
    avatar_url: string;
    login: string;
    bio: string;
    html_url: string;
}

const BASE_URL = "https://api.github.com";

export async function fetchGitHubUser(username: string): Promise<GitHubUserResponse> {
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
        throw response.status;
    }

    return response.json();
}