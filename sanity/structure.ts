import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog related items
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Management')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),

      // Divider between sections
      S.divider(),

      S.listItem()
        .title('Landing Page')
        .child(
          S.list()
            .title('Landing Page Sections')
            .items([
              S.documentTypeListItem('heroSection').title('Hero Section'),
              S.documentTypeListItem('aboutSection').title('About Section'),
              S.documentTypeListItem('contactSection').title('Contact Section'),
              S.documentTypeListItem('testimonialsSection').title('Testimonials Section'),
              S.documentTypeListItem('logosCarousel').title('Logos Carousel'), 
            ])
        ),

      // Any other document types
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'category', 'author', 'heroSection', 'aboutSection', 'contactSection', 'testimonialsSection', 'logosCarousel'].includes(
            item.getId()!
          )
      ),
    ]);
