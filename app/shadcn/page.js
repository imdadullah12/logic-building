'use client'
import { ModeToggle } from "@/components/theme-switcher"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const ShadCn = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    setTimeout(() => {
        setIsLoaded(true)
    }, 2000);


    return (
        <div className="m-3 max-w-[40%]">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>
            <h1>He there! Welcome</h1>
            <ModeToggle />
            <Input />
            <Button variant="destructive">Imdad</Button>

            {isLoaded ? <Card>
                <CardHeader>
                    <CardTitle>Registration Form</CardTitle>
                    <CardDescription>Submit your details to register yourself</CardDescription>
                </CardHeader>
                <CardContent >
                    <Input type="text" placeholder="Name" className="mb-2 border-white" />
                    <Input type="email" placeholder="Email" className="mb-2 border-white" />
                    <Input type="number" placeholder="Phone" className="mb-2 border-white" />
                    <Input type="date" placeholder="Phone" className="mb-2 border-white" />
                </CardContent>
                <CardFooter className="gap-2 justify-end">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit</Button>
                </CardFooter>

            </Card> : (
                <Card>
                    <div className="flex flex-col space-y-3 p-4">
                        <Skeleton className="h-[125px]  rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 " />
                            <Skeleton className="h-4 " />
                        </div>
                    </div>
                </Card>
            )}

            <Dialog>
                <DialogTrigger>Delete</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Yes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>


    )
}

export default ShadCn
