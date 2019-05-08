const merge = require('merge-images-canvas-v2')
const c = require('node-canvas-1.x')
const base = require('base64-to-image')
merge([
		{
			src:'./logo-bemol2.png',
			x : 0,
			y : 0
		},
		{
			src:'./face_logo1.png',
			x : 30,
			y : 0
		}
	], {
	Canvas: c
}).then(b64 => {
	base(b64, './', {'fileName' : 'teste.png', 'type' : 'png'})
})