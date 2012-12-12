({
    block: 'b-page',
    title: 'Анкета',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    mix: [{ block: 'i-reset' }],
    content: [
        {
            block: 'slider',
            content: 'Матюха Владимир Петрович.'
        },
        {
            block: 'menu-wrap',
            content: [
                {
                    block: 'section',
                    content: [
                        {
                            elem: 'heading',
                            content: 'Общие вопросы'
                        },
                        {
                            block: 'menu-list',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Фамилия, имя, отчество'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Год рождения'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Город, в котором живёте'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Вуз, факультет, специальность, кафедра'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Год окончания вуза'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Уровень владения английским языком'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Чего вы ожидаете от участия в Школе?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Откуда вы о нас узнали?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Сколько времени вы готовы уделять стажировке или работе в Яндексе?'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'section',
                    content: [
                        {
                            elem: 'heading',
                            content: 'Опыт разработки'
                        },
                        {
                            block: 'menu-list',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Расскажите нам о вашем опыте разработки. Ничего не упускайте: это может быть как серьезный интерфейс, так и просто домашняя страничка.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Какие языки программирования, фреймворки и технологии вы использовали? Сложились ли у вас личные предпочтения?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'С какими редакторами и средами разработки вы знакомы? Чем обычно пользуетесь?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'С какими ОС приходилось сталкиваться? Для каких целей вы их применяли?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Приходилось ли вам работать с системами контроля версий? С какими? Какая из них вам нравится больше всего?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Использовали ли вы системы постановки и ведения задач?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Какие полезные для фронтенд-разработчика ресурсы вы используете и готовы посоветовать?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: { type: 'pseudo' },                                    
                                            content: 'Где вы работали раньше? Что именно делали? Есть ли у вас опыт работы в команде?'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
