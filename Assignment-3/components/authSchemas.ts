import { z } from 'zod';

const emailField = z.string().min(1, 'Email is required').email('Invalid email format');
const passwordField = z.string().min(1, 'Password is required').min(8, 'Must be at least 8 characters');

export const signInSchema = z.object({
  email: emailField,
  password: passwordField,
});

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, 'Full name is required'),
    email: emailField,
    password: passwordField,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type SignInData = z.infer<typeof signInSchema>;
export type SignUpData = z.infer<typeof signUpSchema>;
