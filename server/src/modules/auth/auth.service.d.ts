declare class AuthService {
    passwordHashString(candidatePassword: string): Promise<unknown>;
    passwordCompareToHash(candidatePassword: string, hash: string): Promise<unknown>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=auth.service.d.ts.map