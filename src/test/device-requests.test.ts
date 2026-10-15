import { describe, expect, it } from 'vitest';
import { deviceCategories, getCategory } from '@/lib/device-catalog';
import { requestSchema } from '@/lib/request-schema';
const request = { kind: 'reprise', category: 'console', brand: 'Marque non listée', model: 'Console rétro', fault: 'Ne s’allume plus', description: 'La console ne démarre plus après branchement.', name: 'Client test', email: 'client@example.com', phone: '', consent: true, website: '' };
describe('Périmètre des appareils', () => {
  it('inclut les ordinateurs portables, fixes et assemblés', () => { expect(deviceCategories.map(c => c.id)).toContain('ordinateur'); expect(getCategory('ordinateur').brands).toContain('PC assemblé / sur mesure'); });
  it('inclut les consoles de salon, portables et rétro', () => { const brands = getCategory('console').brands; expect(brands).toContain('Sony / PlayStation'); expect(brands).toContain('Valve / Steam Deck'); expect(brands).toContain('Sega'); });
  it('accepte une marque non listée pour les reprises', () => { expect(requestSchema.parse(request).brand).toBe('Marque non listée'); });
  it('exige une explication du problème de la machine', () => { expect(requestSchema.safeParse({ ...request, description: '' }).success).toBe(false); expect(requestSchema.parse(request).description).toBe('La console ne démarre plus après branchement.'); });
});