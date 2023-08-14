import axios from "axios";
import { useMutation } from "react-query";

export interface GitHubUserResponse {
    avatar_url: string;
    login: string;
    bio: string;
    html_url: string;
}
export interface ErrorResponse {
    message: string;
}

const BASE_URL = "https://api.github.com";

export const useGitHubUserMutation = () => {
    return useMutation(async (username: string): Promise<GitHubUserResponse> => {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    });
};