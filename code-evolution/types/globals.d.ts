export type Roles = "ADMIN" | "MODERATOR" | "USER";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
export {};
