import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    label: Attribute.String;
    url_link: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface SeoMetaTagsSeoMetaTags extends Schema.Component {
  collectionName: 'components_seo_meta_tags_seo_meta_tags';
  info: {
    displayName: 'seo-meta-tags';
    icon: 'cube';
  };
  attributes: {
    title_and_og_title: Attribute.String &
      Attribute.DefaultTo<'Websites meta title'>;
    description_and_og_description: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 135;
      }> &
      Attribute.DefaultTo<'Websites meta description'>;
    og_image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'seo-meta-tags.seo-meta-tags': SeoMetaTagsSeoMetaTags;
    }
  }
}
