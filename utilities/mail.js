var nodemailer 	= require('nodemailer');
var fs 			= require('fs');
var path		= require('path');	
var mailer = {
	sendMail:function(toAddress, mainContent){
		return new Promise(function(resolve, reject){
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'shrutivi.hexaware@gmail.com',
					pass: 'akshara6'
				}
			});			
			var mailOptions = {
			  from: 'shrutivi.hexaware@gmail.com',
			  to: toAddress,
			  subject: 'Booking Id : A123456',
			  html: mainContent,			 
			};

			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log(info.response);
					resolve(info.response);
				}
			});
		});
	}	

}

module.exports = mailer;

