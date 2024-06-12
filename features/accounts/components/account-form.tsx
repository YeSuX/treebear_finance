import { insertAccountSchema } from "@/db/schema"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { } from '@hono/zod-validator'
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { TrashIcon } from "@radix-ui/react-icons"

const formSchema = insertAccountSchema.pick({
    name: true
})

type FormValues = z.input<typeof formSchema>

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete: () => void;
    disabled?: boolean
}

const AccountForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled
}: Props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues
    })

    const handleSubmit = (values: FormValues) => {
        onSubmit(values)
    }

    const handleDelete = () => {
        onDelete?.();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className=" space-y-4 pt-4">
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    placeholder="e.g. Cash, Bank, Credit Card"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className=" w-full" disabled={disabled}>
                    {
                        id ? 'Save changes' : 'Create account'
                    }
                </Button>
                {!!id && <Button disabled={disabled} variant={'secondary'} onClick={handleDelete} className="w-full">
                    <TrashIcon className="size-4 mr-2" />
                    Delete account
                </Button>}
            </form>
        </Form>
    )
}
export default AccountForm