import React, { useState } from 'react';

function Intro() {
	const [lang, setLang] = useState('en');
	const toggleLang = () => {
		if (lang === 'en') {
			setLang('ru');
		} else {
			setLang('en');
		}
	};

	let text ={
		'en':`Что это?
		В процессе работы над одним из проектов появилась необходимость решить задачу преобразования эллиптических дуг в круговые.  В моих задачах был выставлен параметр отклонения не более 0,05мм. И хотя проблема это довольно распространенная (целый ряд станков режет прямо либо по круговой дуге ) готового open source решения найдено не было либо предлагаемые варианты давали слишком большую погрешность.Собственно вот. Вы можете вводить параметры радиусов и количества сегментов и далее получать обновленный путь для svg. Точка на экране показывает место максимального отклонения от эллиптической траектории. Значение maxDeviation - размер отклонения.
		С наилучшими пожеланиями, по любым вопросам пишите мне: 202493@mail.ru
		`,
		'ru':`What's it?
		While working on one of the projects, it became necessary to solve the problem of converting elliptical arcs into circular ones.  In my tasks, the deviation parameter was set to no more than 0.05 mm. And although this problem is quite common (a number of machines cut straight or in a circular arc ) no ready-made open source solution was found, or the proposed options gave too large an error.Actually here. You can enter parameters for the radii and the number of segments and then get an updated path for the svg. A dot on the screen shows the location of the maximum deviation from the elliptical trajectory. The maxDeviation value is the size of the deviation.
		<br>
		Best regards, for any questions mail to me: 202493@mail.ru`
	}

	return (
		<div className='d-flex flex-column align-items-start justify-content-start mx-4'>			
			<div className="form-check form-switch themeSwitcher d-flex align-items-center" style={{}}>
				<label htmlFor="themeSwitcher" className="form-check-label" style={{ marginRight: '0px', fontSize: '16px' }}>Ru</label>
				<input
					className="form-check-input"
					type="checkbox"
					onChange={toggleLang}
					style={{ marginLeft: '6px' }}
					id="langSwitcher"
				/>
				<label htmlFor="langSwitcher" className="form-check-label mx-1" style={{ marginRight: '0px', fontSize: '16px' }}>En</label>
			</div>
			<div >
				<article id='introText'>{text[`${lang}`]}</article>
			</div>
		</div>

	);
}

export default Intro;
