with import <nixpkgs> {};

pkgs.mkShell {
  name = "rizaldy.today";

  buildInputs = [
    nodejs
    nodePackages.pnpm    
  ];
}
