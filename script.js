function active(opcao){
    let option1 = document.getElementById('opcao1');
    let option2 = document.getElementById('opcao2');
    let option3 = document.getElementById('opcao3');

    let banner = document.getElementById('banner')
    
    if(opcao== 1){
        option1.style.backgroundColor = '#f13239';
        option2.style.backgroundColor = 'white';
        option3.style.backgroundColor = 'white';

        banner.style.backgroundImage =  'url(images/banner.jpg)'

    } else if (opcao == 2){
        option2.style.backgroundColor = '#f13239';
        option1.style.backgroundColor = 'white';
        option3.style.backgroundColor = 'white';

        banner.style.backgroundImage =  'url(images/banner2.jpg)'
        
    } else if (opcao ==3){
        option1.style.backgroundColor = 'white';
        option2.style.backgroundColor = 'white';
        option3.style.backgroundColor = '#f13239';
        
        banner.style.backgroundImage =  'url(images/banner3.png)'
        banner.style.backgroundPosition = 'center center'
       
    }
}
