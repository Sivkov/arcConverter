import React from 'react';
import ThemeSwitcher from './themeSwitcher';

const Navbar = () => {


	const load = {}
	const parser ={}
	const panels = {}

	
	
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'var(--bgMain1)', borderBottom: '1px solid var(--paleColor)' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="file_tooltip">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Файл
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="d-none">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#newFileModal">
                    <i className="fa-solid fa-file"></i> Создать
                  </a>
                </li>
                <li className="electronOnly">
                  <a className="dropdown-item import_file" href="#">
                    <i className="fa-solid fa-file-pen"></i> Загрузить
                  </a>
                </li>
                <li>
                  <a className="dropdown-item export_file" href="#">
                    <i className="fa-solid fa-file-export"></i> Сохранить
                  </a>
                </li>
                <li className="d-none">
                  <a className="dropdown-item export_file_as" href="#">
                    <i className="fa-solid fa-file-export"></i> Сохранить как
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider dropdown-divider_main_menu" />
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li onMouseDown={load.exit}>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i> Закрыть
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" onMouseDown={load.reload}>Перезагрузить</a>
            </li>
            <li className="nav-item">
              <a className="nav-link import_parts" href="#" tabIndex="-1" aria-disabled="true">
                Загрузить детали
              </a>
            </li>
            <li id="languages" className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarSettings" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Язык
              </a>
              <ul className="dropdown-menu electronOnly" aria-labelledby="navbarSettings">
                <li>
                  <a className="dropdown-item" href="#" onClick={parser.selectLanguage} data-language="en">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        EN
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={parser.selectLanguage} data-language="ru">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        RU
                      </label>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Редактор деталей
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li className="electronOnly">
                  <a className="dropdown-item" href="#" id="partEditor">
                    <i className="fa-solid fa-gear"></i> Редактировать текущую деталь
                  </a>
                </li>
                <li className="electronOnly">
                  <a className="dropdown-item" href="#" id="partEditorDetail">
                    <i className="fa-solid fa-file-pen"></i> Открыть редактор деталей
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" onMouseDown={load.tasks} href="#" tabIndex="-1" aria-disabled="true">
                Задания
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onMouseDown={load.exit} href="#" tabIndex="-1" aria-disabled="true">
                Выход
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="nav-item unselectable">
              <a className="nav-link" href="#" id="informer">
                x: 165 y: 5
              </a>
            </li>
          </ul>
          <div className="d-flex">
			<ThemeSwitcher />
            <div className="form-check form-switch toolTipsSwitcher">
              <input className="form-check-input" type="checkbox" id="toolTipsSwitcher" onMouseDown={panels.tooltipSwitcher} />
              <label className="form-check-label" htmlFor="toolTipsSwitcher">
                Подсказки
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



