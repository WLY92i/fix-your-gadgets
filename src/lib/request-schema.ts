import { z } from 'zod';
export const requestSchema = z.object({
  kind: z.enum(['reparation', 'reprise']),
  category: z.enum(['telephone', 'tablette', 'ordinateur', 'console']),
  brand: z.string().trim().min(1, 'Indiquez la marque.').max(100),
  model: z.string().trim().min(1, 'Indiquez le modèle.').max(150),
  fault: z.string().trim().min(1, 'Sélectionnez un problème.').max(100),
  description: z.string().trim().min(10, 'Décrivez le problème en au moins 10 caractères.').max(3000),
  name: z.string().trim().min(2, 'Indiquez votre nom.').max(100),
  email: z.string().trim().email('Indiquez une adresse email valide.').max(255),
  phone: z.string().trim().max(30),
  consent: z.literal(true, { errorMap: () => ({ message: 'Votre accord est nécessaire pour traiter la demande.' }) }),
  website: z.string().max(0),
});