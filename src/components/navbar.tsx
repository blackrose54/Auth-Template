import { auth } from "@/auth";
import { Session } from "next-auth";
import Link from "next/link";
import { ModeToggle } from "./themebutton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

async function Navbar() {
  const session = (await auth()) as Session;

  return (
    <nav className=" flex items-center justify-between p-4">
      <div className=" flex gap-4">
        <Link href="/">
          <Button variant={"link"}>Home</Button>
        </Link>
        <Link href="/about">
          <Button variant={"link"}>About</Button>
        </Link>
        <Link href="/contact">
          <Button variant={"link"}>Contact</Button>
        </Link>
      </div>
      <div className=" flex items-center gap-4">
        <ModeToggle />
        {session?.user ? (
          <Link href="/dashboard">
            <Avatar className=" cursor-pointer">
              <AvatarImage src={session.user.image ?? ""} alt="logo" />
              <AvatarFallback className=" uppercase text-xl bg-primary text-primary-foreground">
                {session.user.name?.[0]}
              </AvatarFallback>
            </Avatar>
          </Link>
        ):(
          <Link href={'/auth/sign-in'}><Button>Login</Button></Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
