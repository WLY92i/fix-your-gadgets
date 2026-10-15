import { createFileRoute } from '@tanstack/react-router';
import { RequestForm } from '@/components/request-form';
import { pageMeta } from '@/lib/page-meta';
export const Route = createFileRoute('/reparation')({
  validateSearch: (search: Record<string, unknown>) => ({ appareil: typeof search.appareil === 'string' ? search.appareil : undefined }),
  head: () => pageMeta('Réparation de smartphones, ordinateurs et consoles', 'Demandez une réparation pour votre téléphone, tablette, ordinateur portable ou fixe et console de salon, portable ou rétro. Toutes marques.'),
  component: RepairPage,
});
function RepairPage() { const { appareil } = Route.useSearch(); return <RequestForm kind="reparation" initialCategory={appareil} />; }