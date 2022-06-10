//import {arrayOfWorks} from './listworks.js';
window.addEventListener('DOMContentLoaded',() => {
    const worksListul = document.querySelector('.person-works_container__list'),
            skillsList = document.querySelector('.skills_list');
    const httpsText = 'https://';
    const imgUrlText = 'img/';
    const arrayOfWorks = [
        {
            preloadText : 'REACT',
            name : 1,
            img: `${imgUrlText}tesla.png`,
            link: `${httpsText}jeidx.github.io/`,
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}zabota.png`,
            link: `${httpsText}chatsapp-pi.vercel.app/`
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}testlogo.png`,
            link: `${httpsText}jeidx.github.io/verstka-tz/`
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}табуретки_1.png`,
            link: `${httpsText}jeidx.github.io/taburetki/`
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}travel.png`,
            link: `${httpsText}jeidx.github.io/3projectzaliv/`
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}blog.png`,
            link: `${httpsText}jeidx.github.io/12222/`
        },
        {
            preloadText : 'REACT',
            name : 1,
            img: `${imgUrlText}chatjs.png`,
            link: `${httpsText}chatsapp-pi.vercel.app/`
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}marble.png`,
            link: `${httpsText}jeidx.github.io/2st-project-fixed/#`
        },
        {
            preloadText : 'HTML CSS',
            name : 1,
            img: `${imgUrlText}sushi.png`,
            link: `${httpsText}jeidx.github.io/sushi.test/`
        },
        {
            preloadText : 'REACT',
            name : 1,
            img: `${imgUrlText}poke.png`,
            link: `${httpsText}vigilant-edison-ccf897.netlify.app/`
        },
        {
            preloadText : 'JS CSS HTML',
            name : 1,
            img: `${imgUrlText}todo.png`,
            link: `${httpsText}jeidx.github.io/litetodolist/`
        },
        {
            preloadText : 'HTML CSS JS',
            name : 1,
            img: `${imgUrlText}pogoda.png`,
            link: `${httpsText}jeidx.github.io/weatherapi/`
        }
    ];
    

    const skillsListItems = [
        {
            about : 'язык для структурирования и представления содержимого всемирной паутины',
            name : 'HTML5',
        },
        {
            about : 'формальный язык описания внешнего вида документа, написанного с использованием языка разметки',
            name : 'CSS3',
        },
        {
            about : 'мультипарадигменный язык программирования',
            name : 'JavaScript',
        },
        {
            about : 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов',
            name : 'React',
        },
        {
            about : 'распределённая система управления версиями',
            name : 'Git',
        },
        {
            about : 'метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей',
            name : 'Scss',
        }
    ];

    function createElementsList(arr, arrTextSkills){
        arrTextSkills.forEach(elem => {
            skillsList.innerHTML += `
                <li class="skills_list-item">${elem.name}<span class="skills_list-item-info">${elem.name}: ${elem.about}</span>,&nbsp</li>
            `;
        });
        skillsList.addEventListener('mouseover',(e) => {
            e.preventDefault();
            if(e.target && e.target.classList.contains('skills_list-item')){
                document.querySelectorAll('.modal').forEach(items => {
                    console.log(items);
                    items.classList.remove('modal');
                });
                console.log(e.target.children);
                e.target.children[0].classList.add('modal');
            } 

        });
        document.body.addEventListener('click',(e) =>{
            if(!e.target.classList.contains('modal')){
                document.querySelectorAll('.modal').forEach(items => {
                    console.log(items);
                    items.classList.remove('modal');
                });
            }
        });
        
        let timeSwitcher = 6;
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
        }
        render();

        setTimeout(function(){
            let btnShow = worksListul.innerHTML += `<button class='person-works_container-btn'>open more</button>`;
        },1000);
        worksListul.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('person-works_container-btn')){
                const worksItems = document.querySelectorAll('.person-works_container__list-item');
                timeSwitcher = arr.length;
                e.target.style.cssText = 'display:none;';
                worksItems.forEach(item => {
                    item.remove();
                });
                render();
            }
        });
        
    }
    
    createElementsList(arrayOfWorks,skillsListItems);

});