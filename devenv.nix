{ pkgs, ... }:

let
  pnpm = pkgs.writeShellScriptBin "pnpm" ''
    exec ${pkgs.corepack}/bin/corepack pnpm "$@"
  '';
in

{
  packages = [
    pkgs.agent-browser
    pkgs.chromium
    pnpm
  ];

  env.AGENT_BROWSER_EXECUTABLE_PATH = "${pkgs.chromium}/bin/chromium";

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_26;
  };

  processes.dev.exec = "pnpm dev";

  enterTest = ''
    node --version
    pnpm --version
    agent-browser --version
  '';
}
