var categories = [
    {

        sub_cetegories: [
            {

                products: [
                    {


                        "esp_Discount": ["15%"],
                        "common_Discount": ["10%"],
                        "Cashback": ["100"],
                        "Shop_Name": "Local Kirana",
                        "Merchant_Mob": ["99891238747"],
                        "Shop_Img_Url": "https://i.pinimg.com/originals/49/90/16/4990165d8f74b1ecffefd72c8fa6704f.jpg",
                        "Min_Purchase": ["100"],
                        "Start_date": ["10-02-2020"],
                        "End_date": ["10-02-2020"],
                        "Area": "Gachibowli",
                        "distance": ["13"],
                        "Category": "Grocery"
                    },
                    {
                        "esp_Discount": ["15%"],
                        "common_Discount": ["6%"],
                        "Cashback": ["300"],
                        "Shop_Name": "Local Saloon",
                        "Merchant_Mob": ["9977712455"],
                        "Shop_Img_Url": "https://media.architecturaldigest.com/photos/5c019bf41b58382d031ba1dd/master/w_1620,h_1080,c_limit/Random_Tea_Room_&_Curiosity_Shop_SPHym556e2eatMcq8FlNN6u18q0ABlZBh_rgb_hd.jpg",
                        "Min_Purchase": ["120"],
                        "Start_date": ["8-02-2020"],
                        "End_date": ["18-02-2020"],
                        "Area": "Hi-tech City",
                        "distance": ["12"],
                        "Category": "Saloon"
                    },
                    {
                        "esp_Discount": ["15%"],
                        "common_Discount": ["8%"],
                        "Cashback": ["60"],
                        "Shop_Name": "Laxmi Tiffins",
                        "Merchant_Mob": ["887892342"],
                        "Shop_Img_Url": "https://onlineprovisionandrecipestore.files.wordpress.com/2014/02/qusec-online-grocery-store.jpg",
                        "Min_Purchase": ["50"],
                        "Start_date": ["06-02-2020"],
                        "End_date": ["10-02-2020"],
                        "Area": "Gachibowli",
                        "distance": ["13"],
                        "Category": "Tiffin Center"
                    },
                    {
                        "esp_Discount": ["30%"],
                        "common_Discount": ["30%"],
                        "Cashback": ["50"],
                        "Shop_Name": "Tennis coaching Center",
                        "Merchant_Mob": ["993243232"],
                        "Shop_Img_Url": "https://i.pinimg.com/originals/7f/3d/36/7f3d364b545715068500bcfbb06f8e68.jpg",
                        "Min_Purchase": ["1000"],
                        "Start_date": ["18-02-2020"],
                        "End_date": ["26-02-2020"],
                        "Area": "Secunderabad",
                        "distance": ["10"],
                        "Category": "Coaching Classes"
                    },
                    {
                        "esp_Discount": ["15%"],
                        "common_Discount": ["20%"],
                        "Cashback": ["70"],
                        "Shop_Name": "Raj Medical",
                        "Merchant_Mob": ["998324233"],
                        "Shop_Img_Url": "https://i.ytimg.com/vi/w-OM667PEM8/maxresdefault.jpg",
                        "Min_Purchase": ["220"],
                        "Start_date": ["11-02-2020"],
                        "End_date": ["16-02-2020"],
                        "Area": "Hi-tech city",
                        "distance": ["12"],
                        "Category": "Medical"
                    },
                    {
                        "esp_Discount": ["5%"],
                        "common_Discount": ["60%"],
                        "Cashback": ["200"],
                        "Shop_Name": "Demart",
                        "Merchant_Mob": ["9505030215"],
                        "Shop_Img_Url": "https://lh3.googleusercontent.com/proxy/gt_2YdY44UQMatoNyj8NBwj0DA_HVOuO5_kH_72MFCZ-9vQ2lr7UXODrb5B4ZycUmn6eeNEtasHGB-eETB9cJf1RQ-Lb1EfpuKSoehZ-dRNLg8KkSXYfzmeWRJG4Yg",
                        "Min_Purchase": ["100"],
                        "Start_date": ["10-02-2020"],
                        "End_date": ["10-02-2020"],
                        "Area": "Dilsukhnagar",
                        "distance": ["4"],
                        "Category": "Grocery"

                    },
                ]
            },

        ]
    },

];

categories.map((item, index) => createCategory(item))

function caterogyTitle(name, isSubCategory = false) {
    return jQuery("<h2></h2>")
        .addClass(isSubCategory ? "sub_title" : "title") // true ? TRUE_VALUE : FALSE_VALUE
        .text(name);
}

function createCategory(item) {
    const $view = $(`<section class="section">
    </section>`).appendTo('#app');

    caterogyTitle(item.name).appendTo($view);

    if (!!item.sub_cetegories) {
        (item.sub_cetegories || []).forEach(subCategory => {
            caterogyTitle(subCategory.name, true).appendTo($view);
            getProductView(subCategory.products).appendTo($view)
            
        });
    } else {
        getProductView(item.products).appendTo($view)
    }

}

function getProductView(productsArray) {
    const products = productsArray.map(item => `<div class="card">
    <h2 class="shop_name">${item.Shop_Name}</h2>
                   <div class="card_image">
                        <img src="${item.Shop_Img_Url}" alt="shop image" class="shop_image">
                   </div>
                   <p class="distance"><span>${item.distance}</span> kms</p>
                   <div class="card_discount">
                        <p class="esp"><svg class="tags"><use xlink:href="assets/sprite.svg#icon-tags"></use></svg><span>${item.esp_Discount}</span></p>
                        <p class="esp_text">Discount</p>
                   </div>
                   <div class="card_details">
                        <p class="common_esp"><svg class="tag"><use xlink:href="assets/sprite.svg#icon-tag"></use></svg><label>Common Member:</label><span class="non">${item.common_Discount}</span></p>
                        <p class="sub"><svg class="category"><use xlink:href="assets/sprite.svg#icon-th-list"></use></svg><label>Sub-cat:</label><span class="sub_span">${item.Category}</span></p>
                        <p class="min_pur"><svg class="min"><use xlink:href="assets/sprite.svg#icon-line-chart"></use></svg><label>Minimum Purchase:</label><span class="minimum">₹ ${item.Min_Purchase}</span></p>
                        <p class="start"><svg class="calendar"><use xlink:href="assets/sprite.svg#icon-calendar"></use></svg><label>Start:</label><span class="date">${item.Start_date}</span></p>
                        <p class="contact"><svg class="mobile"><use xlink:href="assets/sprite.svg#icon-mobile"></use></svg><span class="number">${item.Merchant_Mob}</span></p>
                </div>
                <a class="link" href="https://www.google.co.in"></a>
</div>`);
    return $(`<div class="container clearfix">${products.join("")}</div>`);
};


$(document).ready(function () {
    $("#input__search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".item__product").filter(function () {
            var shopName = $(this).find(".area_name").text().trim().toLowerCase()
            $(this).toggle(shopName.indexOf(value) > -1)
        });
    });
});

/*$(document).ready(function(){
    $('#button').on('click', function(event) {
        event.preventDefault();
        var area = $('#input__search').val().toLowerCase();

        fetch("http://localhost:3002/api/save_location_html_file",
        {
        method:"POST",
        headers:{
            "content-type":"application/json"},
        body:JSON.stringify({location:area})
        }).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(Error));

        var location = window.location.href;
        var locationArr = location.split('/');
        var newLocation = locationArr[locationArr.length-1];
        window.location.href = location.replace(newLocation, `${area}.html`);
    });
});
*/