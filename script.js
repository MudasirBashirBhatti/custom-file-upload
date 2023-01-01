

const myFunc = () =>{
    var myFile = document.getElementById('myFile')
    var parent = document.querySelector('.parent');
    var fileName = document.querySelector('.myText');
    
    parent.addEventListener('click',function(){
        myFile.click()
    })

    myFile.addEventListener('change',function(){
        if(myFile.value){
            fileName.innerHTML=myFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/);

        }else{
            fileName.innerHTML='No file chosen, yet....'
        }
    })
}