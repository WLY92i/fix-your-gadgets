export type DeviceFault = {
  id: string;
  label: string;
};

export type Brand = {
  id: string;
  name: string;
  isMainstream: boolean;
};

export type DeviceCategory = {
  id: string;
  label: string;
  brands: Brand[];
  commonFaults: DeviceFault[];
};

export const REPAIR_CATALOGUE: DeviceCategory[] = [
  {
    id: "smartphones",
    label: "Smartphones",
    brands: [
      { id: "apple", name: "Apple (iPhone)", isMainstream: true },
      { id: "samsung", name: "Samsung", isMainstream: true },
      { id: "google", name: "Google (Pixel)", isMainstream: true },
      { id: "huawei", name: "Huawei", isMainstream: true },
      { id: "xiaomi", name: "Xiaomi", isMainstream: true },
      { id: "oppo", name: "Oppo", isMainstream: true },
      { id: "oneplus", name: "OnePlus", isMainstream: false },
      { id: "sony", name: "Sony", isMainstream: false },
      { id: "motorola", name: "Motorola", isMainstream: false },
      { id: "nokia", name: "Nokia", isMainstream: false },
      { id: "asus", name: "Asus", isMainstream: false },
      { id: "realme", name: "Realme", isMainstream: false },
      { id: "vivo", name: "Vivo", isMainstream: false },
      { id: "fairphone", name: "Fairphone", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "screen", label: "Écran cassé / tactile défaillant" },
      { id: "battery", label: "Batterie (autonomie faible / gonflement)" },
      { id: "charging", label: "Connecteur de charge / Port USB-C/Lightning" },
      { id: "water", label: "Dommages liquides / Oxydation" },
      { id: "camera", label: "Appareil photo (lentille cassée / focus)" },
      { id: "audio", label: "Microphone / Haut-parleur / Prise Jack" },
      { id: "network", label: "Problème Réseau / Wi-Fi / Bluetooth" },
      { id: "buttons", label: "Boutons (Volume, Power, Home)" },
    ],
  },
  {
    id: "tablets",
    label: "Tablettes",
    brands: [
      { id: "apple-ipad", name: "Apple (iPad)", isMainstream: true },
      { id: "samsung-tab", name: "Samsung (Galaxy Tab)", isMainstream: true },
      { id: "microsoft-surface", name: "Microsoft (Surface)", isMainstream: true },
      { id: "lenovo", name: "Lenovo", isMainstream: false },
      { id: "amazon", name: "Amazon (Fire)", isMainstream: false },
      { id: "huawei-tab", name: "Huawei (MatePad)", isMainstream: false },
      { id: "remarkable", name: "reMarkable", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "screen", label: "Écran brisé / LCD noir" },
      { id: "battery", label: "Batterie hors service" },
      { id: "charging", label: "Port de charge endommagé" },
      { id: "chassis", label: "Châssis tordu / plié" },
      { id: "software", label: "Blocage logiciel / Bootloop" },
    ],
  },
  {
    id: "computers",
    label: "Ordinateurs (Laptops & Desktops)",
    brands: [
      { id: "apple-mac", name: "Apple (MacBook, iMac, Mac mini)", isMainstream: true },
      { id: "dell", name: "Dell", isMainstream: true },
      { id: "hp", name: "HP", isMainstream: true },
      { id: "lenovo-pc", name: "Lenovo", isMainstream: true },
      { id: "asus-pc", name: "Asus", isMainstream: true },
      { id: "acer", name: "Acer", isMainstream: true },
      { id: "msi", name: "MSI", isMainstream: false },
      { id: "razer", name: "Razer", isMainstream: false },
      { id: "alienware", name: "Alienware", isMainstream: false },
      { id: "custom", name: "PC Sur Mesure (Custom Build)", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "storage", label: "Disque dur / SSD (Lenteur, perte de données)" },
      { id: "ram", label: "Mémoire vive (Écran bleu, crashs)" },
      { id: "cooling", label: "Surchauffe / Ventilateur bruyant" },
      { id: "keyboard", label: "Clavier / Trackpad défectueux" },
      { id: "hinge", label: "Charnières cassées" },
      { id: "psu", label: "Alimentation / Batterie" },
      { id: "gpu", label: "Carte graphique (Artefacts, écran noir)" },
    ],
  },
  {
    id: "consoles",
    label: "Consoles de Salon & Portables",
    brands: [
      { id: "sony-ps", name: "Sony (PlayStation 4/5)", isMainstream: true },
      { id: "microsoft-xbox", name: "Microsoft (Xbox One/Series)", isMainstream: true },
      { id: "nintendo-switch", name: "Nintendo (Switch / OLED / Lite)", isMainstream: true },
      { id: "nintendo-retro", name: "Nintendo Rétro (NES, SNES, N64, GC, Wii)", isMainstream: false },
      { id: "sega", name: "Sega (Master System, Mega Drive, Dreamcast)", isMainstream: false },
      { id: "handheld-retro", name: "Portable Rétro (GameBoy, DS, PSP, Vita)", isMainstream: false },
      { id: "steam-deck", name: "Steam Deck / ASUS ROG Ally", isMainstream: false },
      { id: "atari", name: "Atari", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "hdmi", label: "Port HDMI endommagé" },
      { id: "drift", label: "Joystick Drift (Joy-Con, DualSense)" },
      { id: "disk-drive", label: "Lecteur disque / Ejection impossible" },
      { id: "overheating", label: "Surchauffe (Pâte thermique / Poussière)" },
      { id: "card-slot", label: "Lecteur de cartouche défaillant" },
      { id: "power", label: "Ne s'allume plus (Fusible, Alimentation interne)" },
    ],
  },
];
