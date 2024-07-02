'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNewAccount } from "@/features/accounts/hooks/use-new-account"
import { PlusIcon, ReloadIcon } from "@radix-ui/react-icons"
import { columns } from "./columns"
import { DataTable } from "@/components/data-table"
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts"
import { Skeleton } from "@/components/ui/skeleton"

const AccountsPage = () => {
    const newAccount = useNewAccount()
    const accountsQuery = useGetAccounts();
    const accounts = accountsQuery.data || []

    if (accountsQuery.isLoading) {
        return (
            <div className=" max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
                <Card className=" border-none drop-shadow-sm">
                    <CardHeader>
                        <Skeleton className=" h-8 w-48" />
                    </CardHeader>
                    <CardContent>
                        <div className=" h-[300px] w-full flex items-center justify-center">
                            <ReloadIcon className=" size-6 text-slate-300 animate-spin"/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

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
                    <DataTable filterKey='name' columns={columns} data={accounts} onDelete={() => { }} disabled={false} />
                </CardContent>
            </Card>
        </div>
    )
}
export default AccountsPage