{ pkgs, ... }:

{
  packages = [
    pkgs.agent-browser
    pkgs.chromium
  ];

  env.AGENT_BROWSER_EXECUTABLE_PATH = "${pkgs.chromium}/bin/chromium";

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    corepack.enable = true;
  };

  processes.dev.exec = "pnpm dev";

  enterTest = ''
    node --version
    pnpm --version
    agent-browser --version
  '';
}
