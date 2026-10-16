import { Link } from '@tanstack/react-router';
import { ChevronRight, Gamepad2, Laptop, Smartphone, Tablet } from 'lucide-react';

export const devicePickerItems = [
  { id: 'telephone', label: 'Smartphone', Icon: Smartphone },
  { id: 'tablette', label: 'Tablette', Icon: Tablet },
  { id: 'ordinateur', label: 'Ordinateur', Icon: Laptop },
  { id: 'console', label: 'Console', Icon: Gamepad2 },
] as const;

export function DevicePicker() {
  return (
    <nav className="hero-picker" aria-label="Choisir l’appareil à réparer">
      {devicePickerItems.map(({ id, label, Icon }) => (
        <Link key={id} to="/reparation" search={{ appareil: id }} className="picker-card">
          <span className="picker-icon"><Icon aria-hidden="true" /></span>
          <strong>{label}</strong>
          <ChevronRight aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
}
