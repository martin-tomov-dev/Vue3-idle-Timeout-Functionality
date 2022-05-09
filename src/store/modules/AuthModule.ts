import { Auth } from 'aws-amplify';
import { Actions, Mutations } from '@/store/enums/StoreEnums';
import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators';

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserAuthInfo {
  errors: string;
  isPreAuthenticated: boolean;
  user: User;
  isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = '';
  isPreAuthenticated = false;
  user = {} as User;
  isAuthenticated = false;

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns string
   */
  get getErrors(): string {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    this.isPreAuthenticated = false;
    this.isAuthenticated = true;
    this.user = user;
    this.errors = '';
  }

  @Mutation
  [Mutations.SET_PREAUTH](user) {
    this.isPreAuthenticated = true;
    this.isAuthenticated = false;
    this.user = user;
    this.errors = '';
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.isPreAuthenticated = false;
    this.user = {} as User;
    this.errors = '';
  }

  @Action
  [Actions.SIGNIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      Auth.signIn(credentials.email, credentials.password)
        .then((cognitoUser) => {
          if (cognitoUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
            Auth.completeNewPassword(
              cognitoUser, // the Cognito User Object
              credentials.password // reuse the password
            ).then((cognitoUser) => {
              this.context.commit(Mutations.SET_AUTH, cognitoUser);
              resolve();
            });
          } else if (cognitoUser.challengeName === 'SMS_MFA') {
            this.context.commit(Mutations.SET_PREAUTH, cognitoUser);
            resolve();
          }
        })
        .catch((error) => {
          this.context.commit(Mutations.SET_ERROR, error);
          reject();
        });
    });
  }

  @Action
  [Actions.CONFIRM_SIGNIN](mfaCode) {
    /* eslint-disable  @typescript-eslint/no-non-null-assertion */
    return new Promise<void>((resolve, reject) => {
      Auth.confirmSignIn(this.user, mfaCode)
        .then((cognitoUser) => {
          this.context.commit(Mutations.SET_AUTH, cognitoUser);
          console.log(cognitoUser);
          resolve();
        })
        .catch((error) => {
          this.context.commit(Mutations.SET_ERROR, error);
          reject();
        });
    });
  }

  @Action
  [Actions.SIGNOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
    Auth.signOut();
    console.log('signout');
  }
}
