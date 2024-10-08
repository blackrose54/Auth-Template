'use client'

import { signOut } from "next-auth/react"
import { Button } from "./ui/button";

export default function Logout() {
  return (
    <div>
      <Button type="submit" variant={'destructive'} onClick={()=>signOut()} >
        Sign Out
      </Button>
    </div>
  );
}
