type ROUTER = "cubic-is-not-auth" | "cubic-auth" | "wizard" | null;
type SERVER = "user-is-not-auth" | "user-auth" | null;

export type Status = ROUTER | SERVER;
