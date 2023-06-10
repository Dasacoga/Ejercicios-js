let pages = {
    'knowledge' : `Student of Biology in double titulation with Computer Science, knowlege in animal managment in laboratory, in vitro plant tissue culture, object-oriented programing , java programing, javascript, Git y github, arduino, basic electronic, data management and office tools<br/><br/>`,
    'home' : `<H3>¡This is my home page!</H3><H5>I am Santiago Colorado</H5>`,
    'experience' : `Non-disponible<br/><br/>`,
    'contact' : `<H3>Contact info:</H3><br/><br/>Telephone: 36736787865 <br/><br/> e-mail: Dacolorado@unal.edu.co`
};

function getPageContent(page){
    let contentToReturn;
    switch(page){
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'contact':
            contentToReturn = pages.contact;
            break;
        case 'experience':
            contentToReturn = pages.experience;
            break;
        case 'knowledge':
            contentToReturn = pages.knowledge;
            break;
        default:
            contentToReturn = pages.home;
            break;				
    }
    document.getElementById('content').innerHTML = contentToReturn; 
}