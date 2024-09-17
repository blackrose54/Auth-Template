import { auth } from "@/auth";
import Logout from "@/components/signOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Session } from "next-auth";
import TFAswitch from "./_components/TFAswitch";

export default async function Dashboard() {
  const { user } = (await auth()) as Session;
  const istwofactorenabled = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      twoFactorEnabled: true,
    },
  });

  if (!user || !user.email) return;
  
  return (
    <main className=" h-screen w-screen flex items-center justify-center">
      <div className=" rounded-lg border-border border-2 p-10 space-y-8">
        <Avatar className=" mx-auto h-20 w-20 cursor-pointer">
          <AvatarImage src={user.image || ""} alt="logo" />
          <AvatarFallback className=" uppercase text-5xl bg-primary text-primary-foreground">
            {user.name?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className=" space-y-2">
          <h1 className=" text-4xl font-bold">{user.name}</h1>
          <h4 className=" text-lg">{user.email}</h4>
        </div>

      {user.provider === "credentials" && <TFAswitch
          email={user.email}
          twoFactorEnabled={istwofactorenabled?.twoFactorEnabled ?? false}
        />}
        <div className=" flex gap-x-4">
          <Logout />
          <a href={"/auth/reset"}>
            <Button variant={"outline"}>Reset Password</Button>
          </a>
        </div>
      </div>
    </main>
  );
}
