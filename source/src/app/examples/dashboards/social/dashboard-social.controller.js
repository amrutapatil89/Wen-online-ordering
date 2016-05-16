(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardSocialController', DashboardSocialController);

    /* @ngInject */
    function DashboardSocialController($scope, $mdDialog, $mdMedia) {
        var vm = this;
        vm.whotofollow = [{
            name: 'Twitch',
            user: 'twitch',
            avatar: 'assets/images/avatars/avatar-1.png'
        },{
            name: 'MaterialUp',
            user: 'materialUP',
            avatar: 'assets/images/avatars/avatar-3.png'
        },{
            name: 'Bower',
            user: 'bower',
            avatar: 'assets/images/avatars/avatar-2.png'
        }];

        vm.trends = [
            '#DescribeTwitterIn3Words',
            '#OhNoHarry',
            '#mnimonio3',
            '#WeForgiveYouAriana',
            '#FifthHarmonyTODAY',
            'Omar Sharif',
            'Go Set a Watchman',
            'Ηρωδειο',
            'Ryanair',
            'Η ΕΡΤ'
        ];

        vm.favorites = [{
            name: 'Twitch',
            avatar: 'assets/images/avatars/avatar-1.png',
            user: 'twitch',
            date: moment().subtract(1, 'hour'),
            tweet: 'We had an absolute blast bringing @E3 to you this year. Check out our video recap.'
        },{
            name: 'PixelBucket',
            avatar: 'assets/images/avatars/avatar-2.png',
            user: 'twitch',
            date: moment().subtract(1, 'days'),
            tweet: 'Turn a Pencil Sketch Into a Colorful and Dynamic Character Illustration http://bit.ly/1HoJhbN  @TutsPlusDesign'
        },{
            name: 'Webdesigntuts',
            avatar: 'assets/images/avatars/avatar-3.png',
            user: 'wdtuts',
            date: moment().subtract(2, 'days'),
            tweet: '100 people have entered our challenge to win @CodePen & @envatomarket goodies! 2 days left :) http://ow.ly/PqjP9'
        },{
            name: 'BestCSS',
            avatar: 'assets/images/avatars/avatar-4.png',
            user: 'bestcss',
            date: moment().subtract(3, 'days'),
            tweet: '#Site of the Day'
        },{
            name: 'MaterialUP',
            avatar: 'assets/images/avatars/avatar-5.png',
            user: 'materialup',
            date: moment().subtract(4, 'days'),
            tweet: 'OnePlus One Mockup PSD - Mockup by @zerpixelung'
        },{
            name: 'Webdesigner Depot',
            avatar: 'assets/images/avatars/avatar-6.png',
            user: 'DesignerDepot',
            date: moment().subtract(7, 'days'),
            tweet: 'Semantic UI 2.0: Design beautiful websites quicker http://depot.ly/Pq6oC'
        }];


        vm.categories = [
                            {
                            id: "A6XTMDKWR8BBW",
                            name: "Eats",
                            items: {
                            elements: [
                            {
                            id: "J98RXG5AYZQSR",
                            hidden: false,
                            name: "cricket pies",
                            alternateName: "CPIES",
                            code: "",
                            sku: "cpies",
                            price: 1500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1460086117000
                            },
                            {
                            id: "XF1X2ZNMHDS6R",
                            hidden: false,
                            name: "fireflies",
                            alternateName: "",
                            code: "",
                            sku: "ffls",
                            price: 5000,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1452278880000
                            },
                            {
                            id: "0FZX82V7XCPYY",
                            hidden: false,
                            name: "Dum Biriyani",
                            alternateName: "FBIR",
                            price: 1000,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1446039981000
                            }
                            ]
                            }
                            },
                            {
                            id: "M5KJAAGCM5QGC",
                            name: "Wines",
                            items: {
                            elements: [
                            {
                            id: "SQX1A5WVBE8XR",
                            hidden: false,
                            name: "Barefoot Blue Moscato",
                            alternateName: "BF RED MOS",
                            price: 2000,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "Bottle",
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1457072173000
                            }
                            ]
                            }
                            },
                            {
                            id: "3MEYSB0JE7MAY",
                            name: "Simple 6",
                            sortOrder: 0,
                            items: {
                            elements: [
                            {
                            id: "DEJC2R40EF3GJ",
                            hidden: false,
                            name: "Black Forest Ham",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "2RMTMDC383XVT",
                            hidden: false,
                            name: "Italian B.M.T",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "C6EBC2FCSGT5G",
                            hidden: false,
                            name: "Meatball Marinara",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "7MAPSDQH1EW0T",
                            hidden: false,
                            name: "Sweet Onion Chicken Teriyaki",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "DCEZZ0TV2M2DR",
                            hidden: false,
                            name: "Tuna",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "DKP6EPGEH4VQ4",
                            hidden: false,
                            name: "Turkey Breast",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            }
                            ]
                            }
                            },
                            {
                            id: "P40M0JGJVJS48",
                            name: "Breakfast",
                            sortOrder: 1,
                            items: {
                            elements: [
                            {
                            id: "QZY1A2TSSKR20",
                            hidden: false,
                            name: "Bacon, Egg & Cheese....",
                            price: 350,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1462962283000
                            },
                            {
                            id: "0H08A5BH3YX9T",
                            hidden: false,
                            name: "Black Forest Ham, Egg & Chees",
                            price: 350,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "XV81FXMJNJ37P",
                            hidden: false,
                            name: "Egg & Cheese Omelet",
                            price: 350,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "8QR3GSYNGD8MC",
                            hidden: false,
                            name: "Steak, Egg & Cheese",
                            price: 350,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "H56QTHG3XH6RG",
                            hidden: false,
                            name: "Apple Slices.....",
                            alternateName: "",
                            code: "",
                            price: 160,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1463035080000
                            },
                            {
                            id: "S8AG0FP08G9PP",
                            hidden: false,
                            name: "B.L.T.",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "XSAAXNWPQ5C04",
                            hidden: false,
                            name: "Baked Lay’s",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1462962544000
                            },
                            {
                            id: "SQX1A5WVBE8XR",
                            hidden: false,
                            name: "Barefoot Blue Moscato",
                            alternateName: "BF RED MOS",
                            price: 2000,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "Bottle",
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1457072173000
                            },
                            {
                            id: "HKWKB05F980PP",
                            hidden: false,
                            name: "Big Hot Prastrami",
                            price: 600,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "EKAVKJNQHQE6R",
                            hidden: false,
                            name: "Big Philly Cheesesteak",
                            price: 750,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "DEJC2R40EF3GJ",
                            hidden: false,
                            name: "Black Forest Ham",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "FEBCHESEADQEJ",
                            hidden: false,
                            name: "Black Forest Ham S",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "8GHC9TBGZTTF4",
                            hidden: false,
                            name: "Bud Lights",
                            alternateName: "",
                            code: "",
                            sku: "BDL1",
                            price: 350,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            stockCount: 0,
                            modifiedTime: 1445074898000
                            },
                            {
                            id: "Q9TRSEGCAGPNA",
                            hidden: false,
                            name: "Carved Turkey",
                            price: 700,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "S07H9PC3YK76P",
                            hidden: false,
                            name: "Cheese Flatizza",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "YSQWCF1YJGYE2",
                            hidden: false,
                            name: "Chicken & Bacon Ranch",
                            price: 800,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "4RGT26FY5HSTR",
                            hidden: false,
                            name: "Chinese Noodles Fish",
                            price: 10,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1445085656000
                            },
                            {
                            id: "DZX76W9CQ7WJW",
                            hidden: false,
                            name: "Chipotle Chicken with Guacamole",
                            price: 750,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "RFN74TAWCAT5C",
                            hidden: false,
                            name: "Chocolate Chip",
                            price: 65,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "G6YVTVTEWJTN6",
                            hidden: false,
                            name: "Coffee",
                            price: 0,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "0722AR4NV7WWA",
                            hidden: false,
                            name: "Cold Cut Combo",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "9Z2TZ07Q9KY8P",
                            hidden: false,
                            name: "Cool Blue",
                            alternateName: "Soda",
                            price: 1000,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1445250271000
                            },
                            {
                            id: "RBHX3JGAX06VY",
                            hidden: false,
                            name: "Cougarss",
                            alternateName: "",
                            code: "",
                            sku: "",
                            price: 835,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            stockCount: 0,
                            modifiedTime: 1446103025000
                            },
                            {
                            id: "J98RXG5AYZQSR",
                            hidden: false,
                            name: "cricket pies",
                            alternateName: "CPIES",
                            code: "",
                            sku: "cpies",
                            price: 1500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1460086117000
                            },
                            {
                            id: "70P1B6G1Q0WA0",
                            hidden: false,
                            name: "Delivery Fee",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1452274352000
                            },
                            {
                            id: "GBRMGBJ2573W8",
                            hidden: true,
                            name: "Delivery Fee",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1446554290000
                            },
                            {
                            id: "062F3SAXTRDPP",
                            hidden: true,
                            name: "Delivery Fee",
                            price: 600,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460357609000
                            },
                            {
                            id: "DV5ZBSSJDVM06",
                            hidden: false,
                            name: "DORITOS Nacho Cheese",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "YE803SJRBWB48",
                            hidden: false,
                            name: "Double Chocolate Chip",
                            price: 65,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "3V8ZM7FXXEPYG",
                            hidden: false,
                            name: "Duble Chicken",
                            price: 750,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "0FZX82V7XCPYY",
                            hidden: false,
                            name: "Dum Biriyani",
                            alternateName: "FBIR",
                            price: 1000,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1446039981000
                            },
                            {
                            id: "XF1X2ZNMHDS6R",
                            hidden: false,
                            name: "fireflies",
                            alternateName: "",
                            code: "",
                            sku: "ffls",
                            price: 5000,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1452278880000
                            },
                            {
                            id: "C59BW0DC5V558",
                            hidden: false,
                            name: "Fish Curry",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1449227837000
                            },
                            {
                            id: "S7XYK7VEYKN04",
                            hidden: false,
                            name: "Fountain Drinks",
                            price: 0,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "466BS8B891TP0",
                            hidden: false,
                            name: "Grasshopper Juice",
                            price: 1565,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1453931071000
                            },
                            {
                            id: "2RMTMDC383XVT",
                            hidden: false,
                            name: "Italian B.M.T",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "Z34N812P0GJYM",
                            hidden: false,
                            name: "Italian B.M.T.",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "F2WEGJEDDRNJ6",
                            hidden: false,
                            name: "Lay’s Classic Potato Chips",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "PZZ8NCZ018EGA",
                            hidden: false,
                            name: "Lime Juice",
                            alternateName: "",
                            code: "",
                            sku: "",
                            price: 150,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            stockCount: 0,
                            modifiedTime: 1440185159000
                            },
                            {
                            id: "ESHA66WZVVWG6",
                            hidden: false,
                            name: "Mango Lassi",
                            alternateName: "MLASI",
                            code: "DR_MLASI",
                            price: 239,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            stockCount: 0,
                            modifiedTime: 1445068820000
                            },
                            {
                            id: "C6EBC2FCSGT5G",
                            hidden: false,
                            name: "Meatball Marinara",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "48FWDFHWB3A7E",
                            hidden: false,
                            name: "Meatball Marinara S",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "BVAJ27PBBTAJ0",
                            hidden: false,
                            name: "Mediterranean Chicken",
                            price: 700,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "S5Q4C1X5XZ8E4",
                            hidden: false,
                            name: "Oatmeal Raisin",
                            price: 100,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "9J79Y5W4316QT",
                            hidden: false,
                            name: "Pepperoni Flatizza",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "Q8JEB1N5WDM18",
                            hidden: false,
                            name: "Spicy Italian Flatizza",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "CMVD6DY2AAF6T",
                            hidden: false,
                            name: "Sun Chips",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "7MAPSDQH1EW0T",
                            hidden: false,
                            name: "Sweet Onion Chicken Teriyaki",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "3ZXENJKH1N6Y4",
                            hidden: false,
                            name: "Sweet Onion Chicken Teriyaki S",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            }
                            ]
                            }
                            },
                            {
                            id: "FJ798WE2YVXGM",
                            name: "Beers",
                            sortOrder: 1,
                            items: {
                            elements: [
                            {
                            id: "RBHX3JGAX06VY",
                            hidden: false,
                            name: "Cougarss",
                            alternateName: "",
                            code: "",
                            sku: "",
                            price: 835,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            stockCount: 0,
                            modifiedTime: 1446103025000
                            },
                            {
                            id: "8GHC9TBGZTTF4",
                            hidden: false,
                            name: "Bud Lights",
                            alternateName: "",
                            code: "",
                            sku: "BDL1",
                            price: 350,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            stockCount: 0,
                            modifiedTime: 1445074898000
                            },
                            {
                            id: "0FZX82V7XCPYY",
                            hidden: false,
                            name: "Dum Biriyani",
                            alternateName: "FBIR",
                            price: 1000,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1446039981000
                            }
                            ]
                            }
                            },
                            {
                            id: "EZ2CT219JHQYM",
                            name: "Flatizzas",
                            sortOrder: 2,
                            items: {
                            elements: [
                            {
                            id: "S07H9PC3YK76P",
                            hidden: false,
                            name: "Cheese Flatizza",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "9J79Y5W4316QT",
                            hidden: false,
                            name: "Pepperoni Flatizza",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "Q8JEB1N5WDM18",
                            hidden: false,
                            name: "Spicy Italian Flatizza",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "W6SFXF6GE8192",
                            hidden: false,
                            name: "Veggie Flatizza",
                            price: 450,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            }
                            ]
                            }
                            },
                            {
                            id: "XFMGDRTBD1QP2",
                            name: "Lunch",
                            sortOrder: 3,
                            items: {
                            elements: [
                            {
                            id: "0FZX82V7XCPYY",
                            hidden: false,
                            name: "Dum Biriyani",
                            alternateName: "FBIR",
                            price: 1000,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1446039981000
                            },
                            {
                            id: "WJKJ9K9RFQY0M",
                            hidden: false,
                            name: "Veg Grilled Sandwich",
                            price: 200,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1445890021000
                            }
                            ]
                            }
                            },
                            {
                            id: "65DFGSM0SAC2E",
                            name: "Chopped Salads",
                            sortOrder: 3,
                            items: {
                            elements: [
                            {
                            id: "S8AG0FP08G9PP",
                            hidden: false,
                            name: "B.L.T.",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "HKWKB05F980PP",
                            hidden: false,
                            name: "Big Hot Prastrami",
                            price: 600,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "EKAVKJNQHQE6R",
                            hidden: false,
                            name: "Big Philly Cheesesteak",
                            price: 750,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "DEJC2R40EF3GJ",
                            hidden: false,
                            name: "Black Forest Ham",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "Q9TRSEGCAGPNA",
                            hidden: false,
                            name: "Carved Turkey",
                            price: 700,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "YSQWCF1YJGYE2",
                            hidden: false,
                            name: "Chicken & Bacon Ranch",
                            price: 800,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "DZX76W9CQ7WJW",
                            hidden: false,
                            name: "Chipotle Chicken with Guacamole",
                            price: 750,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "0722AR4NV7WWA",
                            hidden: false,
                            name: "Cold Cut Combo",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "3V8ZM7FXXEPYG",
                            hidden: false,
                            name: "Duble Chicken",
                            price: 750,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "Z34N812P0GJYM",
                            hidden: false,
                            name: "Italian B.M.T.",
                            price: 650,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "C6EBC2FCSGT5G",
                            hidden: false,
                            name: "Meatball Marinara",
                            price: 400,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "BVAJ27PBBTAJ0",
                            hidden: false,
                            name: "Mediterranean Chicken",
                            price: 700,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "7MAPSDQH1EW0T",
                            hidden: false,
                            name: "Sweet Onion Chicken Teriyaki",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "0PKNFRAEP3524",
                            hidden: false,
                            name: "Veggie Delite",
                            price: 525,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            }
                            ]
                            }
                            },
                            {
                            id: "J4QH0Z5TNGZY4",
                            name: "Fish",
                            sortOrder: 4,
                            items: {
                            elements: [
                            {
                            id: "4RGT26FY5HSTR",
                            hidden: false,
                            name: "Chinese Noodles Fish",
                            price: 10,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1445085656000
                            },
                            {
                            id: "C59BW0DC5V558",
                            hidden: false,
                            name: "Fish Curry",
                            price: 500,
                            priceType: "FIXED",
                            defaultTaxRates: true,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1449227837000
                            },
                            {
                            id: "0FZX82V7XCPYY",
                            hidden: false,
                            name: "Dum Biriyani",
                            alternateName: "FBIR",
                            price: 1000,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1446039981000
                            }
                            ]
                            }
                            },
                            {
                            id: "G9FM1VCM9FM7R",
                            name: "Sides",
                            sortOrder: 4,
                            items: {
                            elements: [
                            {
                            id: "H56QTHG3XH6RG",
                            hidden: false,
                            name: "Apple Slices.....",
                            alternateName: "",
                            code: "",
                            price: 160,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            unitName: "",
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1463035080000
                            },
                            {
                            id: "XSAAXNWPQ5C04",
                            hidden: false,
                            name: "Baked Lay’s",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            cost: 0,
                            isRevenue: true,
                            modifiedTime: 1462962544000
                            },
                            {
                            id: "DV5ZBSSJDVM06",
                            hidden: false,
                            name: "DORITOS Nacho Cheese",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "F2WEGJEDDRNJ6",
                            hidden: false,
                            name: "Lay’s Classic Potato Chips",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "CMVD6DY2AAF6T",
                            hidden: false,
                            name: "Sun Chips",
                            price: 130,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "RFN74TAWCAT5C",
                            hidden: false,
                            name: "Chocolate Chip",
                            price: 65,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "YE803SJRBWB48",
                            hidden: false,
                            name: "Double Chocolate Chip",
                            price: 65,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "S5Q4C1X5XZ8E4",
                            hidden: false,
                            name: "Oatmeal Raisin",
                            price: 100,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "RYKHX49QTX6R4",
                            hidden: false,
                            name: "White Chocolate Macadamia",
                            price: 75,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            }
                            ]
                            }
                            },
                            {
                            id: "KF384D0EGA5G4",
                            name: "Drinks",
                            sortOrder: 5,
                            items: {
                            elements: [
                            {
                            id: "G6YVTVTEWJTN6",
                            hidden: false,
                            name: "Coffee",
                            price: 0,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            },
                            {
                            id: "S7XYK7VEYKN04",
                            hidden: false,
                            name: "Fountain Drinks",
                            price: 0,
                            priceType: "FIXED",
                            defaultTaxRates: false,
                            isRevenue: true,
                            modifiedTime: 1460959539000
                            }
                            ]
                            }
                            }
                        ]







        vm.items = [
                {
                id: "44NESZRCYYERE",
                hidden: true,
                name: "Online Order Test Item",
                price: 1,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [ ]
                },
                tags: {
                elements: [
                {
                id: "B0H0EPYYN6626",
                name: "online-hide"
                }
                ]
                },
                modifiedTime: 1463052986000,
                vzCustomData: {
                _id: "57346abc86d4e4d32f901541",
                itemId: "44NESZRCYYERE",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-05-12T11:36:28.178Z",
                createdTimestamp: "2016-05-12T11:36:28.178Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "QY5FXFQ6T9EB8",
                hidden: false,
                name: "Bottled Beverages",
                price: 0,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [ ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460960271000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901054",
                itemId: "QY5FXFQ6T9EB8",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.545Z",
                createdTimestamp: "2016-04-18T06:05:40.545Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "S7XYK7VEYKN04",
                hidden: false,
                name: "Fountain Drinks",
                price: 0,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "42FSNAVWXKA7W",
                name: "Drink SIZE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "RDD7FHECB3S28",
                name: "21oz",
                price: 160,
                modifierGroup: {
                id: "42FSNAVWXKA7W"
                }
                },
                {
                id: "CVZHVWXVDM006",
                name: "30oz",
                price: 180,
                modifierGroup: {
                id: "42FSNAVWXKA7W"
                }
                },
                {
                id: "THFH8JYN4SKQA",
                name: "40oz",
                price: 200,
                modifierGroup: {
                id: "42FSNAVWXKA7W"
                }
                }
                ]
                },
                modifierIds: "RDD7FHECB3S28,CVZHVWXVDM006,THFH8JYN4SKQA"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "KF384D0EGA5G4",
                name: "Drinks",
                sortOrder: 5
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901055",
                itemId: "S7XYK7VEYKN04",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.546Z",
                createdTimestamp: "2016-04-18T06:05:40.546Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "G6YVTVTEWJTN6",
                hidden: false,
                name: "Coffee",
                price: 0,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "RBX0J3W1JNSQE",
                name: "Coffee SIZE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "0JQKPDXAKH38J",
                name: "12oz",
                price: 150,
                modifierGroup: {
                id: "RBX0J3W1JNSQE"
                }
                },
                {
                id: "3NR8WMMPDY20C",
                name: "16oz",
                price: 180,
                modifierGroup: {
                id: "RBX0J3W1JNSQE"
                }
                }
                ]
                },
                modifierIds: "0JQKPDXAKH38J,3NR8WMMPDY20C"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "KF384D0EGA5G4",
                name: "Drinks",
                sortOrder: 5
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901056",
                itemId: "G6YVTVTEWJTN6",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.547Z",
                createdTimestamp: "2016-04-18T06:05:40.547Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "RYKHX49QTX6R4",
                hidden: false,
                name: "White Chocolate Macadamia",
                price: 75,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901057",
                itemId: "RYKHX49QTX6R4",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.548Z",
                createdTimestamp: "2016-04-18T06:05:40.548Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "S5Q4C1X5XZ8E4",
                hidden: false,
                name: "Oatmeal Raisin",
                price: 100,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901058",
                itemId: "S5Q4C1X5XZ8E4",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.549Z",
                createdTimestamp: "2016-04-18T06:05:40.549Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "YE803SJRBWB48",
                hidden: false,
                name: "Double Chocolate Chip",
                price: 65,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901059",
                itemId: "YE803SJRBWB48",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.549Z",
                createdTimestamp: "2016-04-18T06:05:40.549Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "RFN74TAWCAT5C",
                hidden: false,
                name: "Chocolate Chip",
                price: 65,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90105a",
                itemId: "RFN74TAWCAT5C",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.549Z",
                createdTimestamp: "2016-04-18T06:05:40.549Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "CMVD6DY2AAF6T",
                hidden: false,
                name: "Sun Chips",
                price: 130,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90105b",
                itemId: "CMVD6DY2AAF6T",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.550Z",
                createdTimestamp: "2016-04-18T06:05:40.550Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "F2WEGJEDDRNJ6",
                hidden: false,
                name: "Lay’s Classic Potato Chips",
                price: 130,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90105c",
                itemId: "F2WEGJEDDRNJ6",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.551Z",
                createdTimestamp: "2016-04-18T06:05:40.551Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "DV5ZBSSJDVM06",
                hidden: false,
                name: "DORITOS Nacho Cheese",
                price: 130,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90105d",
                itemId: "DV5ZBSSJDVM06",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.552Z",
                createdTimestamp: "2016-04-18T06:05:40.552Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "XSAAXNWPQ5C04",
                hidden: false,
                name: "Baked Lay’s",
                price: 130,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1462962544000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90105e",
                itemId: "XSAAXNWPQ5C04",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.552Z",
                createdTimestamp: "2016-04-18T06:05:40.552Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "H56QTHG3XH6RG",
                hidden: false,
                name: "Apple Slices.....",
                alternateName: "",
                code: "",
                price: 160,
                priceType: "FIXED",
                defaultTaxRates: false,
                unitName: "",
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "G9FM1VCM9FM7R",
                name: "Sides",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1463035080000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90105f",
                itemId: "H56QTHG3XH6RG",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.553Z",
                createdTimestamp: "2016-04-18T06:05:40.553Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "0PKNFRAEP3524",
                hidden: false,
                name: "Veggie Delite",
                price: 525,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901060",
                itemId: "0PKNFRAEP3524",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.556Z",
                createdTimestamp: "2016-04-18T06:05:40.556Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "3ZXENJKH1N6Y4",
                hidden: false,
                name: "Sweet Onion Chicken Teriyaki S",
                price: 650,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901061",
                itemId: "3ZXENJKH1N6Y4",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.560Z",
                createdTimestamp: "2016-04-18T06:05:40.560Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "BVAJ27PBBTAJ0",
                hidden: false,
                name: "Mediterranean Chicken",
                price: 700,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901062",
                itemId: "BVAJ27PBBTAJ0",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.564Z",
                createdTimestamp: "2016-04-18T06:05:40.564Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "48FWDFHWB3A7E",
                hidden: false,
                name: "Meatball Marinara S",
                price: 650,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901063",
                itemId: "48FWDFHWB3A7E",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.567Z",
                createdTimestamp: "2016-04-18T06:05:40.567Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "Z34N812P0GJYM",
                hidden: false,
                name: "Italian B.M.T.",
                price: 650,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901064",
                itemId: "Z34N812P0GJYM",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.571Z",
                createdTimestamp: "2016-04-18T06:05:40.571Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "3V8ZM7FXXEPYG",
                hidden: false,
                name: "Duble Chicken",
                price: 750,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901065",
                itemId: "3V8ZM7FXXEPYG",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.575Z",
                createdTimestamp: "2016-04-18T06:05:40.575Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "0722AR4NV7WWA",
                hidden: false,
                name: "Cold Cut Combo",
                price: 650,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901066",
                itemId: "0722AR4NV7WWA",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.579Z",
                createdTimestamp: "2016-04-18T06:05:40.579Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "DZX76W9CQ7WJW",
                hidden: false,
                name: "Chipotle Chicken with Guacamole",
                price: 750,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901067",
                itemId: "DZX76W9CQ7WJW",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.582Z",
                createdTimestamp: "2016-04-18T06:05:40.582Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "YSQWCF1YJGYE2",
                hidden: false,
                name: "Chicken & Bacon Ranch",
                price: 800,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901068",
                itemId: "YSQWCF1YJGYE2",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.586Z",
                createdTimestamp: "2016-04-18T06:05:40.586Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "Q9TRSEGCAGPNA",
                hidden: false,
                name: "Carved Turkey",
                price: 700,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901069",
                itemId: "Q9TRSEGCAGPNA",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.590Z",
                createdTimestamp: "2016-04-18T06:05:40.590Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "FEBCHESEADQEJ",
                hidden: false,
                name: "Black Forest Ham S",
                price: 650,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90106a",
                itemId: "FEBCHESEADQEJ",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.594Z",
                createdTimestamp: "2016-04-18T06:05:40.594Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "EKAVKJNQHQE6R",
                hidden: false,
                name: "Big Philly Cheesesteak",
                price: 750,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90106b",
                itemId: "EKAVKJNQHQE6R",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.598Z",
                createdTimestamp: "2016-04-18T06:05:40.598Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "HKWKB05F980PP",
                hidden: false,
                name: "Big Hot Prastrami",
                price: 600,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90106c",
                itemId: "HKWKB05F980PP",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.602Z",
                createdTimestamp: "2016-04-18T06:05:40.602Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "S8AG0FP08G9PP",
                hidden: false,
                name: "B.L.T.",
                price: 650,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90106d",
                itemId: "S8AG0FP08G9PP",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.605Z",
                createdTimestamp: "2016-04-18T06:05:40.605Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "W6SFXF6GE8192",
                hidden: false,
                name: "Veggie Flatizza",
                price: 450,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "EZ2CT219JHQYM",
                name: "Flatizzas",
                sortOrder: 2
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90106e",
                itemId: "W6SFXF6GE8192",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.607Z",
                createdTimestamp: "2016-04-18T06:05:40.607Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "Q8JEB1N5WDM18",
                hidden: false,
                name: "Spicy Italian Flatizza",
                price: 450,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "EZ2CT219JHQYM",
                name: "Flatizzas",
                sortOrder: 2
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90106f",
                itemId: "Q8JEB1N5WDM18",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.609Z",
                createdTimestamp: "2016-04-18T06:05:40.609Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "9J79Y5W4316QT",
                hidden: false,
                name: "Pepperoni Flatizza",
                price: 500,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "EZ2CT219JHQYM",
                name: "Flatizzas",
                sortOrder: 2
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901070",
                itemId: "9J79Y5W4316QT",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.611Z",
                createdTimestamp: "2016-04-18T06:05:40.611Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "S07H9PC3YK76P",
                hidden: false,
                name: "Cheese Flatizza",
                price: 400,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "EZ2CT219JHQYM",
                name: "Flatizzas",
                sortOrder: 2
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901071",
                itemId: "S07H9PC3YK76P",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.613Z",
                createdTimestamp: "2016-04-18T06:05:40.613Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "8QR3GSYNGD8MC",
                hidden: false,
                name: "Steak, Egg & Cheese",
                price: 350,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "6GY6Z5QHK2NEJ",
                name: "EGG SELECTION",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R6NN345KEY9MW",
                name: "Egg",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                },
                {
                id: "FJ5DWJMYV0HG2",
                name: "Egg White",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                }
                ]
                },
                modifierIds: "R6NN345KEY9MW,FJ5DWJMYV0HG2"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901072",
                itemId: "8QR3GSYNGD8MC",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.618Z",
                createdTimestamp: "2016-04-18T06:05:40.618Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "XV81FXMJNJ37P",
                hidden: false,
                name: "Egg & Cheese Omelet",
                price: 350,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "6GY6Z5QHK2NEJ",
                name: "EGG SELECTION",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R6NN345KEY9MW",
                name: "Egg",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                },
                {
                id: "FJ5DWJMYV0HG2",
                name: "Egg White",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                }
                ]
                },
                modifierIds: "R6NN345KEY9MW,FJ5DWJMYV0HG2"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901073",
                itemId: "XV81FXMJNJ37P",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.623Z",
                createdTimestamp: "2016-04-18T06:05:40.623Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "0H08A5BH3YX9T",
                hidden: false,
                name: "Black Forest Ham, Egg & Chees",
                price: 350,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "6GY6Z5QHK2NEJ",
                name: "EGG SELECTION",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R6NN345KEY9MW",
                name: "Egg",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                },
                {
                id: "FJ5DWJMYV0HG2",
                name: "Egg White",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                }
                ]
                },
                modifierIds: "R6NN345KEY9MW,FJ5DWJMYV0HG2"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901074",
                itemId: "0H08A5BH3YX9T",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.627Z",
                createdTimestamp: "2016-04-18T06:05:40.627Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "QZY1A2TSSKR20",
                hidden: false,
                name: "Bacon, Egg & Cheese....",
                price: 350,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "HDD5A8W43STG4",
                name: "Seasonings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "4VTSA1HVPZPA2",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "2SAY8F7MY5FSP",
                name: "Pepper",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "DH8W5TV4QR4V4",
                name: "Oregano",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                },
                {
                id: "A8XXWXAZVSN6M",
                name: "Grated Parmesan Cheese",
                price: 0,
                modifierGroup: {
                id: "HDD5A8W43STG4"
                }
                }
                ]
                },
                modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M"
                },
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "6GY6Z5QHK2NEJ",
                name: "EGG SELECTION",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R6NN345KEY9MW",
                name: "Egg",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                },
                {
                id: "FJ5DWJMYV0HG2",
                name: "Egg White",
                price: 0,
                modifierGroup: {
                id: "6GY6Z5QHK2NEJ"
                }
                }
                ]
                },
                modifierIds: "R6NN345KEY9MW,FJ5DWJMYV0HG2"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1462962283000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901075",
                itemId: "QZY1A2TSSKR20",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.632Z",
                createdTimestamp: "2016-04-18T06:05:40.632Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "DKP6EPGEH4VQ4",
                hidden: false,
                name: "Turkey Breast",
                price: 450,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "3MEYSB0JE7MAY",
                name: "Simple 6",
                sortOrder: 0
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901076",
                itemId: "DKP6EPGEH4VQ4",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.636Z",
                createdTimestamp: "2016-04-18T06:05:40.636Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "DCEZZ0TV2M2DR",
                hidden: false,
                name: "Tuna",
                price: 450,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "3MEYSB0JE7MAY",
                name: "Simple 6",
                sortOrder: 0
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901077",
                itemId: "DCEZZ0TV2M2DR",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.639Z",
                createdTimestamp: "2016-04-18T06:05:40.639Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "7MAPSDQH1EW0T",
                hidden: false,
                name: "Sweet Onion Chicken Teriyaki",
                price: 500,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "3MEYSB0JE7MAY",
                name: "Simple 6",
                sortOrder: 0
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901078",
                itemId: "7MAPSDQH1EW0T",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.643Z",
                createdTimestamp: "2016-04-18T06:05:40.643Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "C6EBC2FCSGT5G",
                hidden: false,
                name: "Meatball Marinara",
                price: 400,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "3MEYSB0JE7MAY",
                name: "Simple 6",
                sortOrder: 0
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f901079",
                itemId: "C6EBC2FCSGT5G",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.647Z",
                createdTimestamp: "2016-04-18T06:05:40.647Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "2RMTMDC383XVT",
                hidden: false,
                name: "Italian B.M.T",
                price: 450,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "3MEYSB0JE7MAY",
                name: "Simple 6",
                sortOrder: 0
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90107a",
                itemId: "2RMTMDC383XVT",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.650Z",
                createdTimestamp: "2016-04-18T06:05:40.650Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "DEJC2R40EF3GJ",
                hidden: false,
                name: "Black Forest Ham",
                price: 400,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1AAGRQB8SMBTM",
                name: "BREADS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "JR1T4YJHWHJ80",
                name: "Variety of Breads",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "9P9C9MTRXDCXP",
                name: "Italian",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "AX797WHCH4P3G",
                name: "9-Grain Wheat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "S5M8KVM0E0R1R",
                name: "Honey Oat",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "6XE2H6C682AX8",
                name: "Italian Herbs & Cheese",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "SP59MT6TPQH4R",
                name: "Flatbread",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                },
                {
                id: "3XCX9Q61NAP0C",
                name: "Monteret Cheddar",
                price: 0,
                modifierGroup: {
                id: "1AAGRQB8SMBTM"
                }
                }
                ]
                },
                modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C"
                },
                {
                id: "JG7RG7CK4Q9C2",
                name: "CHEESE",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "FQCR8R6KTEJCG",
                name: "No Cheese",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M0V8P3CVK5Z2M",
                name: "White American",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "5E6PMAPHP1RQC",
                name: "Monterey Cheddar (shredded)",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "DE0434H2MVBJE",
                name: "Provolone",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "M8EJ1WFVZERPA",
                name: "Pepper Jack",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                },
                {
                id: "Q2T22Q882NYT6",
                name: "Shredded Mozzarella",
                price: 0,
                modifierGroup: {
                id: "JG7RG7CK4Q9C2"
                }
                }
                ]
                },
                modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6"
                },
                {
                id: "31JSA7MCB7XYJ",
                name: "VEGGIES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "ZRJ87X2YQRBD4",
                name: "All Veggies",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "JEVBVKBYM1QRR",
                name: "Tomatoes",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "E18VYMGHCJPZ8",
                name: "Cucumbers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "BX7DC99HJ3T0R",
                name: "Lettuce",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "SHDA51WASN0BR",
                name: "Green Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "TYTMBQ3PK22ZG",
                name: "Red Onions",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QSX4BKKGDJ7A2",
                name: "Black Olives",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "QKDNQJKNFWVHW",
                name: "Spinach",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "1XNM1PSTNRJ9E",
                name: "Jalapenos",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                },
                {
                id: "XC0PBNW7TD99E",
                name: "Banana Peppers",
                price: 0,
                modifierGroup: {
                id: "31JSA7MCB7XYJ"
                }
                }
                ]
                },
                modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E"
                },
                {
                id: "QY07W7XP0V9SM",
                name: "SAUCES",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "GBXN3QD4CA6VR",
                name: "Mayonnaise",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "MM4X6187VCSDY",
                name: "Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "CWDYS35HCCW66",
                name: "Chipotle Southwest",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "EHX4RYS2CHJG6",
                name: "Oil and Vinegar",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "HCWVY55WTYYBG",
                name: "Olive Oil Blend",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "F4M9FC0SGMQXC",
                name: "Ranch",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BQ6DPVS80BZEE",
                name: "Sweet Onion",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "J69AP2PQC9SSC",
                name: "Yellow Mustard",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "05Y79CTJACRH6",
                name: "Creamy Sriracha",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "BWY2TY6SAWH6P",
                name: "SUBWAY Vinaigrette",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                },
                {
                id: "1VS39NDJDB5TW",
                name: "BBQ",
                price: 0,
                modifierGroup: {
                id: "QY07W7XP0V9SM"
                }
                }
                ]
                },
                modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW"
                },
                {
                id: "TTFTXX7YJ7AG6",
                name: "EXTRAS",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "R29ZGS3CMW0SW",
                name: "Extra Chees",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "2H8QRME5XEDK6",
                name: "Bacon",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "SWJHR7A2WAPAT",
                name: "Pepperoni",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "RHJXC2WB4VXAT",
                name: "Avocado",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "BXNS3XS5VVBB0",
                name: "Guacamole",
                price: 75,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                },
                {
                id: "0Z5WD7EQMGQM2",
                name: "Double Meat",
                price: 150,
                modifierGroup: {
                id: "TTFTXX7YJ7AG6"
                }
                }
                ]
                },
                modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "65DFGSM0SAC2E",
                name: "Chopped Salads",
                sortOrder: 3
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "3MEYSB0JE7MAY",
                name: "Simple 6",
                sortOrder: 0
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460959539000,
                vzCustomData: {
                _id: "5714793486d4e4d32f90107b",
                itemId: "DEJC2R40EF3GJ",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-04-18T06:05:40.654Z",
                createdTimestamp: "2016-04-18T06:05:40.654Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "466BS8B891TP0",
                hidden: false,
                name: "Grasshopper Juice",
                price: 1565,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1453931071000,
                vzCustomData: {
                _id: "56a93a4086d4e4d32f8ff7f2",
                itemId: "466BS8B891TP0",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-01-27T21:44:32.502Z",
                createdTimestamp: "2016-01-27T21:44:32.502Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "J98RXG5AYZQSR",
                hidden: false,
                name: "cricket pies",
                alternateName: "CPIES",
                code: "",
                sku: "cpies",
                price: 1500,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [
                {
                id: "85X6HRNK615PJ",
                name: "more crickets a",
                minRequired: 1,
                maxAllowed: 1,
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "PQ4CQAEMPV144",
                name: "crickets a",
                price: 150,
                modifierGroup: {
                id: "85X6HRNK615PJ"
                }
                }
                ]
                },
                modifierIds: "PQ4CQAEMPV144"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "A6XTMDKWR8BBW",
                name: "Eats"
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460086117000,
                vzCustomData: {
                _id: "568c168f7d8b6a31d0daaa3e",
                itemId: "J98RXG5AYZQSR",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-04-08T03:05:32.171Z",
                createdTimestamp: "2016-04-08T03:05:32.171Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "XF1X2ZNMHDS6R",
                hidden: false,
                name: "fireflies",
                alternateName: "",
                code: "",
                sku: "ffls",
                price: 5000,
                priceType: "FIXED",
                defaultTaxRates: true,
                unitName: "",
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [
                {
                id: "85X6HRNK615PJ",
                name: "more crickets a",
                minRequired: 1,
                maxAllowed: 1,
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "PQ4CQAEMPV144",
                name: "crickets a",
                price: 150,
                modifierGroup: {
                id: "85X6HRNK615PJ"
                }
                }
                ]
                },
                modifierIds: "PQ4CQAEMPV144"
                },
                {
                id: "YNXNM8ZFVJRKG",
                name: "Pizza Toppings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "9AVAQ1J8JE0ZE",
                name: "Cheese",
                alternateName: "",
                price: 50,
                modifierGroup: {
                id: "YNXNM8ZFVJRKG"
                }
                },
                {
                id: "77XKW50E59WXM",
                name: "Tomato",
                price: 0,
                modifierGroup: {
                id: "YNXNM8ZFVJRKG"
                }
                }
                ]
                },
                modifierIds: "9AVAQ1J8JE0ZE,77XKW50E59WXM"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "A6XTMDKWR8BBW",
                name: "Eats"
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1452278880000,
                vzCustomData: {
                _id: "568c16077d8b6a31d0daaa3d",
                itemId: "XF1X2ZNMHDS6R",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-01-08T18:48:01.036Z",
                createdTimestamp: "2016-01-08T18:48:01.036Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "C59BW0DC5V558",
                hidden: false,
                name: "Fish Curry",
                price: 500,
                priceType: "FIXED",
                defaultTaxRates: true,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "J4QH0Z5TNGZY4",
                name: "Fish",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1449227837000,
                vzCustomData: {
                _id: "5661763ed11fcb9c96f14f21",
                itemId: "C59BW0DC5V558",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-12-04T11:17:18.069Z",
                createdTimestamp: "2015-12-04T11:17:18.069Z",
                hideInApp: false,
                description: "I like fish"
                }
                },
                {
                id: "062F3SAXTRDPP",
                hidden: true,
                name: "Delivery Fee",
                price: 600,
                priceType: "FIXED",
                defaultTaxRates: false,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1460357609000,
                vzCustomData: {
                _id: "5660cd4cd11fcb9c96f14f1e",
                itemId: "062F3SAXTRDPP",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-03-31T14:15:23.067Z",
                createdTimestamp: "2016-03-31T14:15:23.067Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "9Z2TZ07Q9KY8P",
                hidden: false,
                name: "Cool Blue",
                alternateName: "Soda",
                price: 1000,
                priceType: "FIXED",
                defaultTaxRates: true,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1445250271000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fad",
                itemId: "9Z2TZ07Q9KY8P",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-28T19:57:44.368Z",
                createdTimestamp: "2015-10-28T19:57:44.368Z",
                hideInApp: false,
                description: "Test.."
                }
                },
                {
                id: "4RGT26FY5HSTR",
                hidden: false,
                name: "Chinese Noodles Fish",
                price: 10,
                priceType: "FIXED",
                defaultTaxRates: true,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "J4QH0Z5TNGZY4",
                name: "Fish",
                sortOrder: 4
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1445085656000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fac",
                itemId: "4RGT26FY5HSTR",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-28T19:57:44.368Z",
                createdTimestamp: "2015-10-28T19:57:44.368Z",
                hideInApp: false,
                description: "Hakka noodles with small fish."
                }
                },
                {
                id: "WJKJ9K9RFQY0M",
                hidden: false,
                name: "Veg Grilled Sandwich",
                price: 200,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "MGBE9AQTJBNG2",
                name: "VAT",
                rate: 250000,
                isDefault: false
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "XFMGDRTBD1QP2",
                name: "Lunch",
                sortOrder: 3
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1445890021000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fab",
                itemId: "WJKJ9K9RFQY0M",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-28T19:57:44.368Z",
                createdTimestamp: "2015-10-28T19:57:44.368Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "70P1B6G1Q0WA0",
                hidden: false,
                name: "Delivery Fee",
                price: 500,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1452274352000,
                vzCustomData: {
                _id: "563128b8b74c666a22750faa",
                itemId: "70P1B6G1Q0WA0",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2016-01-08T17:32:45.267Z",
                createdTimestamp: "2016-01-08T17:32:45.267Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "GBRMGBJ2573W8",
                hidden: true,
                name: "Delivery Fee",
                price: 500,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [ ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1446554290000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa9",
                itemId: "GBRMGBJ2573W8",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                isDeleted: false,
                modifiedTimestamp: "2015-11-03T12:38:11.286Z",
                createdTimestamp: "2015-11-03T12:38:11.286Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "SQX1A5WVBE8XR",
                hidden: false,
                name: "Barefoot Blue Moscato",
                alternateName: "BF RED MOS",
                price: 2000,
                priceType: "FIXED",
                defaultTaxRates: true,
                unitName: "Bottle",
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "M5KJAAGCM5QGC",
                name: "Wines"
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1457072173000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa8",
                itemId: "SQX1A5WVBE8XR",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-03-04T06:16:13.161Z",
                createdTimestamp: "2016-03-04T06:16:13.161Z",
                hideInApp: false,
                description: "Description."
                }
                },
                {
                id: "0FZX82V7XCPYY",
                hidden: false,
                name: "Dum Biriyani",
                alternateName: "FBIR",
                price: 1000,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                taxRates: {
                elements: [
                {
                id: "61K05RPRY04D8",
                name: "Sales Tax",
                rate: 450000,
                isDefault: false
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "J4QH0Z5TNGZY4",
                name: "Fish",
                sortOrder: 4
                },
                {
                id: "XFMGDRTBD1QP2",
                name: "Lunch",
                sortOrder: 3
                },
                {
                id: "FJ798WE2YVXGM",
                name: "Beers",
                sortOrder: 1
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                },
                {
                id: "A6XTMDKWR8BBW",
                name: "Eats"
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                modifiedTime: 1446039981000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa7",
                itemId: "0FZX82V7XCPYY",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-28T19:57:44.365Z",
                createdTimestamp: "2015-10-28T19:57:44.365Z",
                hideInApp: false,
                description: "Spicy Indian light food."
                }
                },
                {
                id: "ESHA66WZVVWG6",
                hidden: false,
                name: "Mango Lassi",
                alternateName: "MLASI",
                code: "DR_MLASI",
                price: 239,
                priceType: "FIXED",
                defaultTaxRates: false,
                cost: 0,
                isRevenue: true,
                stockCount: 0,
                taxRates: {
                elements: [
                {
                id: "MGBE9AQTJBNG2",
                name: "VAT",
                rate: 250000,
                isDefault: false
                },
                {
                id: "7118RAYQMDFDT",
                name: "Service Tax",
                rate: 60000,
                isDefault: false
                }
                ]
                },
                modifierGroups: {
                elements: [
                {
                id: "1N4YHSC1SNJRC",
                name: "Drinks Modifier",
                minRequired: 1,
                maxAllowed: 2,
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "MJWJVNBWD2956",
                name: "Extra Sugar",
                price: 10,
                modifierGroup: {
                id: "1N4YHSC1SNJRC"
                }
                },
                {
                id: "1GM2KCJ0M4HVT",
                name: "With Ice",
                price: 10,
                modifierGroup: {
                id: "1N4YHSC1SNJRC"
                }
                },
                {
                id: "2CHV3R1N53TJG",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "1N4YHSC1SNJRC"
                }
                }
                ]
                },
                modifierIds: "MJWJVNBWD2956,1GM2KCJ0M4HVT,2CHV3R1N53TJG"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [
                {
                id: "2MVXE8WW4PNG4",
                name: "Cold"
                }
                ]
                },
                itemStock: {
                item: {
                id: "ESHA66WZVVWG6"
                },
                stockCount: 0,
                quantity: 0
                },
                modifiedTime: 1445068820000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa6",
                itemId: "ESHA66WZVVWG6",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-30T06:15:26.106Z",
                createdTimestamp: "2015-10-30T06:15:26.106Z",
                hideInApp: false,
                description: "Indian Drink."
                }
                },
                {
                id: "PZZ8NCZ018EGA",
                hidden: false,
                name: "Lime Juice",
                alternateName: "",
                code: "",
                sku: "",
                price: 150,
                priceType: "FIXED",
                defaultTaxRates: true,
                unitName: "",
                cost: 0,
                isRevenue: true,
                stockCount: 0,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [
                {
                id: "YNXNM8ZFVJRKG",
                name: "Pizza Toppings",
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "9AVAQ1J8JE0ZE",
                name: "Cheese",
                alternateName: "",
                price: 50,
                modifierGroup: {
                id: "YNXNM8ZFVJRKG"
                }
                },
                {
                id: "77XKW50E59WXM",
                name: "Tomato",
                price: 0,
                modifierGroup: {
                id: "YNXNM8ZFVJRKG"
                }
                }
                ]
                },
                modifierIds: "9AVAQ1J8JE0ZE,77XKW50E59WXM"
                },
                {
                id: "1N4YHSC1SNJRC",
                name: "Drinks Modifier",
                minRequired: 1,
                maxAllowed: 2,
                showByDefault: true,
                modifiers: {
                elements: [
                {
                id: "MJWJVNBWD2956",
                name: "Extra Sugar",
                price: 10,
                modifierGroup: {
                id: "1N4YHSC1SNJRC"
                }
                },
                {
                id: "1GM2KCJ0M4HVT",
                name: "With Ice",
                price: 10,
                modifierGroup: {
                id: "1N4YHSC1SNJRC"
                }
                },
                {
                id: "2CHV3R1N53TJG",
                name: "Salt",
                price: 0,
                modifierGroup: {
                id: "1N4YHSC1SNJRC"
                }
                }
                ]
                },
                modifierIds: "MJWJVNBWD2956,1GM2KCJ0M4HVT,2CHV3R1N53TJG"
                }
                ]
                },
                categories: {
                elements: [
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [ ]
                },
                itemStock: {
                item: {
                id: "PZZ8NCZ018EGA"
                },
                stockCount: 0,
                quantity: 0
                },
                modifiedTime: 1440185159000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa5",
                itemId: "PZZ8NCZ018EGA",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-28T19:57:44.364Z",
                createdTimestamp: "2015-10-28T19:57:44.364Z",
                hideInApp: false,
                description: "Sweet lime juice."
                }
                },
                {
                id: "8GHC9TBGZTTF4",
                hidden: false,
                name: "Bud Lights",
                alternateName: "",
                code: "",
                sku: "BDL1",
                price: 350,
                priceType: "FIXED",
                defaultTaxRates: true,
                unitName: "",
                cost: 0,
                isRevenue: true,
                stockCount: 0,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "FJ798WE2YVXGM",
                name: "Beers",
                sortOrder: 1
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [
                {
                id: "2MVXE8WW4PNG4",
                name: "Cold"
                }
                ]
                },
                itemStock: {
                item: {
                id: "8GHC9TBGZTTF4"
                },
                stockCount: 0,
                quantity: 0
                },
                modifiedTime: 1445074898000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa4",
                itemId: "8GHC9TBGZTTF4",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2015-10-28T19:57:44.364Z",
                createdTimestamp: "2015-10-28T19:57:44.364Z",
                hideInApp: false,
                description: "Drinkes choice."
                }
                },
                {
                id: "RBHX3JGAX06VY",
                hidden: false,
                name: "Cougarss",
                alternateName: "",
                code: "",
                sku: "",
                price: 835,
                priceType: "FIXED",
                defaultTaxRates: false,
                unitName: "",
                cost: 0,
                isRevenue: true,
                stockCount: 0,
                taxRates: {
                elements: [
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [
                {
                id: "FJ798WE2YVXGM",
                name: "Beers",
                sortOrder: 1
                },
                {
                id: "P40M0JGJVJS48",
                name: "Breakfast",
                sortOrder: 1
                }
                ]
                },
                tags: {
                elements: [
                {
                id: "2MVXE8WW4PNG4",
                name: "Cold"
                }
                ]
                },
                itemStock: {
                item: {
                id: "RBHX3JGAX06VY"
                },
                stockCount: 0,
                quantity: 0
                },
                modifiedTime: 1446103025000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa3",
                itemId: "RBHX3JGAX06VY",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-01-13T16:21:33.005Z",
                createdTimestamp: "2016-01-13T16:21:33.005Z",
                hideInApp: false,
                description: ""
                }
                },
                {
                id: "BRYK6CBKTXZB4",
                hidden: false,
                name: "Veg Biryani",
                alternateName: "",
                code: "BIR",
                sku: "BIR123",
                price: 1299,
                priceType: "FIXED",
                defaultTaxRates: true,
                unitName: "",
                cost: 0,
                isRevenue: true,
                stockCount: 0,
                taxRates: {
                elements: [
                {
                id: "AQFT9TTH4TZ7Y",
                name: "State Sales Tax",
                rate: 925000,
                isDefault: true
                },
                {
                id: "43PDWJ88VVCSP",
                name: "Tax",
                rate: 875000,
                isDefault: true
                },
                {
                id: "THDQ2A93CCGBJ",
                name: "18.25",
                rate: 1825000,
                isDefault: true
                }
                ]
                },
                modifierGroups: {
                elements: [ ]
                },
                categories: {
                elements: [ ]
                },
                tags: {
                elements: [ ]
                },
                itemStock: {
                item: {
                id: "BRYK6CBKTXZB4"
                },
                stockCount: 0,
                quantity: 0
                },
                modifiedTime: 1457072183000,
                vzCustomData: {
                _id: "563128b8b74c666a22750fa2",
                itemId: "BRYK6CBKTXZB4",
                merchantId: "13HRYK02HZM30",
                __v: 0,
                image: {
                type: "Buffer",
                data: [ ]
                },
                isDeleted: false,
                modifiedTimestamp: "2016-03-04T06:16:25.155Z",
                createdTimestamp: "2016-03-04T06:16:25.155Z",
                hideInApp: true,
                description: "Biryani"
                }
                }
                ];


