import { useState } from 'react';
import { Check, Search, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getModels } from '@/lib/model-catalog';

export function ModelPicker({ category, brand, value, onChange }: { category: string; brand: string; value: string; onChange: (model: string) => void }) {
  const [query, setQuery] = useState('');
  const [manual, setManual] = useState(false);
  const models = getModels(category, brand);
  const filtered = models.filter(model => model.name.toLocaleLowerCase('fr').includes(query.trim().toLocaleLowerCase('fr')));
  const freeEntry = manual || models.length === 0;
  return <div className="model-picker">
    <div className="model-picker-heading"><h3>Modèle</h3>{models.length > 0 && <span>{models.length} modèles</span>}</div>
    {models.length > 0 && <>
      <label className="model-search"><Search size={16} /><input aria-label="Rechercher un modèle" value={query} onChange={event => setQuery(event.target.value)} placeholder="Rechercher un modèle…" /></label>
      <div className="model-grid" aria-label="Modèles disponibles">
        {filtered.map(model => <Button type="button" variant="outline" key={model.name} className="model-option" aria-pressed={!manual && value === model.name} onClick={() => { setManual(false); onChange(model.name); }}>
          <div className="model-image"><img src={model.image} alt={model.name} loading="lazy" width={160} height={140} /></div>
          <span className="model-name">{model.name}</span>
          {!manual && value === model.name && <span className="model-selected"><Check size={14} /></span>}
        </Button>)}
      </div>
      {filtered.length === 0 && <p className="form-subtitle">Aucun modèle ne correspond à cette recherche.</p>}
      <Button type="button" variant="ghost" className="manual-model" aria-pressed={manual} onClick={() => { setManual(true); onChange(''); }}><PenLine size={14} />Mon modèle n’est pas dans la liste</Button>
    </>}
    {freeEntry && <label className="form-field">Nom exact du modèle<input aria-label="Modèle" value={value} onChange={event => onChange(event.target.value)} maxLength={150} required placeholder="Indiquez le modèle de votre appareil" /></label>}
    {!freeEntry && value && <p className="model-choice"><Check size={14} />{value}</p>}
  </div>;
}