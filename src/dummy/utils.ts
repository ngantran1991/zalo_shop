import { StoreTypeRef } from "../constants/referrence";
import { Product, Store } from "../models";
import { getRandomInt } from "../utils";
import {
  listAddress,
  listCategories,
  listDescriptions,
  listNameProducts,
  listNameStore,
  listPrices,
  listProductOptions,
  numLogo,
  numProduct,
  numStoreBanner,
} from "./constants";

const getImgUrl = (filename: string) =>
  `https://stc-zmp.zadn.vn/zmp-ecommerce/img/${filename}.png`;

export const createProductDummy = ({ id }: { id: number }): Product => {
  const randomPrice = listPrices[getRandomInt(listPrices.length) - 1];
  const product: Product = {
    id,
    imgProduct: getImgUrl(`product-large-${getRandomInt(numProduct)}`),
    nameProduct: listNameProducts[getRandomInt(listNameProducts.length) - 1],
    salePrice: randomPrice.salePrice,
    retailPrice: randomPrice.retailPrice,
    description: listDescriptions[getRandomInt(listDescriptions.length) - 1],
    options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
  };
  return product;
};

export const createDummyProductCategories = () => {
  const dummyProducts: Product[] = [];
  // const num = 300
  dummyProducts.push(
    {
      id: 1,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/foong-cir-tan-thuoc-ran-so-7-hoang-gia-thai-lan-1715.jpg',
      nameProduct: 'Thuốc rắn Thái Lan số 7: Foong Cir Tan (Phong Thấp Hoàn)',
      salePrice: 2550000,
      retailPrice: 2850000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 2,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/thuoc-ran-kia-tu-tan-5955.jpg',
      nameProduct: 'Thuốc rắn Thái Lan số 1: Kia Tu Tan Capsule (Giải Độc Đan)',
      salePrice: 3000000,
      retailPrice: 3300000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 3,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/tiaw-king-tan-thuoc-ran-so-8-thai-lan-2855.jpg',
      nameProduct: 'Thuốc rắn Thái Lan số 8: Tiaw King Tan (Điều Kinh Hoàn)',
      salePrice: 3000000,
      retailPrice: 3300000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 4,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/mat-ong-hoa-anh-tuc-thai-lan-thepprasit-600-gram-8817.jpg',
      nameProduct: 'Mật ong hoa anh túc Thepprasit Big Bee Farm',
      salePrice: 750000,
      retailPrice: 890000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 5,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/keo-ong-khang-khuan-propolis-min-8551.jpg',
      nameProduct: 'Keo ong kháng khuẩn Propolis Big Bee Farm',
      salePrice: 650000,
      retailPrice: 680000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 6,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/sua-ong-chua-thai-lan-100-gram-7557.jpg',
      nameProduct: 'Sữa ong chúa tươi Thái Lan Fresh Royal Jelly Thepprasit',
      salePrice: 8900000,
      retailPrice: 9900000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 7,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/dau-thai-lan-16-vi-min-1583.jpg',
      nameProduct: 'Dầu gió thảo dược 16 vị Otop Herbal Liquid Balm Yatim Brand',
      salePrice: 50000,
      retailPrice: 60000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 8,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/dau-gio-thao-duoc-30-vi-otop-herbal-liquid-balm-yatim-brand-5272.png',
      nameProduct: 'Dầu gió thảo dược 30 vị Otop Herbal Liquid Balm Yatim Brand',
      salePrice: 50000,
      retailPrice: 60000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
    {
      id: 9,
      imgProduct: 'https://hangthaichinhhang.net/upload/product/dau-lan-thai-lan-3-vi-thao-duoc-green-herb-oil-8ml-1-6952.jpg',
      nameProduct: 'Dầu lăn Thái Lan 3 vị thảo dược Green Herb Oil 8ml',
      salePrice: 38000,
      retailPrice: 45000,
      description: "• Mua 2 hộp thuốc rắn bất kỳ\n→ Tặng 1 túi dầu nội địa Thái Lan trị giá 300.000đ\n• Mua từ 5 hộp thuốc rắn bất kỳ\n→ Tặng thêm 1 hộp bất kỳ (Size nhỏ)\nMiễn phí giao hàng toàn quốc, giao nhanh nội thành TP. Hồ Chí Minh trong 2 giờ, từ 1 - 3 ngày trên toàn quốc.",
      options: getRandomInt(1, 0) === 0 ? [] : listProductOptions,
    },
  )
  // for (let x = 0; x < num; x += 1) {
  //   dummyProducts.push(createProductDummy({ id: dummyProducts.length }));
  // }
  return dummyProducts;
};

export const createDummyStore = (): Store => {
  const storeId = +new Date();
  const listDummyProducts = createDummyProductCategories();
  const listType = Object.keys(StoreTypeRef) as (keyof typeof StoreTypeRef)[];
  // console.log(listDummyProducts)
  // console.log(listCategories)
  // console.log(listType);
  const dummyStore = {
    id: storeId,
    logoStore: 'https://hangthaichinhhang.net/upload/photo/logo-hangthaichinhhang-5797-9747.png',
    bannerStore: getImgUrl(`store-banner-${getRandomInt(numStoreBanner)}`),
    // nameStore: listNameStore[getRandomInt(listNameStore.length) - 1],
    nameStore: 'Hàng Thái Chính Hãng',
    followers: getRandomInt(9999, 10),
    address: 'TP Hồ Chí Minh',
    type: listType[1],
    listProducts: listDummyProducts,
    categories: listCategories,
  };
  return dummyStore;
};