vm.openModifiers = function(ev){
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/examples/dashboards/social/dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
}

function DialogController($scope, $mdDialog) {

    var vm = this;

    $scope.modifierGroups = [
{
id: "RBX0J3W1JNSQE",
name: "Coffee SIZE",
showByDefault: true,
modifiers: {
elements: [
{
id: "0JQKPDXAKH38J",
name: "12oz",
price: 150,
modifierGroup: {
id: "RBX0J3W1JNSQE"
}
},
{
id: "3NR8WMMPDY20C",
name: "16oz",
price: 180,
modifierGroup: {
id: "RBX0J3W1JNSQE"
}
}
]
},
modifierIds: "0JQKPDXAKH38J,3NR8WMMPDY20C",
items: {
elements: [
{
id: "G6YVTVTEWJTN6",
hidden: false,
name: "Coffee",
price: 0,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "HDD5A8W43STG4",
name: "Seasonings",
showByDefault: true,
modifiers: {
elements: [
{
id: "4VTSA1HVPZPA2",
name: "Salt",
price: 0,
modifierGroup: {
id: "HDD5A8W43STG4"
}
},
{
id: "2SAY8F7MY5FSP",
name: "Pepper",
price: 0,
modifierGroup: {
id: "HDD5A8W43STG4"
}
},
{
id: "DH8W5TV4QR4V4",
name: "Oregano",
price: 0,
modifierGroup: {
id: "HDD5A8W43STG4"
}
},
{
id: "A8XXWXAZVSN6M",
name: "Grated Parmesan Cheese",
price: 0,
modifierGroup: {
id: "HDD5A8W43STG4"
}
}
]
},
modifierIds: "4VTSA1HVPZPA2,2SAY8F7MY5FSP,DH8W5TV4QR4V4,A8XXWXAZVSN6M",
items: {
elements: [
{
id: "0PKNFRAEP3524",
hidden: false,
name: "Veggie Delite",
price: 525,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3ZXENJKH1N6Y4",
hidden: false,
name: "Sweet Onion Chicken Teriyaki S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "BVAJ27PBBTAJ0",
hidden: false,
name: "Mediterranean Chicken",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "48FWDFHWB3A7E",
hidden: false,
name: "Meatball Marinara S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Z34N812P0GJYM",
hidden: false,
name: "Italian B.M.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3V8ZM7FXXEPYG",
hidden: false,
name: "Duble Chicken",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0722AR4NV7WWA",
hidden: false,
name: "Cold Cut Combo",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DZX76W9CQ7WJW",
hidden: false,
name: "Chipotle Chicken with Guacamole",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "YSQWCF1YJGYE2",
hidden: false,
name: "Chicken & Bacon Ranch",
price: 800,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q9TRSEGCAGPNA",
hidden: false,
name: "Carved Turkey",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "FEBCHESEADQEJ",
hidden: false,
name: "Black Forest Ham S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "EKAVKJNQHQE6R",
hidden: false,
name: "Big Philly Cheesesteak",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "HKWKB05F980PP",
hidden: false,
name: "Big Hot Prastrami",
price: 600,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S8AG0FP08G9PP",
hidden: false,
name: "B.L.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
}
]
},
vzCustomData: [ ]
},
{
id: "1AAGRQB8SMBTM",
name: "BREADS",
showByDefault: true,
modifiers: {
elements: [
{
id: "JR1T4YJHWHJ80",
name: "Variety of Breads",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
},
{
id: "9P9C9MTRXDCXP",
name: "Italian",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
},
{
id: "AX797WHCH4P3G",
name: "9-Grain Wheat",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
},
{
id: "S5M8KVM0E0R1R",
name: "Honey Oat",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
},
{
id: "6XE2H6C682AX8",
name: "Italian Herbs & Cheese",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
},
{
id: "SP59MT6TPQH4R",
name: "Flatbread",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
},
{
id: "3XCX9Q61NAP0C",
name: "Monteret Cheddar",
price: 0,
modifierGroup: {
id: "1AAGRQB8SMBTM"
}
}
]
},
modifierIds: "JR1T4YJHWHJ80,9P9C9MTRXDCXP,AX797WHCH4P3G,S5M8KVM0E0R1R,6XE2H6C682AX8,SP59MT6TPQH4R,3XCX9Q61NAP0C",
items: {
elements: [
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
},
{
id: "DKP6EPGEH4VQ4",
hidden: false,
name: "Turkey Breast",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DCEZZ0TV2M2DR",
hidden: false,
name: "Tuna",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "7MAPSDQH1EW0T",
hidden: false,
name: "Sweet Onion Chicken Teriyaki",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "C6EBC2FCSGT5G",
hidden: false,
name: "Meatball Marinara",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "2RMTMDC383XVT",
hidden: false,
name: "Italian B.M.T",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DEJC2R40EF3GJ",
hidden: false,
name: "Black Forest Ham",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "42FSNAVWXKA7W",
name: "Drink SIZE",
showByDefault: true,
modifiers: {
elements: [
{
id: "RDD7FHECB3S28",
name: "21oz",
price: 160,
modifierGroup: {
id: "42FSNAVWXKA7W"
}
},
{
id: "CVZHVWXVDM006",
name: "30oz",
price: 180,
modifierGroup: {
id: "42FSNAVWXKA7W"
}
},
{
id: "THFH8JYN4SKQA",
name: "40oz",
price: 200,
modifierGroup: {
id: "42FSNAVWXKA7W"
}
}
]
},
modifierIds: "RDD7FHECB3S28,CVZHVWXVDM006,THFH8JYN4SKQA",
items: {
elements: [
{
id: "S7XYK7VEYKN04",
hidden: false,
name: "Fountain Drinks",
price: 0,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "JG7RG7CK4Q9C2",
name: "CHEESE",
showByDefault: true,
modifiers: {
elements: [
{
id: "FQCR8R6KTEJCG",
name: "No Cheese",
price: 0,
modifierGroup: {
id: "JG7RG7CK4Q9C2"
}
},
{
id: "M0V8P3CVK5Z2M",
name: "White American",
price: 0,
modifierGroup: {
id: "JG7RG7CK4Q9C2"
}
},
{
id: "5E6PMAPHP1RQC",
name: "Monterey Cheddar (shredded)",
price: 0,
modifierGroup: {
id: "JG7RG7CK4Q9C2"
}
},
{
id: "DE0434H2MVBJE",
name: "Provolone",
price: 0,
modifierGroup: {
id: "JG7RG7CK4Q9C2"
}
},
{
id: "M8EJ1WFVZERPA",
name: "Pepper Jack",
price: 0,
modifierGroup: {
id: "JG7RG7CK4Q9C2"
}
},
{
id: "Q2T22Q882NYT6",
name: "Shredded Mozzarella",
price: 0,
modifierGroup: {
id: "JG7RG7CK4Q9C2"
}
}
]
},
modifierIds: "FQCR8R6KTEJCG,M0V8P3CVK5Z2M,5E6PMAPHP1RQC,DE0434H2MVBJE,M8EJ1WFVZERPA,Q2T22Q882NYT6",
items: {
elements: [
{
id: "0PKNFRAEP3524",
hidden: false,
name: "Veggie Delite",
price: 525,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3ZXENJKH1N6Y4",
hidden: false,
name: "Sweet Onion Chicken Teriyaki S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "BVAJ27PBBTAJ0",
hidden: false,
name: "Mediterranean Chicken",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "48FWDFHWB3A7E",
hidden: false,
name: "Meatball Marinara S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Z34N812P0GJYM",
hidden: false,
name: "Italian B.M.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3V8ZM7FXXEPYG",
hidden: false,
name: "Duble Chicken",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0722AR4NV7WWA",
hidden: false,
name: "Cold Cut Combo",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DZX76W9CQ7WJW",
hidden: false,
name: "Chipotle Chicken with Guacamole",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "YSQWCF1YJGYE2",
hidden: false,
name: "Chicken & Bacon Ranch",
price: 800,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q9TRSEGCAGPNA",
hidden: false,
name: "Carved Turkey",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "FEBCHESEADQEJ",
hidden: false,
name: "Black Forest Ham S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "EKAVKJNQHQE6R",
hidden: false,
name: "Big Philly Cheesesteak",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "HKWKB05F980PP",
hidden: false,
name: "Big Hot Prastrami",
price: 600,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S8AG0FP08G9PP",
hidden: false,
name: "B.L.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
},
{
id: "DKP6EPGEH4VQ4",
hidden: false,
name: "Turkey Breast",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DCEZZ0TV2M2DR",
hidden: false,
name: "Tuna",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "7MAPSDQH1EW0T",
hidden: false,
name: "Sweet Onion Chicken Teriyaki",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "C6EBC2FCSGT5G",
hidden: false,
name: "Meatball Marinara",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "2RMTMDC383XVT",
hidden: false,
name: "Italian B.M.T",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DEJC2R40EF3GJ",
hidden: false,
name: "Black Forest Ham",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "6GY6Z5QHK2NEJ",
name: "EGG SELECTION",
showByDefault: true,
modifiers: {
elements: [
{
id: "R6NN345KEY9MW",
name: "Egg",
price: 0,
modifierGroup: {
id: "6GY6Z5QHK2NEJ"
}
},
{
id: "FJ5DWJMYV0HG2",
name: "Egg White",
price: 0,
modifierGroup: {
id: "6GY6Z5QHK2NEJ"
}
}
]
},
modifierIds: "R6NN345KEY9MW,FJ5DWJMYV0HG2",
items: {
elements: [
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
}
]
},
vzCustomData: [ ]
},
{
id: "31JSA7MCB7XYJ",
name: "VEGGIES",
showByDefault: true,
modifiers: {
elements: [
{
id: "ZRJ87X2YQRBD4",
name: "All Veggies",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "JEVBVKBYM1QRR",
name: "Tomatoes",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "E18VYMGHCJPZ8",
name: "Cucumbers",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "BX7DC99HJ3T0R",
name: "Lettuce",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "SHDA51WASN0BR",
name: "Green Peppers",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "TYTMBQ3PK22ZG",
name: "Red Onions",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "QSX4BKKGDJ7A2",
name: "Black Olives",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "QKDNQJKNFWVHW",
name: "Spinach",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "1XNM1PSTNRJ9E",
name: "Jalapenos",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
},
{
id: "XC0PBNW7TD99E",
name: "Banana Peppers",
price: 0,
modifierGroup: {
id: "31JSA7MCB7XYJ"
}
}
]
},
modifierIds: "ZRJ87X2YQRBD4,JEVBVKBYM1QRR,E18VYMGHCJPZ8,BX7DC99HJ3T0R,SHDA51WASN0BR,TYTMBQ3PK22ZG,QSX4BKKGDJ7A2,QKDNQJKNFWVHW,1XNM1PSTNRJ9E,XC0PBNW7TD99E",
items: {
elements: [
{
id: "0PKNFRAEP3524",
hidden: false,
name: "Veggie Delite",
price: 525,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3ZXENJKH1N6Y4",
hidden: false,
name: "Sweet Onion Chicken Teriyaki S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "BVAJ27PBBTAJ0",
hidden: false,
name: "Mediterranean Chicken",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "48FWDFHWB3A7E",
hidden: false,
name: "Meatball Marinara S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Z34N812P0GJYM",
hidden: false,
name: "Italian B.M.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3V8ZM7FXXEPYG",
hidden: false,
name: "Duble Chicken",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0722AR4NV7WWA",
hidden: false,
name: "Cold Cut Combo",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DZX76W9CQ7WJW",
hidden: false,
name: "Chipotle Chicken with Guacamole",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "YSQWCF1YJGYE2",
hidden: false,
name: "Chicken & Bacon Ranch",
price: 800,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q9TRSEGCAGPNA",
hidden: false,
name: "Carved Turkey",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "FEBCHESEADQEJ",
hidden: false,
name: "Black Forest Ham S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "EKAVKJNQHQE6R",
hidden: false,
name: "Big Philly Cheesesteak",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "HKWKB05F980PP",
hidden: false,
name: "Big Hot Prastrami",
price: 600,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S8AG0FP08G9PP",
hidden: false,
name: "B.L.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "W6SFXF6GE8192",
hidden: false,
name: "Veggie Flatizza",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q8JEB1N5WDM18",
hidden: false,
name: "Spicy Italian Flatizza",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "9J79Y5W4316QT",
hidden: false,
name: "Pepperoni Flatizza",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S07H9PC3YK76P",
hidden: false,
name: "Cheese Flatizza",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
},
{
id: "DKP6EPGEH4VQ4",
hidden: false,
name: "Turkey Breast",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DCEZZ0TV2M2DR",
hidden: false,
name: "Tuna",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "7MAPSDQH1EW0T",
hidden: false,
name: "Sweet Onion Chicken Teriyaki",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "C6EBC2FCSGT5G",
hidden: false,
name: "Meatball Marinara",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "2RMTMDC383XVT",
hidden: false,
name: "Italian B.M.T",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DEJC2R40EF3GJ",
hidden: false,
name: "Black Forest Ham",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "QY07W7XP0V9SM",
name: "SAUCES",
showByDefault: true,
modifiers: {
elements: [
{
id: "GBXN3QD4CA6VR",
name: "Mayonnaise",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "MM4X6187VCSDY",
name: "Mustard",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "CWDYS35HCCW66",
name: "Chipotle Southwest",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "EHX4RYS2CHJG6",
name: "Oil and Vinegar",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "HCWVY55WTYYBG",
name: "Olive Oil Blend",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "F4M9FC0SGMQXC",
name: "Ranch",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "BQ6DPVS80BZEE",
name: "Sweet Onion",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "J69AP2PQC9SSC",
name: "Yellow Mustard",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "05Y79CTJACRH6",
name: "Creamy Sriracha",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "BWY2TY6SAWH6P",
name: "SUBWAY Vinaigrette",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
},
{
id: "1VS39NDJDB5TW",
name: "BBQ",
price: 0,
modifierGroup: {
id: "QY07W7XP0V9SM"
}
}
]
},
modifierIds: "GBXN3QD4CA6VR,MM4X6187VCSDY,CWDYS35HCCW66,EHX4RYS2CHJG6,HCWVY55WTYYBG,F4M9FC0SGMQXC,BQ6DPVS80BZEE,J69AP2PQC9SSC,05Y79CTJACRH6,BWY2TY6SAWH6P,1VS39NDJDB5TW",
items: {
elements: [
{
id: "0PKNFRAEP3524",
hidden: false,
name: "Veggie Delite",
price: 525,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3ZXENJKH1N6Y4",
hidden: false,
name: "Sweet Onion Chicken Teriyaki S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "BVAJ27PBBTAJ0",
hidden: false,
name: "Mediterranean Chicken",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "48FWDFHWB3A7E",
hidden: false,
name: "Meatball Marinara S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Z34N812P0GJYM",
hidden: false,
name: "Italian B.M.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3V8ZM7FXXEPYG",
hidden: false,
name: "Duble Chicken",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0722AR4NV7WWA",
hidden: false,
name: "Cold Cut Combo",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DZX76W9CQ7WJW",
hidden: false,
name: "Chipotle Chicken with Guacamole",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "YSQWCF1YJGYE2",
hidden: false,
name: "Chicken & Bacon Ranch",
price: 800,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q9TRSEGCAGPNA",
hidden: false,
name: "Carved Turkey",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "FEBCHESEADQEJ",
hidden: false,
name: "Black Forest Ham S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "EKAVKJNQHQE6R",
hidden: false,
name: "Big Philly Cheesesteak",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "HKWKB05F980PP",
hidden: false,
name: "Big Hot Prastrami",
price: 600,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S8AG0FP08G9PP",
hidden: false,
name: "B.L.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
},
{
id: "DKP6EPGEH4VQ4",
hidden: false,
name: "Turkey Breast",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DCEZZ0TV2M2DR",
hidden: false,
name: "Tuna",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "7MAPSDQH1EW0T",
hidden: false,
name: "Sweet Onion Chicken Teriyaki",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "C6EBC2FCSGT5G",
hidden: false,
name: "Meatball Marinara",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "2RMTMDC383XVT",
hidden: false,
name: "Italian B.M.T",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DEJC2R40EF3GJ",
hidden: false,
name: "Black Forest Ham",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "TTFTXX7YJ7AG6",
name: "EXTRAS",
showByDefault: true,
modifiers: {
elements: [
{
id: "R29ZGS3CMW0SW",
name: "Extra Chees",
price: 75,
modifierGroup: {
id: "TTFTXX7YJ7AG6"
}
},
{
id: "2H8QRME5XEDK6",
name: "Bacon",
price: 75,
modifierGroup: {
id: "TTFTXX7YJ7AG6"
}
},
{
id: "SWJHR7A2WAPAT",
name: "Pepperoni",
price: 75,
modifierGroup: {
id: "TTFTXX7YJ7AG6"
}
},
{
id: "RHJXC2WB4VXAT",
name: "Avocado",
price: 75,
modifierGroup: {
id: "TTFTXX7YJ7AG6"
}
},
{
id: "BXNS3XS5VVBB0",
name: "Guacamole",
price: 75,
modifierGroup: {
id: "TTFTXX7YJ7AG6"
}
},
{
id: "0Z5WD7EQMGQM2",
name: "Double Meat",
price: 150,
modifierGroup: {
id: "TTFTXX7YJ7AG6"
}
}
]
},
modifierIds: "R29ZGS3CMW0SW,2H8QRME5XEDK6,SWJHR7A2WAPAT,RHJXC2WB4VXAT,BXNS3XS5VVBB0,0Z5WD7EQMGQM2",
items: {
elements: [
{
id: "0PKNFRAEP3524",
hidden: false,
name: "Veggie Delite",
price: 525,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3ZXENJKH1N6Y4",
hidden: false,
name: "Sweet Onion Chicken Teriyaki S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "BVAJ27PBBTAJ0",
hidden: false,
name: "Mediterranean Chicken",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "48FWDFHWB3A7E",
hidden: false,
name: "Meatball Marinara S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Z34N812P0GJYM",
hidden: false,
name: "Italian B.M.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "3V8ZM7FXXEPYG",
hidden: false,
name: "Duble Chicken",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0722AR4NV7WWA",
hidden: false,
name: "Cold Cut Combo",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DZX76W9CQ7WJW",
hidden: false,
name: "Chipotle Chicken with Guacamole",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "YSQWCF1YJGYE2",
hidden: false,
name: "Chicken & Bacon Ranch",
price: 800,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q9TRSEGCAGPNA",
hidden: false,
name: "Carved Turkey",
price: 700,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "FEBCHESEADQEJ",
hidden: false,
name: "Black Forest Ham S",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "EKAVKJNQHQE6R",
hidden: false,
name: "Big Philly Cheesesteak",
price: 750,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "HKWKB05F980PP",
hidden: false,
name: "Big Hot Prastrami",
price: 600,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S8AG0FP08G9PP",
hidden: false,
name: "B.L.T.",
price: 650,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "W6SFXF6GE8192",
hidden: false,
name: "Veggie Flatizza",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "Q8JEB1N5WDM18",
hidden: false,
name: "Spicy Italian Flatizza",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "9J79Y5W4316QT",
hidden: false,
name: "Pepperoni Flatizza",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "S07H9PC3YK76P",
hidden: false,
name: "Cheese Flatizza",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "8QR3GSYNGD8MC",
hidden: false,
name: "Steak, Egg & Cheese",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "XV81FXMJNJ37P",
hidden: false,
name: "Egg & Cheese Omelet",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "0H08A5BH3YX9T",
hidden: false,
name: "Black Forest Ham, Egg & Chees",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "QZY1A2TSSKR20",
hidden: false,
name: "Bacon, Egg & Cheese....",
price: 350,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1462962283000
},
{
id: "DKP6EPGEH4VQ4",
hidden: false,
name: "Turkey Breast",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DCEZZ0TV2M2DR",
hidden: false,
name: "Tuna",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "7MAPSDQH1EW0T",
hidden: false,
name: "Sweet Onion Chicken Teriyaki",
price: 500,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "C6EBC2FCSGT5G",
hidden: false,
name: "Meatball Marinara",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "2RMTMDC383XVT",
hidden: false,
name: "Italian B.M.T",
price: 450,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
},
{
id: "DEJC2R40EF3GJ",
hidden: false,
name: "Black Forest Ham",
price: 400,
priceType: "FIXED",
defaultTaxRates: false,
isRevenue: true,
modifiedTime: 1460959539000
}
]
},
vzCustomData: [ ]
},
{
id: "F06A7HGVCE0EW",
name: "Dirnk Type",
showByDefault: true,
modifiers: {
elements: [
{
id: "EETAW4QET0PEC",
name: "Dasani Water",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "2J63Y97EV0GCM",
name: "Coca-Cola Classic",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "DC5F75VMHG7ST",
name: "Diet Coke",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "AEGN9B76ZZEG0",
name: "Powerade",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "4JY63SAPFAKW6",
name: "Sprit",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "A08RCY3J2ZX9G",
name: "Vitamin Water XXX",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "P2S3SQESMKVQ2",
name: "Minute Maid Juice",
price: 180,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
},
{
id: "CC4NX49A92P8Y",
name: "1% Low Fat Milk",
price: 160,
modifierGroup: {
id: "F06A7HGVCE0EW"
}
}
]
},
modifierIds: "EETAW4QET0PEC,2J63Y97EV0GCM,DC5F75VMHG7ST,AEGN9B76ZZEG0,4JY63SAPFAKW6,A08RCY3J2ZX9G,P2S3SQESMKVQ2,CC4NX49A92P8Y",
items: {
elements: [ ]
},
vzCustomData: [ ]
},
{
id: "85X6HRNK615PJ",
name: "more crickets a",
minRequired: 1,
maxAllowed: 1,
showByDefault: true,
modifiers: {
elements: [
{
id: "PQ4CQAEMPV144",
name: "crickets a",
price: 150,
modifierGroup: {
id: "85X6HRNK615PJ"
}
}
]
},
modifierIds: "PQ4CQAEMPV144",
items: {
elements: [
{
id: "J98RXG5AYZQSR",
hidden: false,
name: "cricket pies",
alternateName: "CPIES",
code: "",
sku: "cpies",
price: 1500,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
modifiedTime: 1460086117000
},
{
id: "XF1X2ZNMHDS6R",
hidden: false,
name: "fireflies",
alternateName: "",
code: "",
sku: "ffls",
price: 5000,
priceType: "FIXED",
defaultTaxRates: true,
unitName: "",
cost: 0,
isRevenue: true,
modifiedTime: 1452278880000
}
]
},
vzCustomData: [ ]
},
{
id: "Z79XVDAW5DFB8",
name: "Copy of Pizza Toppings",
showByDefault: true,
modifiers: {
elements: [
{
id: "A5ZTYWCJF1AQT",
name: "Tomato",
price: 0,
modifierGroup: {
id: "Z79XVDAW5DFB8"
}
}
]
},
modifierIds: "A5ZTYWCJF1AQT",
items: {
elements: [ ]
},
vzCustomData: [
{
_id: "5633500bd11fcb9c96f14e36",
merchantId: "13HRYK02HZM30",
modifierGroupId: "Z79XVDAW5DFB8",
hideInApp: false,
instructionText: "Custom pizza..",
__v: 0
}
]
},
{
id: "YNXNM8ZFVJRKG",
name: "Pizza Toppings",
showByDefault: true,
modifiers: {
elements: [
{
id: "9AVAQ1J8JE0ZE",
name: "Cheese",
alternateName: "",
price: 50,
modifierGroup: {
id: "YNXNM8ZFVJRKG"
}
},
{
id: "77XKW50E59WXM",
name: "Tomato",
price: 0,
modifierGroup: {
id: "YNXNM8ZFVJRKG"
}
}
]
},
modifierIds: "9AVAQ1J8JE0ZE,77XKW50E59WXM",
items: {
elements: [
{
id: "XF1X2ZNMHDS6R",
hidden: false,
name: "fireflies",
alternateName: "",
code: "",
sku: "ffls",
price: 5000,
priceType: "FIXED",
defaultTaxRates: true,
unitName: "",
cost: 0,
isRevenue: true,
modifiedTime: 1452278880000
},
{
id: "PZZ8NCZ018EGA",
hidden: false,
name: "Lime Juice",
alternateName: "",
code: "",
sku: "",
price: 150,
priceType: "FIXED",
defaultTaxRates: true,
unitName: "",
cost: 0,
isRevenue: true,
stockCount: 0,
modifiedTime: 1440185159000
}
]
},
vzCustomData: [ ]
},
{
id: "1N4YHSC1SNJRC",
name: "Drinks Modifier",
minRequired: 1,
maxAllowed: 2,
showByDefault: true,
modifiers: {
elements: [
{
id: "MJWJVNBWD2956",
name: "Extra Sugar",
price: 10,
modifierGroup: {
id: "1N4YHSC1SNJRC"
}
},
{
id: "1GM2KCJ0M4HVT",
name: "With Ice",
price: 10,
modifierGroup: {
id: "1N4YHSC1SNJRC"
}
},
{
id: "2CHV3R1N53TJG",
name: "Salt",
price: 0,
modifierGroup: {
id: "1N4YHSC1SNJRC"
}
}
]
},
modifierIds: "MJWJVNBWD2956,1GM2KCJ0M4HVT,2CHV3R1N53TJG",
items: {
elements: [
{
id: "ESHA66WZVVWG6",
hidden: false,
name: "Mango Lassi",
alternateName: "MLASI",
code: "DR_MLASI",
price: 239,
priceType: "FIXED",
defaultTaxRates: false,
cost: 0,
isRevenue: true,
stockCount: 0,
modifiedTime: 1445068820000
},
{
id: "PZZ8NCZ018EGA",
hidden: false,
name: "Lime Juice",
alternateName: "",
code: "",
sku: "",
price: 150,
priceType: "FIXED",
defaultTaxRates: true,
unitName: "",
cost: 0,
isRevenue: true,
stockCount: 0,
modifiedTime: 1440185159000
}
]
},
vzCustomData: [
{
_id: "565d80a3d11fcb9c96f14f1a",
merchantId: "13HRYK02HZM30",
modifierGroupId: "1N4YHSC1SNJRC",
hideInApp: false,
instructionText: "undefined",
__v: 0
}
]
}
]

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
    }
})();