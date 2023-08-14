import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { clearState, getUser } from "../../redux/userSlice";

export const GitHubSearch = ({ }) => {
    const [username, setUsername] = useState('prusvladyslav');
    const dispatch: AppDispatch = useDispatch();
    const searchUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(clearState());
        dispatch(getUser(username));
    };
    const loading = useSelector((state: RootState) => state.user.loading);

    return (
        <form className="search-container" onSubmit={searchUser}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit" disabled={loading === 'pending'}>Search</button>
        </form>
    );
}