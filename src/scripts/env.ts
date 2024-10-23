export function getEnv(
    locals: App.Locals,
    metaEnv: ImportMetaEnv,
    name: string
) {
    const env = import.meta.env.PROD ? (locals as any).runtime.env : metaEnv;

    if (!env[name]) throw new Error(`Missing environment variable "${name}"`);

    return env[name];
}
