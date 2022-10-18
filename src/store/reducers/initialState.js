const initialState = {
    categories: [
        { id: 1, name: "Пицца" },
        { id: 2, name: "Сеты" },
        { id: 3, name: "Роллы" },
        { id: 4, name: "Напитки" },
    ],
    cart: {
        products: [],
    },
    products: [
        {
            id: 1,
            categoryId: 1,
            name: "Сырная",
            img: "https://cdn.dodostatic.net/static/Img/Products/c1b205fe56e54b60a17911e5ae3ba7c3_292x292.png",
            description:
                "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
            availableOptions: [1, 2],
            variants: [
                { id: 2, options: ["Толстое", "Маленькая"], price: 299 },
                { id: 3, options: ["Толстое", "Средняя"], price: 329 },
                { id: 4, options: ["Толстое", "Большая"], price: 359 },
                { id: 5, options: ["Тонкое", "Маленькая"], price: 319 },
                { id: 6, options: ["Тонкое", "Средняя"], price: 349 },
                { id: 7, options: ["Тонкое", "Большая"], price: 379 },
            ],
        },
        {
            id: 8,
            categoryId: 1,
            name: "Пепперони",
            img: "https://cdn.dodostatic.net/static/Img/Products/351dd00cfec74c8d8eddc87a73aadfd5_292x292.png",
            description:
                "Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус",
            availableOptions: [1, 2],
            variants: [
                { id: 9, options: ["Толстое", "Маленькая"], price: 319 },
                { id: 10, options: ["Толстое", "Средняя"], price: 339 },
                { id: 11, options: ["Толстое", "Большая"], price: 369 },
                { id: 12, options: ["Тонкое", "Маленькая"], price: 329 },
                { id: 13, options: ["Тонкое", "Средняя"], price: 359 },
                { id: 14, options: ["Тонкое", "Большая"], price: 389 },
            ],
        },
        {
            id: 15,
            categoryId: 1,
            name: "Ветчина и грибы",
            img: "https://cdn.dodostatic.net/static/Img/Products/ed3ab0e1c1e64cbb9bca07c90ae3ce7a_292x292.png",
            description:
                "Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус",
            availableOptions: [1, 2],
            variants: [
                { id: 16, options: ["Толстое", "Маленькая"], price: 339 },
                { id: 17, options: ["Толстое", "Средняя"], price: 359 },
                { id: 18, options: ["Толстое", "Большая"], price: 389 },
                { id: 19, options: ["Тонкое", "Маленькая"], price: 349 },
                { id: 20, options: ["Тонкое", "Средняя"], price: 379 },
                { id: 21, options: ["Тонкое", "Большая"], price: 419 },
            ],
        },
        {
            id: 22,
            categoryId: 2,
            name: "Новый килограмчик",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/tcq2qau1w_4.jpg",
            description:
                "Лиана, Филадельфия лайт с огурцом, Запеченный с курицей, Запеченный с крабом, Бонито с Лососем Терияки",
            price: 1090,
            availableOptions: [],
            variants: null,
        },
        {
            id: 23,
            categoryId: 2,
            name: "Классика гриль",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/klassika-gril.jpg",
            description:
                "Роллы в сете: Запеченный с перцем, Запеченный с овощами, Запеченный с огурцом.",
            price: 725,
            availableOptions: [],
            variants: null,
        },
        {
            id: 24,
            categoryId: 2,
            name: "Жара",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/2-cks3zgyus.jpg",
            description: "Бостон, Запеченный с огурцом, Цезарь Темпура, Мясник",
            price: 790,
            availableOptions: [],
            variants: null,
        },
        {
            id: 25,
            categoryId: 2,
            name: "Гурман",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/j0qheybleuw.jpg",
            description:
                "Бонито с Лососем Терияки, Запеченный с крабом, Запеченный с курицей, Мини Курица Темпура, Краб темпура, Филадельфия лайт с огурцом",
            price: 1190,
            availableOptions: [],
            variants: null,
        },
        {
            id: 26,
            categoryId: 3,
            name: "Дон Бекон Лайт",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/1.jpg",
            description: "Нори, рис, бекон, огурец, сливочный сыр, соус Унаги",
            price: 235,
            availableOptions: [],
            variants: null,
        },
        {
            id: 27,
            categoryId: 3,
            name: "Кунжут с Кальмаром",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/3.jpg",
            description:
                "Нори, рис, кальмар, кунжут, огурец, сливочный сыр, соус Унаги.",
            price: 265,
            availableOptions: [],
            variants: null,
        },
        {
            id: 28,
            categoryId: 3,
            name: "Тортилья с копченым лососем",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/39.jpg",
            description: "Сыр, огурец, тортилья, семга х/к, лук зеленый.",
            price: 319,
            availableOptions: [],
            variants: null,
        },
        {
            id: 29,
            categoryId: 3,
            name: "Филадельфия с Яблоком",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/33.jpg",
            description: "Нори, рис, яблоко, лосось, сливочный сыр.",
            price: 325,
            availableOptions: [],
            variants: null,
        },
        {
            id: 30,
            categoryId: 4,
            name: "Coca Cola 1 л",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/tcd2sejys9g-1.jpg",
            description: "Охлажденная Кока-Кола",
            price: 105,
            availableOptions: [],
            variants: null,
        },
        {
            id: 31,
            categoryId: 4,
            name: "Спрайт 0,9",
            img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/1-2.jpg",
            description: "Охлажденный Спрайт 0,9",
            price: 115,
            availableOptions: [],
            variants: null,
        },
    ],
    giftProducts: {
        points: [1000, 1500, 2500],
        products: [
            {
                id: 29,
                name: "Филадельфия с Яблоком",
                img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/33.jpg",
                description: "Нори, рис, яблоко, лосось, сливочный сыр.",
                price: 325,
                requiredAmount: 1000,
            },
            {
                id: 28,
                name: "Тортилья с копченым лососем",
                img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/39.jpg",
                description: "Сыр, огурец, тортилья, семга х/к, лук зеленый.",
                price: 319,
                requiredAmount: 1500,
            },
            {
                id: 24,
                name: "Жара",
                img: "https://demo.foodninja.pro/wp-content/uploads/2022/05/2-cks3zgyus.jpg",
                description:
                    "Бостон, Запеченный с огурцом, Цезарь Темпура, Мясник",
                price: 790,
                requiredAmount: 2500,
            },
        ],
        selectedGift: null,
    },
    options: [
        { id: 1, name: "Тесто", values: ["Толстое", "Тонкое"] },
        { id: 2, name: "Размер", values: ["Маленькая", "Средняя", "Большая"] },
    ],
    selectedOptions: [],
};

export default initialState;
