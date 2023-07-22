Бирюков Влад

Для работы с проектом была подключена локальная база данных. Для этого:
1) было установлено приложение Open Server Panel;
2) через PhpMyAdmin с СУБД MySQL была создана база данных phone_numbers и таблица phones.

Какие импорты были так и не скажешь, но если судить по package.json и dependencies, то:

package.json фронта:
"dependencies": {
    "@material-ui/icons": "^4.11.3",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "bootstrap": "^5.3.0",
    "mobx": "^6.9.0",
    "mobx-react-lite": "^3.4.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1",
    "react-responsive-modal": "^6.4.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }

package.json бэка:
"dependencies": {
    "cjs-loader": "^0.1.0",
    "cors": "^2.8.5",
    "express-fileupload": "^1.4.0",
    "mysql2": "^3.5.0",
    "sequelize": "^6.32.1",
    "uuid": "^9.0.0"
  }