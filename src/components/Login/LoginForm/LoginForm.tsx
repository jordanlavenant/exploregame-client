import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { gql, useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

export const QUERY = gql`
mutation Login($input: LoginPlayerInput!) {
  loginPlayer(input: $input) {
    token
    player {
      id
      firstName
      lastName
      email
    }
  }
}
`

const formSchema = z.object({
  email: z.string().email({
    message: 'Entrer une adresse email valide',
  }),
  password: z.string().min(1, {
    message: 'Le mot de passe est requis',
  }),
})

const LoginForm = () => {
  const navigate = useNavigate()
  const [login] = useMutation(QUERY)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await login({
        variables: { input: data },
      })
      if (response?.data?.loginPlayer?.token) {
        localStorage.setItem("token", response.data.loginPlayer.token)
        navigate("/")
      }
    } catch (err) {
      console.error("Erreur de connexion:", err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>Enter your email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>Enter your password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )   
}

export default LoginForm