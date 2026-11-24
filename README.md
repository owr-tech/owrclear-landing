# Landing page — CLEAR , solutions de gestions financière pour TPE ET PME
Landing page française construite avec Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion et Payload.

## Installation et commandes

```bash
pnpm install
pnpm dev
pnpm exec tsc --noEmit
pnpm format --check
pnpm build
```



## Modifier les textes

Tout le texte visible se trouve dans :

```text
src/content/fr.ts
```

Modifiez `productName`, les titres, les descriptions, les options du formulaire ou les contenus des sections dans ce fichier. Les composants ne contiennent pas de contenu marketing à traduire.

## Modifier les couleurs

Les couleurs principales sont déclarées dans `src/app/(frontend)/styles.css`, sous `:root` :

- `--primary` : vert profond ;
- `--background` : sable clair ;
- `--accent` : ocre ;
- `--foreground` : texte presque noir.

Ces variables sont reliées aux tokens shadcn et aux utilitaires Tailwind.

## Remplacer les placeholders

Recherchez `[PLACEHOLDER:` dans `src/content/fr.ts`. Les placeholders présents sont :

1. Prix, description et avantages du pack `Power`
2. Prix, description et avantages du pack `Wealth`
3. Prix, description et avantages du pack `Glory`
4. `[PLACEHOLDER: e-mail]`
5. `[PLACEHOLDER: téléphone]`

Le pied de page contient aussi `[YEAR]`, conformément au brief. Remplacez-le par l’année voulue.

## Rendre un profil disponible

Dans `fr.audiences.items`, changez la propriété `available` du profil :

```ts
{
  id: "salons",
  // ...
  available: true,
}
```

Le badge « Bientôt » disparaît automatiquement de l’onglet et du contenu correspondant.

## Formulaire d’accès anticipé

Le formulaire envoie une requête `POST` à `/api/early-access`. La route :

- valide et limite tous les champs côté serveur avec Zod ;
- journalise le payload ;
- renvoie un succès HTTP 200 ;
- ne stocke aucune donnée.

## Architecture utile

```text
src/
├── app/
│   ├── (frontend)/
│   │   ├── api/early-access/route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── styles.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── sections/landing-sections.tsx
│   ├── early-access-form.tsx
│   ├── site-header.tsx
│   ├── stack-cards.tsx
│   ├── whatsapp-demo.tsx
│   └── ui/
└── content/fr.ts
```
La page `/` est fixe et doit être livrée comme route statique. La route POST du formulaire est exécutée à la demande.
