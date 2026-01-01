'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form, FormControl, FormField, FormItem,
  FormLabel, FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
  user: any
  onUpdate: any
}

export default function ProfileForm({ user, onUpdate }: Props) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  })

  const handleSubmit = async (values: any) => {
    setIsLoading(true)
    await onUpdate(values)
    setIsLoading(false)
  }

  useEffect(() => {
    form.reset({ name: user?.name, email: user?.email })
  }, [user])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-6">

        {/* NAME FIELD */}
        <FormField
          name="name"
          control={form.control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Full name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* EMAIL FIELD */}
        <FormField
          name="email"
          control={form.control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Email" disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading
            ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving</>
            : "Save User Settings"}
        </Button>

      </form>
    </Form>
  )
}
