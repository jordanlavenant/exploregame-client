import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton } from "@/components/ui/select";
import { gql, useMutation, useQuery } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import bcrypt from 'bcryptjs';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import BoutonSubmit from "@/components/ui/BoutonSubmit";
import { color } from "framer-motion";

export const REGISTER = gql`
  mutation createPlayer($input: CreatePlayerInput!) {
    createPlayer(input: $input) {
        id
        firstName
        lastName
        email
    }
  }
`

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      id
      name
    }
  }
`


export const GET_GENRES = gql`
  query getGenders {
    genders {
      id
      gender
    }
  }
`

interface FormSchema {
  firstName: string;
  lastName: string;
  genderId: string;
  email: string;
  hashedPassword: string;
  departmentId: string;
}

const formSchema: z.ZodSchema<FormSchema> = z.object({
  firstName: z.string().min(1, {
    message: 'Le prénom est requis',
  }),
  lastName: z.string().min(1, {
    message: 'Le nom est requis',
  }),
  genderId: z.string().min(1, {
    message: 'Le genre est requis',
  }),
  email: z.string().email({
    message: 'Entrer une adresse email valide',
  }),
  hashedPassword: z.string().min(6, {
    message: 'Le mot de passe doit contenir au moins 6 caractères',
  }),
  departmentId: z.string().min(1, {
    message: 'La filière est requise',
  }),
})

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [register] = useMutation(REGISTER);
  const { data: departmentsData } = useQuery(GET_DEPARTMENTS);
  const { data: genresData } = useQuery(GET_GENRES);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      data.hashedPassword = await bcrypt.hash(data.hashedPassword, 10);
      const response = await register({
        variables: { input: data },
      })
      if (response?.data?.createPlayer) {
        toast.success("Inscription réussie");
        navigate("/login");
      }
    } catch (err) {
      console.error("Erreur d'inscription:", err);
      if (err instanceof Error) {
        toast.error(`Erreur d'inscription: ${err.message}`);
      } else {
        toast.error("Erreur d'inscription");
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genderId"
          render={({ field }) => (
            <FormItem style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Genres</SelectLabel>
                      {genresData?.genders?.map((genre: any) => (
                        <SelectItem key={genre.id} value={genre.id}>
                          {genre.gender}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="departmentId"
          render={({ field }) => (
            <FormItem style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FormControl>
              <Select {...field}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez une filière" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filières</SelectLabel>
                    {departmentsData?.departments.map((department: any) => (
                      <SelectItem key={department.id} value={department.id}>
                        {department.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hashedPassword"
          render={({ field }) => {
            const [showPassword, setShowPassword] = useState(false);   
            return (
              <FormItem style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                    }}
                  >
                    {showPassword ? (
                      <EyeOff size={32} style={{ color: "#9ca3af" }} />
                    ) : (
                      <Eye size={32} style={{ color: "#9ca3af"}} />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <button className="text-[#791860] text-center font-bold text-2xl w-full"
          type="button" onClick={() => navigate("/login")}
          >Déjà un compte ?
        </button>
        <div className="flex justify-center items-center w-full my-20">
          <BoutonSubmit nomBouton="INSCRIPTION" activate={form.formState.isValid} />
        </div>
      </form>
    </Form>
  )   
}

export default RegisterForm
