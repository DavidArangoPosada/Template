{ pkgs, ... }: { # Añadido '...' para permitir idx.workspace
  channel = "stable-24.05";

  packages = [
    pkgs.nodejs_20     # Incluye npm y npx
    pkgs.supabase-cli  # Instala la CLI de Supabase directamente en el entorno
    pkgs.shadcn
    pkgs.tailwindcss
  ];

  idx.extensions = [
    "svelte.svelte-vscode" # Asumo que usas Svelte con Vite por la extensión
    "vue.volar"            # O Vue? Asegúrate de que las extensiones coincidan con tu framework
    "dbaeumer.vscode-eslint" # Considera añadir ESLint
    "esbenp.prettier-vscode" # Considera añadir Prettier
  ];

  # Configuración de vista previa (sin cambios)
  idx.previews = {
    enable = true; # Asegúrate de que las previews estén habilitadas
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--open" # Añadido para abrir automáticamente el navegador en la preview
        ];
        manager = "web";
      };
    };
  };

  # Hooks del ciclo de vida
  idx.workspace = {
    # Se ejecuta al crear/reconstruir el entorno
    onCreate = {
      # Instala las dependencias de package.json (incluyendo @supabase/supabase-js)
      install-deps = "npm install";
    };

    # Se ejecuta cada vez que se inicia el espacio de trabajo
    onStart = {
      # Muestra versiones
      show-versions = "node -v && npm -v && supabase -v";
      dependencias = "pnpm add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css";
      shadcn = "npx shadcn@latest init";
    };
  };
}
