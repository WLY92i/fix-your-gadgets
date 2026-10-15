export type DeviceModel = {
  category: string;
  brand: string;
  name: string;
  image: string;
};

// Only add records once their product photos have been verified and stored.
const models: DeviceModel[] = [];

export function getModels(category: string, brand: string): DeviceModel[] {
  return models.filter(model => model.category === category && model.brand === brand);
}