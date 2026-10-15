import { Smartphone, Tablet, Laptop, Gamepad2 } from 'lucide-react';
export function DeviceIcon({ id, className }: { id: string; className?: string }) {
  const Icon = id === 'telephone' ? Smartphone : id === 'tablette' ? Tablet : id === 'ordinateur' ? Laptop : Gamepad2;
  return <Icon className={className} strokeWidth={1.35} aria-hidden="true" />;
}