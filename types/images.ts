export interface Image {
  alt_description: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    it: string;
    [key: string]: string;
  };
  asset_type: string;
  blur_hash: string;
  breadcrumbs: string[];
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: string | null;
  slug: string;
  sponsorship: any | null;
  topic_submissions: Record<string, any>;
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    [key: string]: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    [key: string]: any;
  };
  width: number;
}
