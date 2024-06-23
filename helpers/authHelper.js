import bcrypt, { hash } from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const salt = 10;
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (error) {}
};

export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
