import { Donor, DonorResponse } from '@api/components/donnor/donor.type';
import {
  Institution,
  InstitutionResponse,
} from '@api/components/institution/institution.types';

/***
 * This function serializes a Donor object to a JSON object
 * @param donor Donor object
 * @returns JSON object
 */
export const serializeDonorResponse = (donor: Donor): DonorResponse => {
  return {
    id: donor.id,
    email: donor.email,
    name: donor.name,
    avatar: donor.avatar,
    url: donor.url,
    uri: donor.uri,
    following_count: donor.following_count,
  };
};

/***
 * This function serializes an Institution object to a JSON object
 * @param institution Institution object
 * @returns JSON object
 */
export const serializeInstitutionResponse = (
  institution: Institution,
): InstitutionResponse => {
  return {
    id: institution.id,
    email: institution.email,
    name: institution.name,
    phone: institution.phone,
    displayName: institution.displayName,
    avatar: institution.avatar,
    url: institution.url,
    uri: institution.uri,
    following_count: institution.following_count,
    followers_count: institution.followers_count,
    donations: institution.donations,
  };
};