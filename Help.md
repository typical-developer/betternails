# Why are the service images imported ?
This is so Vite an optimize and cache it to optimize build time
It also helps for debugging but i did it mainly for app optimizatiion

**Note**: It is terrible for user uploaded or runtime content

# `<Section />`
> The section component, this works in hand with the `<a href="#">` to navigate to the sections of the page with the use of the `ids
 
- `sectionId`: This props is where the section id is passed e.g `testimonials`.
- `className`: This works in hand with cn(clsx + tailwind merge) to add new tailwind utility classes if needed (for flexibility of the component).
- `containerClassName`: This is use to pass custom tailwind utility classes to the `<Container />` component nested in the `<Section />` component, Note the Container component already has a class of "custom-container" check it in `index.css`(It is a custom utility class itself).
- `sectionTitle`: This prop is used to pass the name of the section header to the `<SectionHeader />` component
- `sectionHeaderClassName`: This is used to pass custom styling to the `<SectionHeader />` .
- `title`: This is a boolean prop that is set to `true` if the section header component is needed to be rendered. e.g. in the `<Hero />` component is `false` as no Section Header is needed.
- `children`: This is used to pass the content that will be inside the `<Section />` component.
