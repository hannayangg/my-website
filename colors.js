var Links = {
    setColor: function(color) {
        $('a').css('color', color);
    }
};

var Body = {
    setColor: function(color) {
        $('body').css('color', color);
    },
    setBackgoundColor: function(color) {
        $('body').css('backgroundColor', color);
    },
    setBlockColor: function(color) {
        $('.blocks').css('backgroundColor', color);
    }
};

function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setBackgoundColor('black');
        Body.setColor('white');
        Body.setBlockColor('SaddleBrown');
        Links.setColor('yellowgreen');
        self.value = 'day';
        localStorage.setItem('mode', 'night');  // 야간 모드 저장
    } else {
        Body.setBackgoundColor('white');
        Body.setColor('black');
        Body.setBlockColor('beige');
        Links.setColor('darkgreen');
        self.value = 'night';
        localStorage.setItem('mode', 'day');  // 주간 모드 저장
    }
}

// 페이지 로드 시 로컬 스토리지에서 모드 상태를 읽어와 적용
window.onload = function() {
    var mode = localStorage.getItem('mode');
    var button = document.querySelector('input[type="button"]');
    
    if (mode === 'night') {
        Body.setBackgoundColor('black');
        Body.setColor('white');
        Body.setBlockColor('SaddleBrown');
        Links.setColor('yellowgreen');
        if (button) {
            button.value = 'day';
        }
    } else {
        Body.setBackgoundColor('white');
        Body.setColor('black');
        Body.setBlockColor('beige');
        Links.setColor('darkgreen');
        if (button) {
            button.value = 'night';
        }
    }
};