export interface Producto {
  name: string | null;
  image: string;
  ficha: string | null;
}

export interface LineaHogar {
  CalentadoresDeAgua: Producto[];
  Frigobar: Producto[];
  DispensadoresDeAgua: Producto[];
  CampanasParaCocina: Producto[];
  ParrillasParaCocina: Producto[];
  PurificadoresDeAgua: Producto[];
  MaquinasDeHielo: Producto[];
  MaquinasGourmetDeCafe: Producto[];
}

export interface Productos {
  Minisplit: Producto[];
  LineaHogar: LineaHogar;
  Paquetes: Producto[];
  Divididos: Producto[];
  EnergiaSolar: Producto[];
}
