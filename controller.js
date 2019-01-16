'use strict';

const response = require('./response');
const connection = require('./conn');

exports.tabungan = (req, res) => {
	connection.query('SELECT * FROM test', (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

exports.findTabungan = (req, res) => {
	const id = req.params.id;
	connection.query('SELECT * FROM test WHERE id = ?', [ id ], (error, rows, field) => {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

exports.createTabungan = (req, res) => {
	const no_rekening 	= req.body.no_rekening;
	const nama 			= req.body.nama;
	const alamat 		= req.body.alamat;
	const no_hp			= req.body.no_hp;

	connection.query('INSERT INTO test(no_rekening, nama, alamat, no_telepon) VALUES(?, ?, ?, ?)', [no_rekening, nama, alamat, no_hp], (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil menambahkan data buku tabungan', res);
		}
	});
};

exports.updateTabungan = (req, res) => {
	const id 			= req.body.id;
	const no_rekening 	= req.body.no_rekening;
	const nama 			= req.body.nama;
	const alamat 		= req.body.alamat;
	const no_hp			= req.body.no_hp;

	connection.query('UPDATE test SET no_rekening=?, nama=?, alamat=?, no_hp=? WHERE id=?', [no_rekening, nama, alamat, no_hp, id], (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil mengubah data buku tabungan', res);
		}
	});
};

exports.deleteTabungan = (req, res) => {
	const id = req.body.id;
	connection.query('DELETE FROM test WHERE id=?', [ id ], (error, rows, field) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil menghapus data buku tabungan', res);
		}
	});
};

exports.index = (req, res) => {
	response.ok('Index of CodeID Rest API', res);
};