let calc = function() {
    var cold_amount = parseInt($('#cold_amount_inp').val(), 10);
    var hot_amount = parseInt($('#hot_amount_inp').val(), 10);
    var mix_amount = parseInt($('#mix_amount_inp').val(), 10);
    let amount_variable = $('input[name="amount_variable"]:checked').val();
    switch (amount_variable) {
        case 'cold':
            cold_amount = mix_amount - hot_amount;
            $('#cold_amount_inp').val(cold_amount);
            $('#cold_amount_inp').prop('disabled', true);
            $('.cold button').prop('disabled', true);
            $('.cold button').removeClass("primary");
            $('#cold_amount_icon').removeClass("icon-edit");
            $('#cold_amount_icon').addClass("icon-settings");

            $('#hot_amount_inp').prop('disabled', false);
            $('.hot button').prop('disabled', false);
            $('.hot button').addClass("secondary");
            $('#hot_amount_icon').removeClass("icon-settings");
            $('#hot_amount_icon').addClass("icon-edit");

            $('#mix_amount_inp').prop('disabled', false);
            $('.mix button').prop('disabled', false);
            $('.mix button').addClass("inverse");
            $('#mix_amount_icon').removeClass("icon-settings");
            $('#mix_amount_icon').addClass("icon-edit");
        break;
        case 'hot':
            hot_amount = mix_amount - cold_amount;
            $('#hot_amount_inp').val(hot_amount);
            $('#hot_amount_inp').prop('disabled', true);
            $('.hot button').prop('disabled', true);
            $('.hot button').removeClass("secondary");
            $('#hot_amount_icon').removeClass("icon-edit");
            $('#hot_amount_icon').addClass("icon-settings");

            $('#cold_amount_inp').prop('disabled', false);
            $('.cold button').prop('disabled', false);
            $('.cold button').addClass("primary");
            $('#cold_amount_icon').removeClass("icon-settings");
            $('#cold_amount_icon').addClass("icon-edit");

            $('#mix_amount_inp').prop('disabled', false);
            $('.mix button').prop('disabled', false);
            $('.mix button').addClass("inverse");
            $('#mix_amount_icon').removeClass("icon-settings");
            $('#mix_amount_icon').addClass("icon-edit");
        break;
        case 'mix':
            mix_amount = hot_amount + cold_amount;
            $('#mix_amount_inp').val(mix_amount);
            $('#mix_amount_inp').prop('disabled', true);
            $('.mix button').prop('disabled', true);
            $('.mix button').removeClass("inverse");
            $('#mix_amount_icon').removeClass("icon-edit");
            $('#mix_amount_icon').addClass("icon-settings");

            $('#cold_amount_inp').prop('disabled', false);
            $('.cold button').prop('disabled', false);
            $('.cold button').addClass("primary");
            $('#cold_amount_icon').removeClass("icon-settings");
            $('#cold_amount_icon').addClass("icon-edit");

            $('#hot_amount_inp').prop('disabled', false);
            $('.hot button').prop('disabled', false);
            $('.hot button').addClass("secondary");
            $('#hot_amount_icon').removeClass("icon-settings");
            $('#hot_amount_icon').addClass("icon-edit");
        break;
        default:
        console.log(`Sorry, ${amount_variable} not expected.`);
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
