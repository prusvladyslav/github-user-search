import { ReactNode } from "react"

export const RequestStatusMessage = ({ children }: { children: ReactNode }) => {
    return (
        <p className="request-status">
            {children}
        </p>
    )
}