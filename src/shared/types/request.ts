export type ReqParams = {
  path: string;
  args: any;
};

export type Headers = HeadersInit & {
  "Content-Type": "application/json";
  Accept: "/";
  "Cache-Control": "no-cache";
  Authorization?: string;
};
