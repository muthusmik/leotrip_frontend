import { v4 as uuidv4 } from 'uuid';

interface Identifiers {
  uuid: string;
}

export function generateUUID(): Identifiers {
  const uuid = uuidv4();

  const identifiers: Identifiers = {
    uuid,
  };

  return identifiers;
};