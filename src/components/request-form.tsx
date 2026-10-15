import { useState, type FormEvent } from 'react';
import { Link } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronRight, LockKeyhole, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DeviceIcon } from './device-icon';
import { deviceCategories, getCategory } from '@/lib/device-catalog';
import { requestSchema } from '@/lib/request-schema';
import { submitRequest } from '@/lib/requests.functions';

export function RequestForm({ kind, initialCategory }: { kind: 'reparation' | 'reprise'; initialCategory?: string }) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState(getCategory(initialCategory ?? 'telephone').id);
  const [brand, setBrand] = useState('');
  const [otherBrand, setOtherBrand] = useState('');
  const [model, setModel] = useState('');
  const [fault, setFault] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [reference, setReference] = useState('');
  const send = useServerFn(submitRequest);
  const device = getCategory(category);
  const actualBrand = brand === 'Autre marque' ? otherBrand.trim() : brand;
  const isBuyback = kind === 'reprise';
  function next() {
    setError('');
    if (step === 1 && (!actualBrand || !model.trim())) { setError('Renseignez la marque et le modèle de votre appareil.'); return; }
    if (step === 2 && (!fault || description.trim().length < 10)) { setError('Choisissez le problème et décrivez-le en au moins 10 caractères.'); return; }
    setStep(step + 1);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) { next(); return; }
    const parsed = requestSchema.safeParse({ kind, category, brand: actualBrand, model, fault, description, name, email, phone, consent, website });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? 'Vérifiez les informations saisies.'); return; }
    setPending(true); setError('');
    try {
      const result = await send({ data: parsed.data });
      if (!result.ok) { setError(result.error); return; }
      setReference(result.reference);
    } catch { setError('La demande n’a pas été envoyée. Vérifiez votre connexion et réessayez.'); }
    finally { setPending(false); }
  }
  return <main className="request-page"><div className="container-site">
    <div className="breadcrumb"><Link to="/">Accueil</Link><ChevronRight size={12} /><span>{isBuyback ? 'Reprises' : 'Réparation'}</span></div>
    <div className="request-heading"><div className="eyebrow justify-center">{isBuyback ? 'Une nouvelle vie pour vos appareils' : 'Chaque panne a sa solution'}</div><h1>{isBuyback ? 'Faites reprendre votre appareil.' : 'Quel appareil souhaitez-vous réparer ?'}</h1><p>{isBuyback ? 'Téléphone, tablette, ordinateur ou console. Toutes les marques, même en panne.' : 'Smartphones, tablettes, ordinateurs et consoles : parlez-nous de votre appareil.'}</p></div>
    <div className="form-panel">
      {reference ? <div className="request-success"><div className="success-icon"><CheckCircle2 /></div><h2>Votre demande est enregistrée !</h2><p className="form-subtitle">Référence : <strong>{reference}</strong>. Vos coordonnées ont été transmises avec votre demande.</p><div className="success-summary"><p><strong>{isBuyback ? 'Reprise' : 'Réparation'} :</strong> {device.singular} · {actualBrand} · {model}</p><p><strong>Problème :</strong> {fault}</p><p><strong>Votre description :</strong> {description}</p><p><strong>Contact :</strong> {name} · {email}</p></div><Button asChild variant="hero"><Link to="/">Retour à l’accueil <ArrowRight /></Link></Button></div> : <>
      <div className="form-progress">{['Votre appareil', 'Son état', 'Vos coordonnées'].map((label, index) => <div key={label} className={`progress-item ${step === index + 1 ? 'current' : step > index + 1 ? 'complete' : ''}`}><span className="progress-dot">{step > index + 1 ? <Check size={12} /> : `0${index + 1}`}</span>{label}</div>)}</div>
      <form onSubmit={submit}>
        {step === 1 && <><h2>Votre appareil</h2><p className="form-subtitle">Sélectionnez une catégorie, puis indiquez la marque et le modèle.</p><div className="category-options">{deviceCategories.map(item => <Button type="button" key={item.id} variant="device" aria-pressed={category === item.id} onClick={() => { setCategory(item.id); setBrand(''); setFault(''); }}><DeviceIcon id={item.id} />{item.name}</Button>)}</div><div className="form-fields"><label className="form-field">Marque<select aria-label="Marque" value={brand} onChange={event => setBrand(event.target.value)} required><option value="">Choisir une marque</option>{device.brands.map(item => <option key={item}>{item}</option>)}<option>Autre marque</option></select></label><label className="form-field">Modèle<input value={model} onChange={event => setModel(event.target.value)} maxLength={150} placeholder={category === 'console' ? 'Ex. PlayStation 5, Switch, Mega Drive…' : category === 'ordinateur' ? 'Ex. MacBook Pro, PC fixe assemblé…' : 'Ex. iPhone 14, Galaxy S23…'} required /></label>{brand === 'Autre marque' && <label className="form-field full">Nom de la marque<input value={otherBrand} onChange={event => setOtherBrand(event.target.value)} maxLength={100} placeholder="Indiquez la marque de votre appareil" required /><small>Aucune marque n’est exclue de votre demande.</small></label>}</div></>}
        {step === 2 && <><h2>{isBuyback ? 'Dans quel état est votre appareil ?' : 'Que rencontre votre appareil ?'}</h2><div className="summary-line"><DeviceIcon id={category} /><span>{device.singular} · {actualBrand} · {model}</span></div><p className="form-subtitle">{isBuyback ? 'Précisez son état pour permettre une évaluation adaptée. La reprise reste soumise à l’examen de l’appareil.' : 'Choisissez la panne principale et expliquez ce qui se passe.'}</p><div className="fault-options">{[...(isBuyback ? ['Fonctionne normalement'] : []), ...device.faults].map(item => <Button key={item} type="button" variant="outline" aria-pressed={fault === item} onClick={() => setFault(item)}>{item}</Button>)}</div><label className="form-field">Description du problème ou de l’état<textarea value={description} onChange={event => setDescription(event.target.value)} minLength={10} maxLength={3000} required placeholder="Que se passe-t-il ? Depuis quand ? Décrivez les symptômes, les dommages et les éventuelles réparations déjà réalisées." /><small>{description.length} / 3 000 caractères</small></label></>}
        {step === 3 && <><h2>Vos coordonnées</h2><p className="form-subtitle">Pour vous contacter au sujet de votre {isBuyback ? 'demande de reprise' : 'réparation'}.</p><div className="summary-line"><DeviceIcon id={category} /><span>{actualBrand} · {model}<br /><span className="text-muted-foreground">{fault}</span></span></div><div className="form-fields"><label className="form-field full">Nom et prénom<input autoComplete="name" value={name} onChange={event => setName(event.target.value)} maxLength={100} required /></label><label className="form-field">Adresse email<input type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} maxLength={255} required /></label><label className="form-field">Téléphone (facultatif)<input type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} maxLength={30} /></label></div><label className="hidden" aria-hidden="true">Site web<input tabIndex={-1} autoComplete="off" value={website} onChange={event => setWebsite(event.target.value)} /></label><label className="consent-label"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} required />J’accepte que mes coordonnées et les informations sur mon appareil soient conservées pour traiter cette demande et me recontacter.</label></>}
        {error && <p role="alert" className="form-error">{error}</p>}
        <div className="form-actions">{step > 1 ? <Button type="button" variant="ghost" disabled={pending} onClick={() => { setStep(step - 1); setError(''); }}><ArrowLeft /> Retour</Button> : <span className="text-xs text-muted-foreground">Étape 1 sur 3</span>}<Button type="submit" variant="hero" disabled={pending}>{pending ? 'Enregistrement…' : step < 3 ? 'Continuer' : isBuyback ? 'Envoyer ma demande de reprise' : 'Envoyer ma demande'}<ArrowRight /></Button></div>
      </form></>}
    </div><p className="form-note"><LockKeyhole size={12} />Vos informations restent confidentielles.</p>{isBuyback && <p className="form-note"><RotateCcw size={12} />Aucun prix de reprise n’est garanti avant examen.</p>}
  </div></main>;
}