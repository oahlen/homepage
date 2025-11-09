{
  pkgs ? import <nixpkgs> {
    config = { };
    overlays = [ ];
  },
}:
pkgs.mkShell {
  NIX_SHELL = "Homepage";

  packages = with pkgs; [
    hugo
    nodejs
    nodePackages.npm
  ];
}
