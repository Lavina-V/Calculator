let TextArea = document.getElementsByTagName('textarea')

let calciBtn = document.querySelector('.calc')


calciBtn.addEventListener("click", function (e) {
    for (const iterator of TextArea) {
        if (iterator.value != 'NaN') {
            iterator.setAttribute('style', 'background-color: lightgreen')
        }
        else {
            
            iterator.setAttribute('style', 'background-color: indianred')
            iterator.value="Wrong Input Cick Refresh"
        }
    }
})

let refreshBtn = document.querySelector('.refresh')
refreshBtn.addEventListener("click",function(e){
    for (const iterator of TextArea) {
        iterator.setAttribute('style', 'background-color: ')
    }


});
