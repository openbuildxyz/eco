const baseUrl = import.meta.env.BASE_URL;

function resolvePath(path: string) {
  return baseUrl === '/' ? path : `${baseUrl}${path}`;
}

export { resolvePath };
