$(document).ready(function (){
    
    var offset = 0;
    createGameTemplate(data, offset);

    $(".fa-chevron-circle-right").click( function(){
        $("#name").removeClass("correct")
        $("#name").removeClass("incorrect")
        if(++offset < data.length)
            createGameTemplate(data, offset);
    }) 

    $("#btn").click(function() {
        if(offset >= 0 && offset < data.length)
            checkAnswer(data, offset);
    }) 

    $(".fa-chevron-circle-left").click( function(){
        $("#name").removeClass("correct")
        $("#name").removeClass("incorrect")
        if(--offset >= 0)
            createGameTemplate(data, offset);
    })
})

const createGameTemplate = (data, dem) => {
    var cauHoi = '', hinh ='', dapAn = '', input ='';
    cauHoi += `<p>${data[dem].question}</p>`
    hinh += `<img src=${data[dem].img} alt="HoiAn">`
    dapAn += `<p>Đáp án: ${data[dem].answer}</p>`
    input += `<input type="text" placeholder="Nhập đáp án..." id="name">`
    
    
    $(".question p").html(cauHoi);
    $(".img").html(hinh);
    $(".answer").html(dapAn);
    $(".input").html(input);
}

const checkAnswer = (data, dem) => {
    var value = $("#name").val();
    value = value.toLowerCase();

    var ketQua = data[dem].answer;
    ketQua = ketQua.toLowerCase();
    
    if (value){
        $(".answer p").css("display", "block")
        if(value.includes(ketQua)) {
            $("#name").addClass("correct")
        }
        else {
            $("#name").addClass("incorrect")
    }}
    else
        alert("Vui long nhap dap an.")
}