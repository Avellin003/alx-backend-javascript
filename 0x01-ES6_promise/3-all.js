import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const a1 = uploadPhoto();
  const a2 = createUser();

  return Promise.all([a1, a2])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
