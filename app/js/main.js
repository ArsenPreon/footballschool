const swup = new Swup();

let slider = '';

function main () {
    let stocks__swiper = new Swiper('.stocks__swiper', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        loop: true,
        watchSlidesProgress: true,
        allowTouchMove:false,
        breakpoints: {
        },
    })
    slider = stocks__swiper;
    if(document.querySelector('.header')){
        let headerElement = document.querySelector('.header');
    let callback = (entries) => {
        if(entries[0].isIntersecting){
            headerElement.classList.remove('_scroll');
        }else{
            headerElement.classList.add('_scroll');
        }
    }
    let headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement)
    }
    if(document.querySelector('.start')){
        if(document.querySelector('.start__swiper')){
            let start__swiper = new Swiper('.start__swiper', {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.controls__dotts',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.controls__arrow-next ',
                    prevEl: '.controls__arrow-prev'
                },
                breakpoints: {
                },
            })
        }
    }
    if(document.querySelector('.games')){
        if(document.querySelector('.games__swiper')){
            let games__swiper = new Swiper('.games__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                watchSlidesProgress: true,
                loop: true,
                pagination: {
                    el:'.games__slider-progressbar',
                    type: 'progressbar'
                },
                // navigation: {
                //     nextEl: '.elem',
                //     prevEl: '.elem'
                // },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    614: {
                        slidesPerView: 2,
                    },
                    998: {
                        slidesPerView: 3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.opportunities')){
        if(document.querySelector('.opportunities__swiper')){
            let opportunities__swiper = new Swiper('.opportunities__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                watchSlidesProgress: true,
                breakpoints: {
                    781: {
                        slidesPerView: 3,
                    },
                    542: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    }
                },
            })
        }
    }
    if(document.querySelector('.application')){
        const selects = document.querySelectorAll('.content__item-1-select');
        selects.forEach(select => {
            const choices = new Choices(select, {
                searchEnabled: false,
                itemSelectText: ''
            })
        })
        // `function resultPrice(e) {
        //     let price = document.querySelector('.result__application-price')
        //     let priceId = price.dataset.price;
        //     price.innerHTML = priceId + '₽';
        // }
        // resultPrice();`
    }
    if(document.querySelector('.entertainments')){
        if(document.querySelector('.entertainments__swiper')){
            let entertainments__swiper = new Swiper('.entertainments__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                watchSlidesProgress: true,
                breakpoints: {
                    891:{
                        slidesPerView: 3
                    }, 
                    569: {
                        slidesPerView: 2
                    },
                    320: {
                        slidesPerView: 1
                    }
                },
            })
        }
    }
    if(document.querySelector('.suggestion')){
        if(document.querySelector('.suggestion__swiper')){
            let suggestion__swiper = new Swiper('.suggestion__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.elem',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.elem',
                    prevEl: '.elem'
                },
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                    },
                    699:{
                        slidesPerView: 2,
                    },
                    890:{
                        slidesPerView: 3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.structure')){
        if(document.querySelector('.structure__swiper')){
            let structure__swiper = new Swiper('.structure__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 44,
                slidesPerView: 2.3,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.structure__slider-progressbar',
                    type: 'progressbar'
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    501: {
                        slidesPerView: 1.3,
                    },
                    992: {
                        slidesPerView: 2.3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.gallery')){
        if(document.querySelector('.gallery__swiper')){
            let gallery__swiper = new Swiper('.gallery__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.controls__dotts',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.controls__arrow-next',
                    prevEl: '.controls__arrow-prev'
                },
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                    },
                    500:{
                        slidesPerView: 2,
                    },
                    768:{
                        slidesPerView: 3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.news')){
        if(document.querySelector('.news__swiper')){
            let news__swiper = new Swiper('.news__swiper', {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                    el: '.news__dotts'
                },
                navigation: {
                    nextEl: '.news__arrow-next',
                    prevEl: '.news__arrow-prev',
                },
                breakpoints: {
                },
            })
        }
    }
    if(document.querySelector('.title')){
        if(document.querySelector('.title__swiper')){
            let title__swiper = new Swiper('.title__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 4,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.title__dotts',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.title__arrow-next',
                    prevEl: '.title__arrow-prev'
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    534: {
                        slidesPerView: 2,
                    },
                    838: {
                        slidesPerView: 3,
                    },
                    1196: {
                        slidesPerView: 4,
                    }
                },
            })
        }
    }
    if(document.querySelector('.about')){
        if(document.querySelector('.benefit__swiper')){
            let benefit__swiper = new Swiper('.benefit__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.elem',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.elem',
                    prevEl: '.elem'
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    580: {
                        slidesPerView: 2,
                    },
                    1026: {
                        slidesPerView: 3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.passage')){
        if(document.querySelector('.passage__swiper')){
            let passage__swiper = new Swiper('.passage__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 4,
                loop: true,
                watchSlidesProgress: true,
                pagination: {
                    el:'.passage__dotts',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.controls__arrow-next',
                    prevEl: '.controls__arrow-prev'
                },
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                    },
                    430:{
                        slidesPerView: 2,
                    },
                    636:{
                        slidesPerView: 3,
                    },
                    900:{
                        slidesPerView: 3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.stock')){
        if(document.querySelector('.stock__swiper')){
            let stock__swiper = new Swiper('.stock__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                pagination: {
                    el:'.stock__dotts',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.stock__controls-arrow-next',
                    prevEl: '.stock__controls-arrow-prev'
                },
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                    },
                    640:{
                        slidesPerView: 2,
                    },
                    1062:{
                        slidesPerView: 3,
                    }
                },
            })
        }
    }
    if(document.querySelector('.special')){
        if(document.querySelector('.special__swiper')){
            let special__swiper = new Swiper('.special__swiper', {
                observer: true,
                observeParents: true,
                spaceBetween: 24,
                slidesPerView: 3,
                loop: true,
                watchSlidesProgress: true,
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                    },
                    566:{
                        slidesPerView: 2,
                    },
                    830:{
                        slidesPerView: 3,
                    }
                },
            })
        }
    }

    function ibg(){

        let ibg=document.querySelectorAll("._ibg");
        for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
        }
    }
    function dinamicAdaptive(){
        function DynamicAdapt(type) {
            this.type = type;
        }
        
        DynamicAdapt.prototype.init = function () {
            const _this = this;
            // массив объектов
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            // массив DOM-элементов
            this.nodes = document.querySelectorAll("[data-da]");
        
            // наполнение оbjects объктами
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
        
            this.arraySort(this.оbjects);
        
            // массив уникальных медиа-запросов
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
                return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
        
            // навешивание слушателя на медиа-запрос
            // и вызов обработчика при первом запуске
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ',');
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
        
                // массив объектов с подходящим брейкпоинтом
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function () {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        
        DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
            if (matchMedia.matches) {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                }
            } else {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    if (оbject.element.classList.contains(this.daClassname)) {
                        this.moveBack(оbject.parent, оbject.element, оbject.index);
                    }
                }
            }
        };
        
        // Функция перемещения
        DynamicAdapt.prototype.moveTo = function (place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === 'last' || place >= destination.children.length) {
                destination.insertAdjacentElement('beforeend', element);
                return;
            }
            if (place === 'first') {
                destination.insertAdjacentElement('afterbegin', element);
                return;
            }
            destination.children[place].insertAdjacentElement('beforebegin', element);
        }
        
        // Функция возврата
        DynamicAdapt.prototype.moveBack = function (parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== undefined) {
                parent.children[index].insertAdjacentElement('beforebegin', element);
            } else {
                parent.insertAdjacentElement('beforeend', element);
            }
        }
        
        // Функция получения индекса внутри родителя
        DynamicAdapt.prototype.indexInParent = function (parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        
        // Функция сортировки массива по breakpoint и place 
        // по возрастанию для this.type = min
        // по убыванию для this.type = max
        DynamicAdapt.prototype.arraySort = function (arr) {
            if (this.type === "min") {
                Array.prototype.sort.call(arr, function (a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
        
                        if (a.place === "first" || b.place === "last") {
                            return -1;
                        }
        
                        if (a.place === "last" || b.place === "first") {
                            return 1;
                        }
        
                        return a.place - b.place;
                    }
        
                    return a.breakpoint - b.breakpoint;
                });
            } else {
                Array.prototype.sort.call(arr, function (a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
        
                        if (a.place === "first" || b.place === "last") {
                            return 1;
                        }
        
                        if (a.place === "last" || b.place === "first") {
                            return -1;
                        }
        
                        return b.place - a.place;
                    }
        
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        
        const da = new DynamicAdapt("max");
        da.init();
    }
    function phoneMask(){
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }
        
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)
        
        });
        
    }
    phoneMask();
    dinamicAdaptive();
    ibg();
}

