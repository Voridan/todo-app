export enum ErrorMessage {
  EMAIL = 'Invalid email.',
  PASSWORD = 'Invalid password. Please ensure that your password:\n' +
    '- Contains at least one alphabet (uppercase or lowercase).\n' +
    '- Contains at least one digit.\n' +
    '- Contains at least one special character from the set [@ $ ! % _ * # ? &].\n' +
    '- Is at least 8 characters long.',
}
