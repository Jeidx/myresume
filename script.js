window.addEventListener('DOMContentLoaded',() => {
    const bodyOfhtml = document.querySelector('body');
    const worksListul = document.querySelector('.person-works_container__list');
    let skillsList = document.querySelector('.skills_list');

//ВЫЗОВ ФУНКЦИИ по отключении МИШКИ ЗАГРУЗКИ  
    preload();
//ВЫЗОВ ФУНКЦИИ МИШКИ ЗАГРУЗКИ

    function fetchDataCards(){
        fetch('db.json')
            .then(res => res.json())
            .then(res => {
                return(
                    fullDataForLang.push(...res[1]) , res
                )
            })
            .then(res => createElementsList(res[0],res[1]))
            .then(() =>  renderWrapPage(fullDataForLang));
    }
    fetchDataCards();
    //переменная для смены текста
    let chengeLand = 0;
    //переменная для смены текста
    if(!localStorage.getItem('lang')){
        localStorage.setItem('lang', "EN");
    }
    
    //массив с бэка со всеми  елементами [1]
    let fullDataForLang = [];
    //массив с бэка со всеми  елементами [1]
    //btn for more wiev works
    function createdBtn(){
        let newBtn = document.createElement('button');
        newBtn.classList.add('person-works_container-btn');
        if(chengeLand == 0){
            newBtn.textContent = `${arrOfWords[0][11]}`;
        }else{
            newBtn.textContent =  `${arrOfWords[1][11]}`;
        }
        worksListul.append(newBtn);

        return newBtn;
    }

    function createElementsList(arr){
        let timeSwitcher = 6;
        function createBtnForMoreWiev(item){
            const worksItems = document.querySelectorAll('.person-works_container__list-item');
            let count = 6;
            item.addEventListener('click', (e) => {
                
                if(timeSwitcher >= arr.length){
                    timeSwitcher = timeSwitcher - count;
                }else{
                    timeSwitcher += count;
                }
                worksItems.forEach(item => {
                    item.remove();
                });
                e.target.remove();
                render();
            });
        }
//btn for more wiev works
        function render(){
            arr.forEach((elem,id) => {
                if(id < timeSwitcher){
                    worksListul.innerHTML += `
                    <li class="person-works_container__list-item showed">
                        <a target="blank" href=${elem.link} class="shadow">
                            <div class="person-works__btn-named">${elem.preloadText}</div>
                        </a>
                        <img src=${elem.img} alt="image">
                    </li>`;
                }
            });
            createBtnForMoreWiev(createdBtn());
        }
        render();
    }

    const checkbox = document.querySelector('#toggle_checkbox[type=checkbox]'),
            rightSide = document.querySelector('.right-side'),
            leftSide = document.querySelector('.left-side');

    function colorized(){
        localStorage.setItem('night', true);
        let btnForMoreWorks = document.querySelector('.person-works_container-btn');
        let listBtns = document.querySelectorAll('.black-text-color');
        let listBtnsWhite = document.querySelectorAll('.white-text-color');
        bodyOfhtml.classList.remove('newbg');
        rightSide.classList.remove('black');
        leftSide.classList.remove('black');


            if (checkbox.checked && localStorage.getItem('night')) {
                bodyOfhtml.classList.add('newbg');
                rightSide.classList.add('black');
                leftSide.classList.add('black');
                //btnForMoreWorks.classList.add('yellow' , 'black-text-color');
                
                listBtns.forEach(item =>{
                    item.classList.remove('black-text-color');
                    item.classList.add('white-text-color');
                });
            }else if(!checkbox.checked){
                localStorage.removeItem('night');
                //btnForMoreWorks.classList.remove('yellow' , 'black-text-color');
                listBtnsWhite.forEach( item => {
                    item.classList.add('black-text-color');
                });
            }
    }
    let klicked = checkbox.addEventListener('click', colorized);

    setTimeout(function(){
        if(localStorage.getItem('night')){
            checkbox.checked = true;
            colorized();
        }else{
            checkbox.checked = false;
        }
        //сменя языка через локал сторейдж в разработке
        let lcNamed = localStorage.getItem('lang');
        if(lcNamed === "RU"){
            chehangerLanguage();
            localStorage.setItem('lang', "RU");
        }else{

        }
    },300);

    //ЗАГРУЗКА МИШКА
    function preload(){
        let item = document.querySelector('.preload');
        let bodyOfhtml = document.querySelector('body');
        bodyOfhtml.classList.add('locked');
        setTimeout(() => {
            item.classList.add('disable');
            bodyOfhtml.classList.remove('locked');
        }, 2000)
    }
    //МУЛЬТИЯЗЫЧНОСТЬ
    let arrOfWords = [
        eng = {
            0: 'EN',
            1: 'Ohiienko Evgenie',
            2: 'Front-end developer',
            3: 'Skills: ',
            4: 'Contact',
            5: 'Phone',
            6: 'Mail',
            7: 'Education',
            8: '2009-2013 Zaporizhzhia Electro-Technical College',
            9: '2013-2017 Zaporizhzhya National Technical University',
            10: '2019-2020 Brain academy',
            11: '+ / -',
            12: 'My works :',
            13: '2022-2022 Udemy full course JS + REACT',
            14: '2021-2022 freeCodeCamp soloLearn codeWars'
        },
        rus = {
            0: 'UA',
            1: 'Евгенiй Огiенко',
            2: 'Фронт-енд Інженер',
            3: 'Навички: ',
            4: 'Контакт',
            5: 'Телефон',
            6: 'Пошта',
            7: 'Освіта',
            8: '2009-2013 Запорізький електротехнічний коледж',
            9: '2013-2017 Запорізький національний технічний університет',
            10: '2019-2020 Brain academy',
            11: '+ / -',
            12: 'Мої праці :',
            13: '2022-2022 Udemy повний курс JS + REACT',
            14: '2021-2022 freeCodeCamp soloLearn codeWars'
        }
    ];

    let langBtnSwitch = document.querySelector('.lang-switch-wrp_btn');
        personName = document.querySelector('.person-information_container__first-title'),
        personProffession = document.querySelector('.person-information_container__second-title'),
        personSkills = document.querySelector('.skills_title');
        worksTitle = document.querySelector('.person-works_container-title');
        contactTitle = document.querySelector('.contact-title');
        contactPhone = document.querySelector('.contact-phone span');
        contactMail = document.querySelector('.contact-mail span');
        educationTitle = document.querySelector('.education-title');
        personWorksContainerBtn = document.querySelector('.person-works_container-btn');
    let educationList = document.querySelector('.education-list');


    function renderWrapPage(arrTextSkills){
        //баг рендериться много кнопок
        //createdBtn();
      //баг рендериться много кнопок
        arrTextSkills.map((elem , id) => {
            if(chengeLand == 0){
                if(localStorage.getItem('night')){
                    return(
                        skillsList.innerHTML += `<li class="skills_list-item white-text-color">${elem.name}<span class="skills_list-item-info">${elem.name}: ${elem.aboutEng}</span>,&nbsp</li>`
                    )
                }else{
                    return(
                        skillsList.innerHTML += `<li class="skills_list-item black-text-color">${elem.name}<span class="skills_list-item-info">${elem.name}: ${elem.aboutEng}</span>,&nbsp</li>`
                    )
                } 
                
            }else{
                if(localStorage.getItem('night')){
                    return(
                        skillsList.innerHTML += `<li class="skills_list-item white-text-color">${elem.name}<span class="skills_list-item-info">${elem.name}: ${elem.aboutRU}</span>,&nbsp</li>`
                    )
                }else{
                    return(
                        skillsList.innerHTML += `<li class="skills_list-item black-text-color">${elem.name}<span class="skills_list-item-info">${elem.name}: ${elem.aboutRU}</span>,&nbsp</li>`
                    )
                } 
            }
        })


        skillsList.addEventListener('mouseover',(e) => {
            e.preventDefault();
            if(e.target && e.target.classList.contains('skills_list-item')){
                document.querySelectorAll('.modal').forEach(items => {
                    items.classList.remove('modal');
                });
                e.target.children[0].classList.add('modal');
            } 
        });
        document.body.addEventListener('click',(e) =>{
            if(!e.target.classList.contains('modal')){
                document.querySelectorAll('.modal').forEach(items => {
                    items.classList.remove('modal');
                });
            }
        });
        let ckeckLengthArrSkills = document.querySelectorAll('.skills_list-item');
        if(ckeckLengthArrSkills.length > 6){
            ckeckLengthArrSkills.forEach((el , id) => {
                if(id < 6){
                    return el.remove()
                }
            })
        }
        langBtnSwitch.innerHTML = `${arrOfWords[chengeLand][0]}`;
        personName.innerHTML = `${arrOfWords[chengeLand][1]}`;
        personProffession.innerHTML = `${arrOfWords[chengeLand][2]}`;
        personSkills.innerHTML = `${arrOfWords[chengeLand][3]}`;
        worksTitle.innerHTML = `${arrOfWords[chengeLand][12]}`;
        contactTitle.innerHTML = `${arrOfWords[chengeLand][4]}`;
        contactPhone.innerHTML = `${arrOfWords[chengeLand][5]}`;
        contactMail.innerHTML = `${arrOfWords[chengeLand][6]}`;
        educationTitle.innerHTML = `${arrOfWords[chengeLand][7]}`;


        educationList.innerHTML += `<li class="education-list_item">${arrOfWords[chengeLand][8]}</li>`;
        educationList.innerHTML += `<li class="education-list_item">${arrOfWords[chengeLand][9]}</li>`;
        educationList.innerHTML += `<li class="education-list_item">${arrOfWords[chengeLand][10]}</li>`;
        educationList.innerHTML += `<li class="education-list_item">${arrOfWords[chengeLand][13]}</li>`;
        educationList.innerHTML += `<li class="education-list_item">${arrOfWords[chengeLand][14]}</li>`;
        let educationListItem = document.querySelectorAll('.education-list_item');
        if(educationListItem.length > 5){
            educationListItem.forEach((el , id) => {
                if(id < 5){
                    return el.remove()
                }
            })
        }
    }

    function chehangerLanguage(e){
        //e.preventDefault();
        if(localStorage.getItem('lang' ) === "EN"){
            localStorage.setItem('lang', "RU");
        }else{
            localStorage.setItem('lang', "EN");
        }
        if(skillsList.length > 0){
            skillsList.remove()
        }
        if(chengeLand == 0){
            chengeLand = 1;
        }else{
            chengeLand = 0;
        }
        renderWrapPage(fullDataForLang);

    }
        langBtnSwitch.addEventListener('click' , chehangerLanguage);

    //МУЛЬТИЯЗЫЧНОСТЬ
    
    //createElementsList(arrayOfWorks,skillsListItems);
});