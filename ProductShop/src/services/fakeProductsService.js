var products = [
    {
      _id: "1",
      productName: "Back Scrather",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name:  'Cool Gagets'},
      numberInStock: 6,
      price:15,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41bQXhqLO5L._AC_SL1001_.jpg',
      liked: false,
      productDescription: "a device shaped like a hand, mounted at the end of a stick, and used to scratch one's own back"
    },
    {
        _id: "2",
        productName: "Rtx 3080",
        genre:{ _id: "5b21ca3eeb7f6fbccd471814", name:  'Computer hardware'},
        numberInStock: 8,
        price:10,
        imgUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/geforce-rtx-3080-shop-462-l@2x.png',
        liked: false,
        productDescription:"The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA's 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience"
      },
    {
        _id: "3",
        productName: "SSD-512GB",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name:  'Computer hardware'},
        numberInStock: 5,
        price:13,
        imgUrl: 'https://img.ksp.co.il/allimg/lrg50346.jpg',
        liked: false,
        productDescription:"All information provided is subject to change at any time, without notice. Intel may make changes to manufacturing life cycle, specifications"
      },
        {
        _id: "4",
        productName: "Digital Voltmeter",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name:  'Electirc'},
        numberInStock: 10,
        price:12,
        imgUrl: 'https://i.ebayimg.com/images/g/qgUAAOSwHnFVkYPk/s-l500.jpg',
        liked: false,
        productDescription:"Voltmeter is an electrical measuring instrument used to measure potential difference between two points. ... Digital voltmeters display the value of AC or DC voltage being measured directly as discrete numerical instead of a pointer deflection on a continuous scale as in analog instruments"
      },
      {
        _id: "5",
        productName: "School Bag",
        genre: { _id: "5b21ca3eeb7f6fbccd471821", name:  'ART'},
        numberInStock: 4,
        price:4,
        imgUrl: 'https://i.ebayimg.com/images/g/-SYAAOSw1I5fkRrK/s-l500.jpg',
        liked: false,
        productDescription:"Schoolbag definition is - a bag for carrying schoolbooks and school supplies"
      },
      {
        _id: "6",
        productName: "Helmet",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name:  'Motor Accessories'},
        numberInStock: 11,
        price:25,
        imgUrl: 'https://i.ebayimg.com/images/g/N9sAAOxyB-tST9Xv/s-l500.jpg',
        liked: false,
        productDescription:"1:a covering or enclosing headpiece of ancient or medieval armor — see armor illustration. 2:any of various protective head coverings usually made of a hard material to resist impact. 3:something resembling a helmet"
      },
      {
        _id: "7",
        productName: "Motorcycle Sets Mens",
        genre: { _id: "5b21ca3eeb7f6fbccd471822", name:  'Motor Accessories'},
        numberInStock: 3,
        price:60,
        imgUrl: 'https://i.ebayimg.com/images/g/V6YAAOSwdYpesR9n/s-l500.jpg',
        liked: false,
        productDescription:"Men's motorcycle gear from Harley Davidson is crafted for quality, protection, and comfort on the road or at home. From chaps to caps"
      },
      {
        _id: "8",
        productName: "Art Markers Set 40 Colors",
        genre: { _id: "5b21ca3eeb7f6fbccd471821", name:  'ART'},
        numberInStock: 14,
        price:23,
        imgUrl: 'https://i.ebayimg.com/images/g/NDkAAOSwiwZcLKTb/s-l640.jpg',
        liked: false,
        productDescription:"40 Colors Marker Pens Set Dual Tip Colored Artist Markers Professional for Art Sketch Coloring Books Painting Manga and Design"
      },
      {
        _id: "9",
        productName: "Galaxy S21",
        genre: { _id: "5b21ca3eeb7f6fbccd471826", name:  'Cell Phone'},
        numberInStock: 20,
        price:800,
        imgUrl: 'https://www.tgspot.co.il/wp-content/uploads/2020/10/samsung-galaxy-s21-plus-11.jpg',
        liked: false,
        productDescription:"The Samsung Galaxy S21 comes with a 6.2-inch display, and packs in the same triple-lens camera and 4,000 mAh as last year. It may have the shiny.."
      },
      {
        _id: "10",
        productName: "Iphone 12 pro Max",
        genre: { _id: "5b21ca3eeb7f6fbccd471826", name:  'Cell Phone'},
        numberInStock: 9,
        price:900,
        imgUrl: 'https://specials-images.forbesimg.com/imageserve/5f51764d1e91a64567505ad9/960x0.jpg?fit=scale',
        liked: false,
        productDescription:"Apple iPhone 12 Pro Max was officially released on October 13, 2020. The phone is powered by the new Apple A14 Bionic processor. The smartphone comes with a 6.7 inches Super Retina XDR OLED capacitive touchscreen, 2778 x 1284 pixels resolution and HDR display, True Tone and Wide color (P3) gamut"
      },
      {
        _id: "11",
        productName: "realme 6 pro",
        genre: { _id: "5b21ca3eeb7f6fbccd471826", name:  'Cell Phone'},
        numberInStock: 10,
        price:450,
        imgUrl: 'https://www.gadgety.co.il/wp-content/themes/main/thumbs/2020/06/realme-6-pro-box2.jpg',
        liked: false,
        productDescription:"The Realme 6 Pro is a mid-range flagship featuring the powerful Snapdragon 720G chipset and a quad rear camera setup. It features a 6.6-inch LCD display, which"
      },
      {
        _id: "12",
        productName: "Led 150W",
        genre:{ _id: "5b21ca3eeb7f6fbccd471820", name:  'Electric'} ,
        numberInStock: 17,
        price:68,
        imgUrl: 'https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/E8/0D/6d302642-bcb5-43fb-b2bc-c107d0c47c91.jpg.webp',
        liked: false,
        productDescription:"Product information. LED HID lamp offers safe, reliable and affordable energy saving alternative to HID lamps used in outdoor and industrial "
      },
      {
          _id: "13",
          productName: "Titanium The strongest one",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name:  'Cool Gagets'},
          numberInStock: 15,
          price:130,
          imgUrl: 'https://cdn.shopify.com/s/files/1/1020/2329/products/titanium_large.jpg?v=1450045797',
          liked: false,
          productDescription:"Titanium is one of the strongest metals out there, with an ultimate strength of more than 430 Megapascals. While titanium is built tough, it's one of the least dense metals, making it an ideal option for industrial uses that require a strong metal with a high melting point"
        },
        {
            _id: "14",
            productName: "Keyboard grenade concept on the white background",
            genre: {_id: "5b21ca3eeb7f6fbccd471818", name:  'Cool Gagets'},
            numberInStock: 17,
            price:115,
            imgUrl: 'https://thumbs.dreamstime.com/z/keyboard-grenade-concept-white-background-52125538.jpg',
            liked: false,
            productDescription:"Keyboard grenade concept. isolated on white background. - download this royalty free Stock Illustration in seconds. No membership needed"
          },
          {
              _id: "15",
              productName: "L.Y.N.X Mobile Hybrid Controller",
              genre: { _id: "5b21ca3eeb7f6fbccd471818", name:  'Cool Gagets'},
              numberInStock: 25,
              price:190,
              imgUrl: 'https://i2.wp.com/cdn4.dogomedia.com/images/991f0b65-bb0a-42f1-ba09-8381f3c89e13/abliltwwidhizqk0j4s1.jpg?resize=816%2C9999',
              liked: false,
              productDescription:"The white Mad Catz L.Y.N.X. 9 Mobile Hybrid Controller is a portable gamepad that provides accurate controls when playing games on your PC or Android device. The L.Y.N.X. 9 connects wirelessly to your computer, tablet, or smartphone via Bluetooth and has a built-in rechargeable battery, which lasts up to 30 hours"
            },
            {
                _id: "17",
                productName: "LG UN71 75 inch 4K Smart UHD TV",
                genre: { _id: "5b21ca3eeb7f6fbccd471820", name:  'Electric'},
                numberInStock: 32,
                price:999,
                imgUrl: 'https://www.lg.com/il/images/tv/md07516269/gallery/D-01-1.jpg',
                liked: false,
                productDescription:"LG UHD 4K TV 75 Inch UN71 Series, 4K Active HDR WebOS Smart ThinQ AI. ... Enjoy content in lifelike high definition. LG UHD TVs provide optimal HDR picture "
              },
            {
                _id: "18",
                productName: "PU-10 PLATINUM ELECTRIC",
                genre: { _id: "5b21ca3eeb7f6fbccd471820", name:  'Electric'},
                numberInStock: 32,
                price:99,
                imgUrl: 'https://www.cwc.co.il/images/itempics/5092_090720201148061_large.jpg',
                liked: false,
                productDescription:"Platinum is a chemical element with the symbol Pt and atomic number 78. It is a dense, ... electrical contacts and electrodes, platinum resistance thermometers"
              },
            {
                _id: "19",
                productName: "Acer VG220Q bmiix 21.5",
                genre: { _id: "5b21ca3eeb7f6fbccd471814", name:  'Computer hardware'},
                numberInStock: 32,
                price:99,
                imgUrl: 'https://static.bhphoto.com/images/images500x500/1528798839_1415650.jpg',
                liked: false,
                productDescription:"Place this VG220Q bmiix 21.5 16:9 IPS Monitor from Acer on your desk and take up less space thanks to the three-pronged stand"
              }
              ,
            {
                _id: "20",
                productName: "Motor Bike Gloves",
                genre: { _id: "5b21ca3eeb7f6fbccd471822", name:  'Motor Accessories'},
                numberInStock: 22,
                price:59,
                imgUrl: 'https://sc04.alicdn.com/kf/U47256b0c68e24163b40e5c7fbceb195cd.jpg',
                liked: false,
                productDescription:"Motorcycle Gloves, riding gloves are available to Order at GetGeared"
              }
    
   
  ];
  
  export function getProducts() {
    return products;
  }
  
  export function getProduct(id) {
    return products.find(m => m._id === id);
  }
  
 
  
  