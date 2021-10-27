


$('#frmSend').on('submit',function (e) {
    e.preventDefault();
    alert('successfull');
    $.ajax({
        url : 'https://script.google.com/macros/s/AKfycbziGvwFfpMbpTbMrdtF0gIbtdgQKx_Rjit5f6XwkPriy0WR9vZdYfy8p5ABjtRCf5Ly/exec',
        type : 'post',
        data : $('#frmSend').serialize(),
        success : function(result){
            console.log(result);
        }
    });  
});


const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target  = +counter.getAttribute('data-target');

        const count = +counter.innerText

        const inc = target/speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }else{
            count.innerText =target;
        }
    }

    updateCount();
});