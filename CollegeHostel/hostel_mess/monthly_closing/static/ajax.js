// ajax.js
function fetchProductDetails(productId) {
    console.log("fetch working!")
    $.ajax({
        url: '/get_product_details/' + productId + '/',
        type: 'GET',
        success: function(data) {
            if (data && 'unit' in data && 'unit_price' in data) {
                $('[id^=id_unit]').val(data.unit);
                $('[id^=id_unit_price]').val(data.unit_price);
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