let documentActions = (e) => {
    const targetElement = e.target;
    if(document.querySelector('.header')){
        let menu = document.querySelector('.menu')
        let header__burger = document.querySelector('.header__burger')
        if(targetElement.closest('.header__burger')){
            targetElement.classList.toggle('_active');
            menu.classList.toggle('_active');
        }
        if(!targetElement.closest('.header__burger') && !targetElement.closest('.menu')){
            header__burger.classList.remove('_active');
            menu.classList.remove('_active');
        }
        if(targetElement.closest('.menu__link')){
           if(menu.classList.contains('_active') && header__burger.classList.contains('_active')){
                header__burger.classList.remove('_active');
                menu.classList.remove('_active');
           }
        }
    }
    if(document.querySelector('.footer')){
        let activeFooterList = document.querySelector('._activeList')
        if(targetElement.closest('[data-title]')){
            let titleId = targetElement.dataset.title
            let listFooterItem = document.querySelector(`[data-item='${titleId}']`)
            if(activeFooterList && activeFooterList !== listFooterItem){
                activeFooterList.classList.remove('_activeList');
            }
            listFooterItem.classList.toggle('_activeList');
        }
        if(activeFooterList){
            if(!targetElement.closest('.list__footer-item')){
                activeFooterList.classList.remove('_activeList');
            }
        }
    }
    if(document.querySelector('.stocks')){
        let activeItem = document.querySelector('._activeItem');
        if(targetElement.closest('[data-item]')){
            if(activeItem && activeItem != targetElement){
                activeItem.classList.remove('_activeItem');
            }
            targetElement.classList.toggle('_activeItem');
            let itemId = targetElement.dataset.item;
            slider.slideTo(itemId)
        }
    }
}
document.addEventListener('click', documentActions);



swup.on('contentReplaced', function() {
    main()
});

main()