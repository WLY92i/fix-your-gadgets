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
      { id: "nothing", name: "Nothing Phone", isMainstream: false },
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
      { id: "faceid-touchid", label: "FaceID / TouchID défaillant" },
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
      { id: "xiaomi-pad", name: "Xiaomi Pad", isMainstream: false },
      { id: "remarkable", name: "reMarkable", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "screen", label: "Écran brisé / LCD noir" },
      { id: "battery", label: "Batterie hors service" },
      { id: "charging", label: "Port de charge endommagé" },
      { id: "chassis", label: "Châssis tordu / plié" },
      { id: "software", label: "Blocage logiciel / Bootloop" },
      { id: "stylus", label: "Problème stylet / détection" },
    ],
  },
  {
    id: "computers",
    label: "Ordinateurs (Portables & Fixes)",
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
      { id: "framework", name: "Framework", isMainstream: false },
      { id: "custom", name: "PC Sur Mesure (Custom Build / Gaming)", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "storage", label: "Disque dur / SSD (Lenteur, perte de données)" },
      { id: "ram", label: "Mémoire vive (Écran bleu, crashs)" },
      { id: "cooling", label: "Surchauffe / Nettoyage ventilateur" },
      { id: "keyboard", label: "Clavier / Trackpad défectueux" },
      { id: "hinge", label: "Charnières cassées / plasturgie" },
      { id: "psu", label: "Alimentation / Batterie" },
      { id: "gpu", label: "Carte graphique (Artefacts, écran noir)" },
      { id: "os", label: "Réinstallation système (Windows / macOS / Linux)" },
    ],
  },
  {
    id: "consoles",
    label: "Consoles (Modernes & Rétro)",
    brands: [
      { id: "sony-ps", name: "Sony (PlayStation 3/4/5)", isMainstream: true },
      { id: "microsoft-xbox", name: "Microsoft (Xbox 360/One/Series)", isMainstream: true },
      { id: "nintendo-switch", name: "Nintendo (Switch / OLED / Lite)", isMainstream: true },
      { id: "nintendo-retro", name: "Nintendo Rétro (NES, SNES, N64, GC, Wii, Wii U)", isMainstream: false },
      { id: "sega", name: "Sega (Master System, Mega Drive, Dreamcast)", isMainstream: false },
      { id: "handheld-retro", name: "Portable Rétro (GameBoy, DS, 3DS, PSP, Vita)", isMainstream: false },
      { id: "steam-deck", name: "PC Console (Steam Deck, ROG Ally, Legion Go)", isMainstream: false },
      { id: "atari", name: "Atari / Neo Geo", isMainstream: false },
      { id: "other", name: "Autre marque", isMainstream: false },
    ],
    commonFaults: [
      { id: "hdmi", label: "Port HDMI / Affichage défectueux" },
      { id: "drift", label: "Joystick Drift (Joy-Con, DualSense, Xbox)" },
      { id: "disk-drive", label: "Lecteur disque / Ejection impossible" },
      { id: "overheating", label: "Surchauffe / Ventilateur bruyant" },
      { id: "card-slot", label: "Lecteur de cartouche / SD défaillant" },
      { id: "power", label: "Ne s'allume plus (Fusible, Alimentation)" },
      { id: "software", label: "Mise à jour impossible / Erreur système" },
    ],
  },
];
