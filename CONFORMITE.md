# Conformité RGPD / loi togolaise — CLEAR

Document de travail : synthèse du cadre applicable et correspondance avec l'implémentation du site. Ce n'est pas un avis juridique.

## 1. Droit applicable

Le Togo dispose d'une loi nationale sur les données personnelles : la loi n° 2019-014 du 29 octobre 2019, confirmée par l'IPDCP comme texte de référence.[12] Elle couvre notamment tout traitement mis en œuvre sur le territoire togolais, ce qui inclut un site commercial destiné à des utilisateurs au Togo.[2] Un transfert de données vers un pays tiers exige un niveau de protection suffisant et une information préalable de l'IPDCP.[13]

Le consentement y est défini comme une manifestation de volonté « expresse, non équivoque, libre, spécifique et informée ».[2] L'article 14 pose le consentement comme principe de légitimité, et l'article 36 impose d'informer clairement l'utilisateur de la finalité de toute lecture ou écriture dans son équipement terminal, ainsi que des moyens de s'y opposer.[13] La prospection directe sans consentement préalable est interdite (article 26), et les droits d'accès, d'opposition, de rectification et de suppression sont reconnus (articles 39, 45 et 46).[13][17]

Côté européen, la règle issue de la directive ePrivacy et rappelée par la CNIL est qu'avant tout dépôt ou lecture d'un traceur, il faut informer, obtenir le consentement et offrir un moyen de refus ; les traceurs de mesure d'audience y sont soumis sauf périmètre d'exemption très strict.[10] La CNIL précise que la plupart des solutions d'audience commerciales ne bénéficient pas de cette exemption.[10] En pratique, PostHog doit donc rester désactivé jusqu'au consentement, ce qui satisfait aussi l'exigence togolaise d'information et d'opposition.[8]

## 2. Choix d'implémentation

- Bandeau de consentement affiché tant qu'aucun choix n'est enregistré, avec « Refuser » et « Tout accepter » de même niveau visuel, plus un réglage fin. Aucun cookie publicitaire n'est utilisé.
- PostHog est chargé avec `opt_out_capturing_by_default: true` et `persistence: 'memory'` : aucune donnée n'est conservée côté navigateur avant le choix. C'est le motif recommandé par PostHog, qui déconseille de bloquer le chargement du SDK et préfère l'activation via `opt_in_capturing()` / `opt_out_capturing()`.[8] Des options complémentaires existent (`cookieless_mode`, `respect_dnt`) documentées par PostHog.[8][9]
- Le choix est mémorisé 12 mois dans `localStorage` (`clear-consent-v1`) ; ce stockage sert uniquement à mémoriser le refus ou l'accord. Le bandeau peut être réouvert depuis le pied de page (« Gérer les cookies »).
- Le formulaire de demande de démo exige une case de consentement explicite au recontact, conformément à l'article 26 de la loi togolaise ; ce consentement est transmis avec la demande.[13]
- Une page `/confidentialite` documente le responsable, les finalités, les bases légales, les destinataires, les transferts, la conservation, les droits et le contact de l'IPDCP (Agoe 2 Lions, Lomé ; contact@ipdcp.tg).[12]

## 3. Points bloquants avant mise en ligne

1. Renseigner l'identité juridique du responsable du traitement, son adresse, son e-mail dédié et la date de mise à jour dans la page de politique (champs « à compléter »).
2. Confirmer les durées de conservation et la configuration de rétention PostHog.
3. Vérifier la déclaration des traitements auprès de l'IPDCP et la procédure d'information préalable pour les transferts hors du Togo : la loi soumet un transfert vers un pays tiers à un niveau de protection suffisant et à une information préalable de l'IPDCP.[13
4. Finaliser le sous-traitance/DPA avec FormSubmit, Cloudflare et PostHog, et privilégier la région EU de PostHog si des visiteurs européens sont ciblés.[8]
5. Faire relire par un juriste ou par l'IPDCP : le présent document est une mise en œuvre technique, pas un avis juridique.

## Sources

[2] https://ipdcp.tg/wp-content/uploads/2025/04/Loi_2019-014_relative_a_la_protection_des_donnees_a_caractere_personnel.pdf
[8] https://posthog.com/docs/privacy/data-collection
[9] https://posthog.com/tutorials/cookieless-tracking
[10] https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications
[12] https://ipdcp.tg/ipdcp/cadre-juridique
[13] https://www.aristidekarbou.me/fr/blog/protection-donnees-personnelles-togo-loi-2019-014
[17] https://anid.gouv.tg/politique-protection-donnees
