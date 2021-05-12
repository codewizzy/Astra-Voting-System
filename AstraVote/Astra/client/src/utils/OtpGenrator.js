const SendOtp = require('sendotp')
const sendOtp = new SendOtp('357995A1eqeyzs9d9h60684780P1')

// Function for sending the otp to the given mobilr number
export const otpSender = (mobile, userId) => {

    return new Promise((resolve, reject) => {

        //sendOtp.setOtpExpiry('3')
        // sendOtp.send("91" + mobile, userId, (error, data) => {
        
        //     if(data.type === "success") resolve(data)
    
        //     if(error) reject(error)  
    
        //   });
      resolve("success");
    })

  }

//Function for verifying the otp.
export const otpVerifier = (mobile, otp) => {
    
    return new Promise((resolve, reject) => {
        // sendOtp.verify("91" + mobile, otp, function (error, data) {

        //     if(data.type === 'success') resolve(data)
            
        //     if(data.type === 'error') reject(error)
        //   })
        resolve("success");
    })

  }