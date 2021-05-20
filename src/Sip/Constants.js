export const APPLICATIONS = 'Подписи';
export const CANCEL = 'Отменить';
export const LOGIN = 'Логин';
export const ENTER = 'Введите';
export const ID = 'id';
export const EDIT_A = 'Редактировние';
export const DELETE = 'Удалить';
export const SAVE = 'Сохранить';
export const OPERATORS = "Операторы";
export const FOR = "для";
export const CLOSE = "Закрыть";
export const APPLY = "Применить";
export const LOADING_DATA = 'Загрузка данных';
export const REGISTRATION_A = "Регистрации";;


//TODO:Добавить параметры
const domen = '';
const port = '';
const file = '';
const userParam = '';
const https = 'https://';
const actionStr = '?action=';


let newVar = {
    get_sip :'get_sip',
    set_sip :'set_sip',
};
export const OBJ_ACTION_REQUEST = newVar;

export const getURL = (action) => `${https}${domen}:${port}/${file}${actionStr}${action}&${userParam}`;

export const DELAY_REQUEST_ERROR_COUNT = 5000;
export const MAX_DELAY_REQUEST_ERROR_COUNT = 120000;
export const ERROR_UNKNOWN = "Ошибка соединения с сервером. Ведуться работы";

export const ERR_REQUEST_MESSAGE = "Произошла ошибка.Ответ сервера не получен";

export const OBJ_SETTINGS_PROPS = {
    'billsec': {id:'billsec',title:'billsec'},
    'calldate': {id:'calldate',title:'calldate'},
    'disposition': {id:'disposition',title:'disposition'},
    'dst': {id:'dst',title:'dst'},
    'duration': {id:'duration',title:'duration'},
    'src': {id:'src',title:'src'},
};

export const OBJ_ABNT_PROPS = {
    'id': {id:'id',title:'id'},
    'name': {id:'name',title:'name'},
    'snum_forward': {id:'snum_forward',title:'snum_forward'},
    'snum': {id:'snum',title:'snum'},
};

export const OBJ_PHONE_PROPS = {
    'id': {id:'id',title:'id'},
    'exten': {id:'exten',title:'exten'},
};

export const NUMBERS = 'Номера';