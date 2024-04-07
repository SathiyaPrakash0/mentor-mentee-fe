import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   

import { useEffect } from "react";

import {SignInForm, SignUpForm} from "../../components/AuthForm/AuthForm";

import lBG from "../../asserts/img/authBG.png";

export default function Auth({page}) {
    
    useEffect(()=>{},[page]);

    const data = [
      {
        label: "Sign Up",
        value: "register",
        desc: <SignUpForm />,
      },
      {
        label: "Sign In",
        value: "login",
        desc: <SignInForm />,
      },
    ];
   
    return (
     <div className="w-screen h-[76vh]" style={{backgroundImage:`url(${lBG})`,backgroundSize:"cover"}}>
        <Tabs value={page || "login"} className="w-10/12 mx-auto py-7">
            <TabsHeader>
            {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                {label}
                </Tab>
            ))}
            </TabsHeader>
            <TabsBody>
            {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                {desc}
                </TabPanel>
            ))}
            </TabsBody>
        </Tabs>
     </div>
    );
}