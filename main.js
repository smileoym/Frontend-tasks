document.write('<ul><li><a href="http://newacropolis.org.ua/" target="_blank">Перейти на сайт</a></li><li>Список книг, которые хочется открыть за грядущие два месяца:<ol type="a"><li>Категория: Философия Истории:<ol><li>Арнольд Тойнби. Постижение истории.</li><li>Освальд Шпенглер. Закат Европы.</li><li>Питирим Сорокин. Человек. Цивилизация. Общество.</li><li>Карл Ясперс. Смысл и назначение истории.</li></ol></li><li>Категория: фантастика:<ol><li>Звездные войны 1</li><li>Звездные войны 2</li><li>Звездные войны 3</li><li>Звездные войны 4</li></ol></li></ol></li><li>Список книг, которые хочется открыть за грядущие два месяца:<ol type="a"><li>Категория: Философия Истории:<ol><li>Арнольд Тойнби. Постижение истории.</li><li>Освальд Шпенглер. Закат Европы.</li><li>Питирим Сорокин. Человек. Цивилизация. Общество.</li><li>Карл Ясперс. Смысл и назначение истории.</li></ol></li><li>Категория: фантастика:<ol><li>Звездные войны 1</li><li>Звездные войны 2</li><li>Звездные войны 3</li><li>Звездные войны 4</li></ol></li></ol></li></ul>');

timeend= new Date();

timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);

function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
       thour=today%60; today=Math.floor(today/3600);
    timestr=today+" hours remains before the New Year ";
    document.getElementById('t').innerHTML=timestr;
    window.setTimeout("time()",1000);
}

 

