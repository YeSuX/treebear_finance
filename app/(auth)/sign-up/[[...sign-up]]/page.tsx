import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs"
import { UpdateIcon } from "@radix-ui/react-icons"
import Image from 'next/image'

const SignUpPage = () => {
  return (
    <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" h-full flex flex-col items-center justify-center">
        <ClerkLoaded>
          <SignUp path="/sign-up" />

        </ClerkLoaded>
        <ClerkLoading>
          <UpdateIcon className=" animate-spin text-neutral-500" />
        </ClerkLoading>
      </div>
      <div className=" h-full bg-blue-500 hidden lg:flex flex-col items-center justify-center">
        <Image src={'/logo.svg'} alt="Logo" width={100} height={100} />
        <h1 className=" text-white font-bold text-3xl">
          Treebear Finance
        </h1>
      </div>
    </div>
  )
}

export default SignUpPage