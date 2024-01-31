import bcrypt from 'bcrypt';

class PasswordService {
  private readonly saltSize = 10;

  async hash(
    password: string
  ): Promise<{ hashedPassword: string; salt: string }> {
    const salt = await bcrypt.genSalt(this.saltSize);
    const hashedPassword = await bcrypt.hash(password, salt);

    return { hashedPassword, salt };
  }

  async compare(password: string, hash: string): Promise<boolean> {
    const match = await bcrypt.compare(password, hash);

    return match;
  }
}

export const passwordService = new PasswordService();
