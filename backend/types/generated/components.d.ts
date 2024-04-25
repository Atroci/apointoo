import type { Schema, Attribute } from '@strapi/strapi';

export interface ImagesHeroImage extends Schema.Component {
  collectionName: 'components_images_hero_images';
  info: {
    displayName: 'Hero - Image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'images.hero-image': ImagesHeroImage;
    }
  }
}
