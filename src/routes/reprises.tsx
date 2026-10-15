import { createFileRoute } from '@tanstack/react-router';
import { RequestForm } from '@/components/request-form';
import { pageMeta } from '@/lib/page-meta';
export const Route = createFileRoute('/reprises')({ head: () => pageMeta('Reprises toutes marques', 'Demandez la reprise de votre téléphone, tablette, ordinateur ou console, toutes marques. Décrivez le problème ou l’état de votre appareil.'), component: BuybackPage });
function BuybackPage() { return <RequestForm kind="reprise" />; }