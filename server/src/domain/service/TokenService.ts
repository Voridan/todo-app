import * as jwt from 'jsonwebtoken';
import { UserModel } from '../model/user/UserModel';
import { appConfig } from '../../infrastructure/config';
import { ETokens } from '../enum';

type TokenPair = {
  accessToken: string;
  refreshToken: string;
};

type UserTokenPayload = Pick<UserModel, 'id' | 'nickname'>;

export class TokenService {
  static getTokenPair(payload: UserTokenPayload): TokenPair {
    const accessToken = jwt.sign(payload, appConfig.ACCESS_SECRET, {
      expiresIn: '1h',
    });
    const refreshToken = jwt.sign(payload, appConfig.ACCESS_SECRET);

    return { accessToken, refreshToken };
  }

  static verifyToken(
    token: string,
    tokenType = ETokens.accessToken
  ): UserTokenPayload {
    try {
      let secret = '';

      switch (tokenType) {
        case ETokens.accessToken:
          secret = appConfig.ACCESS_SECRET;
          break;

        case ETokens.refreshToken:
          secret = appConfig.REFRESH_SECRET;
          break;

        default:
          break;
      }
      return jwt.verify(token, secret) as UserTokenPayload;
    } catch (error) {
      throw new Error('token unverified');
    }
  }
}
