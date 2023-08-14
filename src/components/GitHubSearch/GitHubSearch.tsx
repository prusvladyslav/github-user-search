import { FormEvent, useState } from "react";
export const GitHubSearch = ({ mutate, isLoading }: { mutate: (v: string) => void, isLoading: boolean }) => {
    const [username, setUsername] = useState('prusvladyslav');
    const searchUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(username)
    };

    return (
        <form className="search-container" onSubmit={searchUser}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit" disabled={isLoading || username.length === 0}>Search</button>
        </form>
    );
}