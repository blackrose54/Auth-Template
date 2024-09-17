'use client'

import { toggleTFA } from "@/actions/auth";
import { Switch } from "@/components/ui/switch";
import React from "react";

function TFAswitch({twoFactorEnabled,email}:{twoFactorEnabled:boolean,email:string}) {
  return (
    <div className=" flex justify-between items-center gap-10">
      <p>Enable Two factor Authentication.</p>
      <Switch checked={twoFactorEnabled} onCheckedChange={()=>toggleTFA(email)} />
    </div>
  );
}

export default TFAswitch;
