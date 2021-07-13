import React from 'react';

// создаем глобальный обьект контекст для хранения данных в голове главной компоненты
// обворачиваем в контекст для того чтоб знать когда с ним произойдут измененияΩ
const AppContext = React.createContext({});

export default AppContext;
