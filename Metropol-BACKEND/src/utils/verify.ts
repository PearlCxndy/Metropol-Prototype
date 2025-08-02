import bcrypt from "bcrypt";

export async function verifyPassword({
  candidatePassword,
  salt,
  hash,
}: {
  candidatePassword: string;
  salt: any;
  hash: any;
}) {
  const candidateHash = await bcrypt.hash(candidatePassword, salt);
  return candidateHash === hash;
}
