import { Product } from './product';

export const PRODUCTS: Product[] = [
    new Product(1, '泰国香水椰青', '【比你邻居买的便宜】泰国香水椰青 59.9元/9个包邮（附开椰器）',
        '来自丹嫩莎朵——香水奶椰核心产区的上品椰青，只选用6年龄椰树采摘，汁水足，果肉厚，每颗奶椰均重约700g，低糖到甜度为7°，足足可倒出一杯250ml的纯净椰汁。',
        69.9, 59.9, 3, 'assets/images/products/001/master.jpg', 'assets/images/products/001/thumbnail.jpg', []),
    new Product(2, '云南蒙自石榴', '回购率87.46%的云南蒙自雀斑石榴持续热销 29.9元/8个',
        '原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口，果肉淡红色至红色，晶莹剔透似玛瑙，肉厚核软小可食。',
        40, 29.9, 3, 'assets/images/products/002/master.jpg', 'assets/images/products/002/thumbnail.jpg', []),
    new Product(3, '荔浦香芋', '广西特产荔浦香芋，个头搭，可入菜，可做甜品 16.6/1kg',
        '荔浦香芋，又名槟榔芋，产于广西，曾为贡品，个头大，营养丰富，风味特殊，以其茎块做成的菜肴香味纯，肉不腻口，口感好，是餐桌上的一道美肴。',
        20, 16.6, 5, 'assets/images/products/003/master.jpg',
        'assets/images/products/003/thumbnail.jpg',
        ['assets/images/products/003/01.jpg',
            'assets/images/products/003/02.jpg',
            'assets/images/products/003/03.jpg',
            'assets/images/products/003/04.jpg',
            'assets/images/products/003/05.jpg',
            'assets/images/products/003/06.jpg',
            'assets/images/products/003/07.jpg',
            'assets/images/products/003/08.jpg']),
    new Product(4, '鲜甜玉米', '甜脆爽口，皮薄多汁，生吃爆浆 13.6/500g',
        '玉米也能当水果？从农场新鲜采摘的甜玉米真的可以做到，薄薄的表皮一咬就破，嚼一口清香的汁液溢满齿颊，生吃熟吃都特别甜、特别脆。高品质的甜玉米籽粒呈淡黄或乳白色，胚较大，口感柔嫩、味美，能禁受住甜、香、脆、嫩任何一个品质的考验。',
        20, 13.6, 10, 'assets/images/products/004/master.jpg', 'assets/images/products/004/thumbnail.jpg', []),
    new Product(5, '新西兰芳香黄柠檬', '汁多肉嫩，独特芳香 25元/4个', '', 30, 25, 3,
        'assets/images/products/005/master.jpg', 'assets/images/products/005/thumbnail.jpg', []),
    new Product(6, '新疆库尔勒大香梨', '就是比别人家卖的大！来自新疆孔雀河核心产区的幸福果！ 35元/8个',
        '来自新疆孔雀河核心产区的幸福果！西域幸福果，天山水灌溉，超甜；两鲜深入“梨城”，探寻真正高品质新疆库尔勒香梨。新疆地靠沙漠，剧烈得昼夜温差令梨凝结大量糖分，充足的阳光使得肉质细、汁水多，再加上山麓雪水的灌溉和天然的高山环境，才成就了梨中珍品。',
        49.9, 35, 5, 'assets/images/products/006/master.jpg', 'assets/images/products/006/thumbnail.jpg', []),
    new Product(7, '阳光玫瑰葡萄', '口感似提子，皮脆而肉有奇香 49.9/3斤', '', 59.9, 49.9, 5,
        'assets/images/products/007/master.jpg', 'assets/images/products/007/thumbnail.jpg', [])
];

