
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { gql, useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import BoutonSubmit from "@/components/ui/BoutonSubmit"

export const AUTH = gql`
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
  const [login] = useMutation(AUTH)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await login({
        variables: { input: data },
      })
      if (response?.data?.loginPlayer) {
        localStorage.setItem("token", response.data.loginPlayer.token)
        localStorage.setItem("player", JSON.stringify(response.data.loginPlayer.player))
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
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button className="text-[#791860] text-center font-bold text-2xl w-full"
          type="button" onClick={() => navigate("/register")}
          >Pas encore de compte ?
        </button>
        <div className="flex justify-center items-center w-full my-20">
          <BoutonSubmit nomBouton="SE CONNECTER" activate={form.formState.isValid} />
        </div>
      </form>
    </Form>
  )   
}

export default LoginForm