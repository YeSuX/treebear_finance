import Header from "@/components/header"
import React from "react"

interface IProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: IProps) => {
    return (
        <>
            <Header />
            <div>
                123
            </div>
            <div className=" px-3 lg:px-14">{children}</div>
        </>
    )
}
export default DashboardLayout