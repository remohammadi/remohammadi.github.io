let calc = function() {
    var cold_amount = parseInt($('#cold_amount_inp').val(), 10);
    var hot_amount = parseInt($('#hot_amount_inp').val(), 10);
    var mix_amount = parseInt($('#mix_amount_inp').val(), 10);
    let amount_lock = $('input[name="amount_lock"]:checked').val();
    switch (amount_lock) {
        case 'cold':
            cold_amount = mix_amount - hot_amount;
            $('#cold_amount_inp').val(cold_amount);
        break;
        case 'hot':
            hot_amount = mix_amount - cold_amount;
            $('#hot_amount_inp').val(hot_amount);
        break;
        case 'mix':
            mix_amount = hot_amount + cold_amount;
            $('#mix_amount_inp').val(mix_amount);
        break;
        default:
        console.log(`Sorry, ${amount_lock} not expected.`);
    }

    let cold_tmp = parseFloat($('input[name="cold_tmp"]:checked').val(), 10);
    let hot_tmp = parseFloat($('input[name="hot_tmp"]:checked').val(), 10);
    $('.cold_tmp').html(cold_tmp);
    $('.hot_tmp').html(hot_tmp);

    let mix_temp = (cold_amount * cold_tmp + hot_amount * hot_tmp) / (cold_amount + hot_amount);
    $('.mix_tmp').html(mix_temp.toFixed(2));
    var mix_tmp_color = "#cc0000";
    if (mix_temp < 25) {
        mix_tmp_color = "#729fcf";
    } else if (mix_temp < 32) {
        mix_tmp_color = "#97c4f0";
    } else if (mix_temp < 38) {
        mix_tmp_color = "#daeeff";
    } else if (mix_temp < 43) {
        mix_tmp_color = "#8ae234";
    } else if (mix_temp < 46) {
        mix_tmp_color = "#ffcccc";
    } else if (mix_temp < 50) {
        mix_tmp_color = "#f78787";
    } else if (mix_temp < 55) {
        mix_tmp_color = "#ef2929";
    }
    $('.mix_tmp').css('background-color', mix_tmp_color);
};

let setColdAmount = function(amount) {
    $('#cold_amount_inp').val(amount);
    calc();
    return true;
};

let setHotAmount = function(amount) {
    $('#hot_amount_inp').val(amount);
    calc();
    return true;
};

let setMixAmount = function(amount) {
    $('#mix_amount_inp').val(amount);
    calc();
    return true;
};

let onAmountLockChanged = function() {
    $('#hot_amount_inp').val(amount);
};

$( document ).ready(function() {
    $( "input" ).on("change", {}, calc);
    calc();
});
