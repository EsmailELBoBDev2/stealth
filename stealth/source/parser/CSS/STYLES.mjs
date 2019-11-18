
export const STYLES = {
	'background-attachment': {
		'val': [ 'scroll', 'fixed', 'local' ]
	},
	'background-clip': {
		'val': [ 'border-box', 'content-box', 'padding-box' ]
	},
	'background-color': {
		'typ': [ 'color' ]
	},
	'background-image': {
		'typ': [ 'url', 'gradient' ]
	},
	'background-origin': {
		'val': [ 'border-box', 'content-box', 'padding-box' ]
	},
	'background-position': {
		'val': [ 'top', 'right', 'bottom', 'left', 'center' ],
		'typ': [ 'length', 'percentage' ]
	},
	'background-repeat': {
		'val': [ 'no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'round', 'space' ]
	},
	'background-size': {
		'val': [ 'contain', 'cover', 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'border-color': {
		'typ': [ 'color' ]
	},
	'border-radius': {
		'typ': [ 'length', 'percentage' ]
	},
	'border-style': {
		'val': [ 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ]
	},
	'border-width': {
		'val': [ 'thin', 'medium', 'thick' ],
		'typ': [ 'length' ]
	},
	'font-size': {
		'val': [
			'xx-small', 'x-small', 'small',
			'smaller', 'medium', 'larger',
			'large', 'x-large', 'xx-large',
		],
		'typ': [ 'length', 'percentage' ]
	},
	'font-stretch': {
		'val': [
			'normal',
			'semi-condensed', 'condensed', 'extra-condensed', 'ultra-condensed',
			'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'
		],
		'typ': [ 'percentage' ]
	},
	'font-style': {
		'val': [ 'italic', 'normal', 'oblique' ]
	},
	'font-weight': {
		'val': [ 'normal', 'bold', 'bolder', 'lighter' ],
		'typ': [ 'number' ]
	},
	'line-height': {
		'val': [ 'normal' ],
		'typ': [ 'number', 'length', 'percentage' ]
	},
	'list-style-image': {
		'typ': [ 'url', 'gradient' ]
	},
	'list-style-position': {
		'val': [ 'inside', 'outside' ]
	},
	'list-style-type': {
		'val': [
			'circle', 'decimal', 'decimal-leading-zero', 'disc', 'square',
			'lower-alpha', 'lower-greek', 'lower-latin', 'lower-roman',
			'upper-alpha', 'upper-greek', 'upper-latin', 'upper-roman'
		]
	},
	'margin': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'outline-color': {
		'typ': [ 'color' ]
	},
	'outline-style': {
		'val': [ 'auto', 'none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ]
	},
	'outline-width': {
		'val': [ 'thin', 'medium', 'thick' ],
		'typ': [ 'length' ]
	},
	'overflow': {
		'val': [ 'auto', 'clip', 'hidden', 'scroll', 'visible' ]
	},
	'padding': {
		'typ': [ 'length', 'percentage' ]
	}
};



export default { STYLES };
