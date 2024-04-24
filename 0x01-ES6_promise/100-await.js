import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const a1 = await uploadPhoto();
    const a2 = await createUser();

    return ({ photo: a1, user: a2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
