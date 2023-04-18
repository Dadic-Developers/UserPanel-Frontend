import {
  defaultDirection,
  defaultLocale,
  defaultColor,
  localeOptions,
  themeColorStorageKey,
  themeRadiusStorageKey,
} from 'constants/defaultValues';

const FARSI_NUMBERS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const ARABIC_NUMBERS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export const convertFaToEn = function (enNumber) {
  if (!enNumber || !enNumber.toString) {
    return enNumber;
  }

 

  return enNumber.toString()
    .split("")
    .map((letter) =>
      FARSI_NUMBERS.indexOf(letter) !== -1
        ? FARSI_NUMBERS.indexOf(letter)
        : letter
    )
    .join("");
};

export const convertEnToFa = function (enNumber) {
  if (!enNumber || !enNumber.toString) {
    return enNumber;
  }

 
  return enNumber.toString()
    .split("")
    .map((letter) => (/[0-9]/.test(letter) ? FARSI_NUMBERS[letter] : letter))
    .join("");
};

export const convertArToEn = function (enNumber) {
  if (!enNumber || !enNumber.toString) {
    return enNumber;
  }


  return enNumber.toString()
    .split("")
    .map((letter) =>
      ARABIC_NUMBERS.indexOf(letter) !== -1
        ? ARABIC_NUMBERS.indexOf(letter)
        : letter
    )
    .join("");
};

export const convertEnToAr = function (enNumber) {
  if (!enNumber || !enNumber.toString) {
    return enNumber;
  }

  return enNumber.toString()
    .split("")
    .map((letter) => (/[0-9]/.test(letter) ? ARABIC_NUMBERS[letter] : letter))
    .join("");
};

export const convertArToFa = function (enNumber) {
  const en = convertArToEn(enNumber);
  return convertEnToFa(en);
};

export const convertFaToAr = function (enNumber) {
  const en = convertFaToEn(enNumber);
  return convertEnToAr(en);
};

export const numberWithCommas = function (enNumber) {
  const result=convertEnToFa(enNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  return (`${result} ریال `);
};


export const mapOrder = (array, order, key) => {
  // eslint-disable-next-line func-names
  array.sort(function (a, b) {
    const A = a[key];
    const B = b[key];
    if (order.indexOf(`${A}`) > order.indexOf(`${B}`)) {
      return 1;
    }
    return -1;
  });
  return array;
};

export const getDateWithFormat = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${dd}.${mm}.${yyyy}`;
};

export const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};

export const getDirection = () => {
  let direction = defaultDirection;

  try {
    if (localStorage.getItem('direction')) {
      const localValue = localStorage.getItem('direction');
      if (localValue === 'rtl' || localValue === 'ltr') {
        direction = localValue;
      }
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : getDirection -> error', error);
    direction = defaultDirection;
  }
  return {
    direction,
    isRtl: direction === 'rtl',
  };
};
export const setDirection = (localValue) => {
  let direction = 'ltr';
  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue;
  }
  try {
    localStorage.setItem('direction', direction);
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setDirection -> error', error);
  }
};

export const getCurrentColor = () => {
  let currentColor = defaultColor;
  try {
    if (localStorage.getItem(themeColorStorageKey)) {
      currentColor = localStorage.getItem(themeColorStorageKey);
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : getCurrentColor -> error', error);
    currentColor = defaultColor;
  }
  return currentColor;
};

export const setCurrentColor = (color) => {
  try {
    localStorage.setItem(themeColorStorageKey, color);
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentColor -> error', error);
  }
};

export const getCurrentRadius = () => {
  let currentRadius = 'rounded';
  try {
    if (localStorage.getItem(themeRadiusStorageKey)) {
      currentRadius = localStorage.getItem(themeRadiusStorageKey);
    }
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : getCurrentRadius -> error',
      error
    );
    currentRadius = 'rounded';
  }
  return currentRadius;
};
export const setCurrentRadius = (radius) => {
  try {
    localStorage.setItem(themeRadiusStorageKey, radius);
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : setCurrentRadius -> error',
      error
    );
  }
};

export const getCurrentLanguage = () => {
  let language = defaultLocale;
  try {
    language =
      localStorage.getItem('currentLanguage') &&
      localeOptions.filter(
        (x) => x.id === localStorage.getItem('currentLanguage')
      ).length > 0
        ? localStorage.getItem('currentLanguage')
        : defaultLocale;
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : getCurrentLanguage -> error',
      error
    );
    language = defaultLocale;
  }
  return language;
};
export const setCurrentLanguage = (locale) => {
  try {
    localStorage.setItem('currentLanguage', locale);
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : setCurrentLanguage -> error',
      error
    );
  }
};

export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem('current_user') != null
        ? JSON.parse(localStorage.getItem('current_user'))
        : null;
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  try {
   
    if (user) {
  
      localStorage.setItem('current_user', JSON.stringify(user));
      
    } else {
      localStorage.removeItem('current_user');
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
  }
};

export const getCurrentToken = () => {
  let token = null;
  try {
    token =localStorage.getItem('token');
    
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentToken -> error', error);
    token = null;
  }
  return token;
};
export const getCurrentTokenRefrash = () => {
  let token = null;
  try {
    token =localStorage.getItem('refresh');
    
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentTokenRefrash -> error', error);
    token = null;
  }
  return token;
};
export const setCurrentToken = (token) => {
  try {
    if (token) {
      localStorage.setItem('token', `Bearer ${token.access} `);
      localStorage.setItem('refresh', token.refresh);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentToken -> error', error);
  }
};
