({
    block: 'b-page',
    title: 'BEM Server Motivator',
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
            content: [
                {
                    elem: 'slide',
                    content: 'Матюха Владимир Петрович.'
                },
                {
                    elem: 'slide',
                    content: '1990.'
                },
                {
                    elem: 'slide',
                    content: 'Ялта.'
                },
                {
                    elem: 'slide',
                    content: 'Ялтинский филиал Европейского университета, информационных систем и тахнологий, информационные управляющие системы и технологии.'
                },
                {
                    elem: 'slide',
                    content: '2013.'
                },
                {
                    elem: 'slide',
                    content: 'Ну могу кое как переписываться, читать документацию.'
                },
                {
                    elem: 'slide',
                    content: 'Прежде всего прокачать знания, заполненить пробелы и освоить что-то новое.'
                },
                {
                    elem: 'slide',
                    content: 'Узнал от друзей.'
                },
                {
                    elem: 'slide',
                    content: 'Часов 4-6, пока пишу диплом.'
                },
                {
                    elem: 'slide',
                    content: 'Занимался разработкой и поддержкой сайтов на WP, так же аутсорсил для яндекса (пару мелких промо сайтов), ещё немного участвовал в разработке десктопного сервиса Яндекс.Такси(фиксил баги вёрстки). Ну и само собой всякие сайты для курсовых и дипломной работы'
                },
                {
                    elem: 'slide',
                    content: 'Всякие WP API, javascript(jquery), ajax, немного xml и xsl, php(обычно процедурный подход, но обучался и ООП), для разработки дипломной работы использовал twitter bootstrap и api Яндекс.Карт( приложение заюирает с изображения exif данные и создаёт отметку на карте, где было сделано фото), bem( bemjson, самую малость bemhtml).'
                },
                {
                    elem: 'slide',
                    content: 'Начинал с Dreamveawer, потом notepad ++, phpstorm/webstorm, в настоящее время sublime text 2(лёгкий, плагины, модный, молодёжный)'
                },
                {
                    elem: 'slide',
                    content: 'Windows Xp/7/8, минимально с mac и ubuntu. Windows как нестранно для работы так как на убунту нету фотошопа а на макосины не насобирал ещё.'
                },
                {
                    elem: 'slide',
                    content: 'Только с Git.'
                },
                {
                    elem: 'slide',
                    content: 'Mantis, Мегаплан, Jira.'
                },
                {
                    elem: 'slide',
                    content: [
                        {
                            block: 'menu-list',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                             block: 'link',
                                            attrs: { href: 'http://css-tricks.com' },
                                            content: 'css-tricks.com'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                         {
                                            block: 'link',
                                            attrs: { href: 'http://www.smashingmagazine.com/' },
                                            content: 'smashingmagazine.com'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            attrs: { href: 'http://htmlbook.ru/' },
                                            content: 'htmlbook.ru'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            attrs: { href: 'http://caniuse.com/' },
                                            content: 'caniuse.com'
                                        }
                                    ]
                                }
                            ]
                        }                        
                    ] 
                },
                {
                    elem: 'slide',
                    content: 'В студии tadatuta. Вёрстка, js, разработка тем для wordpress и поддержка существующих сайтов. Есть небольшой опыт разработки в команде.'
                }
            ]
        },
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
})
