'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNewAccount } from "@/features/accounts/hooks/use-new-account"
import { PlusIcon } from "@radix-ui/react-icons"
import { Payment, columns } from "./columns"
import { DataTable } from "@/components/data-table"

const AccountsPage = () => {
    const newAccount = useNewAccount()

    async function getData(): Promise<Payment[]> {
        // Fetch data from your API here.
        return [
            {
                id: "728ed52f",
                amount: 100,
                status: "pending",
                email: "m@example.com",
            },

            // ...
        ]
    }

    const data = [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52d",
            amount: 500,
            status: "pending",
            email: "m@example1.com",
        },
        // ...
    ]



    return (
        <div className=" max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className=" border-none drop-shadow-sm">
                <CardHeader className=" gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle>
                        Accounts page
                    </CardTitle>
                    <Button size={'sm'} onClick={newAccount.onOpen}>
                        <PlusIcon />
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable filterKey='email' columns={columns} data={data} onDelete={() => { }} disabled={false} />
                </CardContent>
            </Card>
        </div>
    )
}
export default AccountsPage