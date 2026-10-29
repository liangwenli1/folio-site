// The desktop installers, on the public desktop repository's latest release under names that don't change between
// versions (the download page and the account's Download part). Without a repository in the build there are none yet.
const repo = import.meta.env.PUBLIC_DESKTOP_REPO;
const latest = (file: string) => (repo ? `https://github.com/${repo}/releases/latest/download/${file}` : null);
export const INSTALLERS = { windows: latest('Folio-Setup-x64.exe'), mac: latest('Folio-arm64.dmg') };
