"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect } from 'react';

export default function TopNavBar ({
  params,
} : {
  params: {topNavBarTabs: string },
}) {

  useEffect(() =>{
    
    console.log("param", params);
  }, [params])

  return (
    <>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}
