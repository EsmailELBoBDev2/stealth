
import child_process from 'child_process';
import os            from 'os';
import path          from 'path';
import process       from 'process';

import { IP } from '../source/parser/IP.mjs';



const action = (() => {

	let value = Array.from(process.argv).slice(2).filter((v) => v.startsWith('--') === false).shift() || '';

	if (/^([serve]{5})$/g.test(value)) {
		return 'serve';
	}

	return 'help';

})();

const flags = (() => {

	let flags = {
		debug:   false,
		host:    null,
		profile: null
	};

	Array.from(process.argv).filter((v) => v.startsWith('--') === true).forEach((flag) => {

		let tmp = flag.substr(2).split('=');
		if (tmp.length === 2) {

			let key = tmp[0];
			let val = tmp[1];

			let num = parseInt(val, 10);
			if (Number.isNaN(num) === false && (num).toString() === val) {
				val = num;
			}

			if (val === 'true')  val = true;
			if (val === 'false') val = false;
			if (val === 'null')  val = null;

			flags[key] = val;

		}

	});

	return flags;

})();

const hostname = os.hostname();

const hosts = (() => {

	let hosts    = null;
	let platform = os.platform();

	if (platform === 'linux' || platform === 'freebsd' || platform === 'openbsd') {
		hosts = path.resolve('/etc/hosts');
	} else if (platform === 'android') {
		hosts = path.resolve('/system/etc/hosts');
	} else if (platform === 'darwin') {
		hosts = path.resolve('/etc/hosts');
	} else if (platform === 'win32') {
		hosts = path.resolve('C:\\windows\\system32\\drivers\\etc\\hosts');
	}

	return hosts;

})();

const ips = (() => {

	let ips = [];

	Object.values(os.networkInterfaces()).flat().forEach((iface) => {

		if (iface.internal === false) {

			let ip = IP.parse(iface.address);
			if (ip.type === 'v4') {

				let other = ips.find((i) => i.ip === ip.ip) || null;
				if (other === null) {
					ips.push(ip);
				}

			} else if (ip.type === 'v6' && iface.scopeid === 0) {

				let other = ips.find((i) => i.ip === ip.ip) || null;
				if (other === null) {
					ips.push(ip);
				}

			}

		}

	});

	return ips;

})();

const profile = (() => {

	let folder   = '/tmp/stealth';
	let platform = os.platform();
	let user     = process.env.SUDO_USER || process.env.USER || process.env.USERNAME;

	if (platform === 'linux' || platform === 'freebsd' || platform === 'openbsd') {
		folder = path.resolve('/home/' + user + '/Stealth');
	} else if (platform === 'android') {
		folder = path.resolve('/mnt/sdcard/Stealth');
	} else if (platform === 'darwin') {
		folder = path.resolve('/Users/' + user + '/Library/Application Support/Stealth');
	} else if (platform === 'win32') {
		folder = path.resolve((process.env.USERPROFILE || 'C:\\Users\\' + user) + '/Stealth');
	}

	if (folder.endsWith('/')) {
		folder = folder.substr(0, folder.length - 1);
	}

	return folder;

})();

const root = (() => {

	let folder   = '/tmp/stealth';
	let platform = os.platform();

	if (platform === 'linux' || platform === 'freebsd' || platform === 'openbsd' || platform === 'darwin') {

		let pwd = process.env.PWD || null;
		if (pwd !== null) {
			folder = path.resolve(pwd);
		}

	} else if (platform === 'android') {

		let pwd = process.env.PWD || null;
		if (pwd !== null) {
			folder = path.resolve(pwd);
		}

	} else if (platform === 'win32') {

		if (process.env.MSYSTEM === 'MINGW64') {

			let pwd = process.env.PWD || null;
			if (pwd.startsWith('/c/') === true) {
				folder = path.resolve('C:\\' + pwd.substr(3).split('/').join('\\'));
			}

		} else {

			let cwd = null;
			try {
				cwd = child_process.execSync('echo %cd%').toString('utf8').trim();
			} catch (err) {
				cwd = null;
			}

			if (cwd !== null) {
				folder = cwd;
			}

		}

	}

	if (folder.endsWith('/')) {
		folder = folder.substr(0, folder.length - 1);
	}

	return folder;

})();

const temp = (() => {

	let user     = process.env.SUDO_USER || process.env.USER || process.env.USERNAME;
	let folder   = '/tmp/stealth-' + user;
	let platform = os.platform();

	if (platform === 'linux' || platform === 'freebsd' || platform === 'openbsd') {
		folder = path.resolve('/tmp/stealth-' + user);
	} else if (platform === 'android') {
		folder = path.resolve(process.env.TMPDIR || '/mnt/sdcard/Stealth/TEMP');
	} else if (platform === 'darwin') {
		folder = path.resolve(process.env.TMPDIR || '/tmp/stealth-' + user);
	} else if (platform === 'win32') {
		folder = path.resolve(process.env.USERPROFILE + '\\AppData\\Local\\Temp\\stealth-' + user);
	}

	if (folder.endsWith('/')) {
		folder = folder.substr(0, folder.length - 1);
	}

	return folder;

})();



const ENVIRONMENT = {

	action:    action,
	flags:     flags,
	hostname:  hostname,
	hosts:     hosts,
	ips:       ips,
	profile:   profile,
	root:      root,
	temp:      temp

};


export { ENVIRONMENT };

