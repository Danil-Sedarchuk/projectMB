'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Скотт Пилигрим против...",
            "Одержимость",
            "Афоня",
            "Лига справедливости",
            "Ла-ла лэнд"
        ]
    };
    
     const adv = document.querySelectorAll('.promo__adv img'),//   можно выбрать по классу + ТЭГ
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          ulList =  document.querySelector('.promo__interactive-list'),         
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'); // так же можно выбрать по типу  

                            //отправитель формы SUBMIT событие 
    addForm.addEventListener('submit', (event) => {
        // отменяем стандартное поведение браузера, по нажатию кнопки перестает перезагружать страницу
        event.preventDefault(); 

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
        
        if (favorite) {
            console.log("Добавляем новый фильм");
        }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList (movieDB.movies, ulList);
        }

       
        event.target.reset();

    });
    

// удаляет элементы из массива (рекламу с правой стороны сайта)
const deleteAdv = (arr) => {
    arr.forEach( item => {
        item.remove();
    }); 
};



    // меняет текст и картинку 
    const makeChanges = () => {
        genre.textContent = "Драма";   
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };


// сортирует массив
const sortArr = (arr) => {
    arr.sort();
};

 
        //Добавляет элементы в список
    function createMovieList (films, parent) {
       
            parent.innerHTML="";
            sortArr(films);
            films.forEach(function (item ,i) {
        
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
            </li>
            `;

        });
       
        document.querySelectorAll('.delete').forEach((btn,i) => {
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList (films, parent);
        });
        });

    }

    deleteAdv(adv);
    makeChanges();
    createMovieList (movieDB.movies, ulList);

});





  

