const btn = document.createElement('button');
btn.innerHTML = 'Click me!';

btn.onclick = () => {
	System.import('./change-btn.js').then(module => {
		module.default(btn);
	});
}

document.body.appendChild(btn);
