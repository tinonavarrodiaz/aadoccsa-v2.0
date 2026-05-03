export const crearSlug = (texto: string) => {
  return texto
    .toString()
    .normalize('NFD') // Descompone los caracteres en su base y diacrítico
    .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos (tildes)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '') // Elimina los caracteres especiales
    .replace(/\s+/g, '-') // Reemplaza los espacios por guiones
    .replace(/-+/g, '-'); // Elimina guiones duplicados
}
