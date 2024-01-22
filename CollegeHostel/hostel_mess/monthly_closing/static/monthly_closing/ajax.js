// ajax.js
function fetchProductDetails(productId) {
    console.log("fetch working!");
    $.ajax({
        url: '/get_product_details/' + productId + '/',
        type: 'GET',
        success: function(data) {
            if (data && 'unit' in data && 'price' in data) {
                console.log(data);
                $('[id^=id_unit]').val(data['unit']);
                $('[id^=id_unit_price]').val(parseInt(data['price'], 10));
                updateTotalPrice();
            } else {
                console.error('Invalid data format received from server.');
            }
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Error fetching product details:', textStatus, errorThrown);
        }
    });
}
