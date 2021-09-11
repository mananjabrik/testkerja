export type ProductVariants = {
  id?: number;
  color_id?: number;
  product_color_size_ids?: number[];
  image_urls?: string[];
  thumbnail_urls?: string[];
  image_ids?: number[];
  pictures?: [
    {
      id?: number;
      src?: string;
      title?: string;
      thumbnail_id?: number;
    }
  ];
  color?: { id?: number; name?: string; rgb?: string };
  sizes?: [{ id?: number; size?: number; stock?: number; product_color?: any }];
};

export type ProductDTO = {
  id?: number;
  brand_id?: number;
  name: string;
  sku?: string;
  price: string;
  description?: string;
  is_displayed?: number;
  start_promo?: string;
  end_promo?: string;
  promo_price?: string;
  gender?: string;
  material_upper?: string;
  material_outer_sole?: string;
  care_label?: string;
  measurements?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: null;
  create_id?: number;
  update_id?: number;
  delete_id?: number;
  category_ids?: number[];
  catalog_ids?: number[];
  brand_name?: string;
  brand_data?: {
    id?: number;
    alamat?: null;
    province_id?: null;
    city_id?: null;
    kecamatan_id?: null;
    province_name?: null;
    city_name?: null;
    kecamatan_name?: null;
  };
  image_url?: string;
  image_urls?: {
    "0-6764"?: string[];
  };
  variants?: ProductVariants[];
  promos?: [];
  total_stock?: number;
  final_price?: string;
  categories?: { 1?: string };
  colors?: [{ id?: number; name?: string; rgb?: string }];
  most_sold_product_color_id?: number;
};
