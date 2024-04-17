import { FC } from "react";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

interface pageProps {}

const Page:FC<pageProps>=({})=>{
  return <div className="flex items-center justify-center">
     <LoginLink>Sign in</LoginLink>
    <RegisterLink>Sign up</RegisterLink>
  </div>
}

export default Page;