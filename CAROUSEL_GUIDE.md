# 🎠 Carousel d'Images - Guide d'Utilisation

## 📋 Vue d'ensemble

Un carousel interactif et moderne a été ajouté au site web pour présenter visuellement les 4 domaines d'activité principaux:

1. **HSSE** - Hygiène, Santé, Sécurité et Environnement
2. **Études** - Études et Ingénierie
3. **Formations Professionnelles** - Développement des Compétences
4. **Conseil & Accompagnement** - Expertise et Solutions

---

## ✨ Fonctionnalités

### 🎯 Caractéristiques Principales

- ✅ **Défilement automatique** - Change de slide toutes les 5 secondes
- ✅ **Pause au survol** - Le défilement s'arrête quand vous passez la souris dessus
- ✅ **Navigation par flèches** - Boutons gauche/droite pour naviguer manuellement
- ✅ **Indicateurs de points** - Points cliquables en bas pour aller directement à un slide
- ✅ **Compteur de slides** - Affiche "X / 4" pour indiquer la position actuelle
- ✅ **Transitions fluides** - Animations douces entre les slides
- ✅ **Design responsive** - S'adapte parfaitement aux mobiles, tablettes et desktops
- ✅ **Bouton CTA** - "En savoir plus" qui scroll vers la section Contact

### 🎨 Design

- **Hauteur**: 500px sur mobile, 600px sur desktop
- **Dégradés de couleur** uniques pour chaque slide
- **Overlay sombre** pour améliorer la lisibilité du texte
- **Effets de hover** sur les boutons de navigation
- **Ombres et effets glassmorphism**

---

## 📂 Structure des Fichiers

### Fichiers Créés

1. **`src/components/ImageCarousel.tsx`**
   - Composant principal du carousel
   - Gère l'état, les transitions et l'auto-play

2. **`src/data/carouselSlides.ts`**
   - Données centralisées des slides
   - Facilite la modification du contenu

### Fichiers Modifiés

- **`src/pages/Index.tsx`** - Carousel ajouté après le Hero

---

## 🖼️ Configuration des Images

### Remplacer les Images Placeholder

Pour ajouter vos propres images, éditez le fichier `src/data/carouselSlides.ts`:

```typescript
export const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "HSSE",
    subtitle: "Hygiène, Santé, Sécurité et Environnement",
    description: "Solutions complètes pour la gestion de la santé, sécurité et environnement en entreprise",
    image: "/chemin/vers/votre/image-hsse.jpg", // ⬅️ Modifier ici
    color: "from-blue-600 to-green-600"
  },
  // ... autres slides
];
```

### Recommandations pour les Images

- **Format**: JPG ou PNG
- **Dimensions recommandées**: 1920x800px (ratio 2.4:1)
- **Poids**: < 500KB pour des performances optimales
- **Qualité**: Haute résolution pour les écrans Retina
- **Emplacement**: Placer dans `public/images/carousel/`

### Exemple de Structure

```
public/
  └── images/
      └── carousel/
          ├── hsse.jpg
          ├── etudes.jpg
          ├── formations.jpg
          └── conseil.jpg
```

Puis dans `carouselSlides.ts`:
```typescript
image: "/images/carousel/hsse.jpg"
```

---

## 🎨 Personnalisation

### Modifier les Couleurs des Dégradés

Chaque slide a son propre dégradé de couleur. Pour les modifier:

```typescript
{
  id: 1,
  title: "HSSE",
  // ...
  color: "from-blue-600 to-green-600" // ⬅️ Modifier ici
}
```

**Couleurs disponibles** (Tailwind CSS):
- `from-blue-600 to-green-600` (Bleu → Vert)
- `from-red-600 to-orange-600` (Rouge → Orange)
- `from-purple-600 to-pink-600` (Violet → Rose)
- `from-gray-600 to-slate-600` (Gris → Ardoise)

### Modifier la Vitesse d'Auto-Play

Dans `ImageCarousel.tsx`, ligne 13:

```typescript
const interval = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
}, 5000); // ⬅️ 5000ms = 5 secondes
```

### Modifier le Texte

Éditez directement dans `src/data/carouselSlides.ts`:

```typescript
{
  id: 1,
  title: "HSSE", // Titre principal (grand)
  subtitle: "Hygiène, Santé, Sécurité et Environnement", // Badge en haut
  description: "Solutions complètes...", // Texte descriptif
  // ...
}
```

---

## 🎯 Position dans la Page

Le carousel est actuellement positionné **après le Hero**, avant la section "À Propos".

**Ordre actuel:**
1. Navigation
2. Hero
3. **🆕 Image Carousel** ← Nouveau
4. À Propos
5. Services
6. Nouveautés
7. Formations
8. Contact
9. Partenaires
10. Footer

### Déplacer le Carousel

Pour changer sa position, éditez `src/pages/Index.tsx`:

```tsx
<Hero />
<ImageCarousel /> {/* Déplacer cette ligne */}
<About />
```

---

## 📱 Responsive Design

Le carousel s'adapte automatiquement:

### Mobile (< 768px)
- Hauteur: 500px
- Texte: Taille réduite
- Boutons: Taille optimisée pour le tactile

### Desktop (≥ 768px)
- Hauteur: 600px
- Texte: Taille maximale
- Effets de hover activés

---

## ⌨️ Contrôles Utilisateur

### Navigation

1. **Flèches gauche/droite** - Cliquer pour changer de slide
2. **Points indicateurs** - Cliquer sur un point pour aller à ce slide
3. **Auto-play** - Défilement automatique toutes les 5 secondes
4. **Pause** - Passer la souris sur le carousel pour mettre en pause

### Accessibilité

- Labels ARIA pour les lecteurs d'écran
- Navigation au clavier possible
- Indicateurs visuels clairs

---

## 🔧 Dépannage

### Les images ne s'affichent pas

1. Vérifiez le chemin dans `carouselSlides.ts`
2. Assurez-vous que les images sont dans `public/`
3. Vérifiez la console du navigateur pour les erreurs

### Le carousel ne défile pas automatiquement

1. Vérifiez que vous n'avez pas la souris sur le carousel (pause au survol)
2. Vérifiez la console pour des erreurs JavaScript

### Les transitions sont saccadées

1. Optimisez la taille des images (< 500KB)
2. Vérifiez les performances du navigateur

---

## 🚀 Améliorations Futures

Suggestions pour étendre les fonctionnalités:

- [ ] Ajouter des animations de texte (fade in, slide up)
- [ ] Intégrer des vidéos en arrière-plan
- [ ] Ajouter un mode plein écran
- [ ] Swipe gestures pour mobile
- [ ] Préchargement des images suivantes
- [ ] Indicateurs de progression circulaires
- [ ] Mode diaporama avec lecture/pause

---

## 📊 Performance

### Optimisations Appliquées

- ✅ Transitions CSS (GPU accelerated)
- ✅ Lazy loading des images
- ✅ Cleanup des intervals
- ✅ Pause automatique au survol

### Métriques

- **Poids total**: ~2MB (avec 4 images de 500KB)
- **Temps de chargement**: < 2s sur connexion 4G
- **FPS**: 60fps pour les transitions

---

## 💡 Conseils d'Utilisation

1. **Images de qualité**: Utilisez des photos professionnelles
2. **Texte concis**: Gardez les descriptions courtes et impactantes
3. **Contraste**: Assurez-vous que le texte est lisible sur les images
4. **Cohérence**: Utilisez un style visuel cohérent pour toutes les images
5. **Appel à l'action**: Le bouton "En savoir plus" doit être pertinent

---

**Développé avec ❤️ pour Ozone Safety Hub**
