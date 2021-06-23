const nodemailer = require('nodemailer') 
const{google}= require('googleapis');
const { gmail } = require('googleapis/build/src/apis/gmail');
 const clintid="668810431467-ofnkaecqnb1bsqffvhv5k8draptr1lss.apps.googleusercontent.com"
 const secret="tHvV1-F70cqxtjhwd8zAKlPH";
 const redirecturl="https://developers.google.com/oauthplayground"
 const refresh ="1//0406Xz2fag2iHCgYIARAAGAQSNwF-L9IrtzDqjHhaFlQhXGyFqH3P9d9WedSSO9ewvVMyrPgo1P8MBIBLfH-Y7JFfB04rmi2ib4c";

const oAuthtoclient=new google.auth.OAuth2(clintid, secret, redirecturl);
oAuthtoclient.setCredentials({refresh_token: refresh});
  async function sendmail(){
     try{
         const accessToken = await oAuthtoclient.getAccessToken();;

         const transport= nodemailer.createTransport({
             service: 'gmail',
             auth: {
                 type: 'OAuth2',
                 user: 'kesavanethiraj2013@gmail.com',
                 clientId: clintid,
                 clientSecret: secret,
                 refreshToken: refresh,
                 accessToken: accessToken
             }
         })

         const mailoption={
             from: 'kesavan < kesavanethiraj2013@gmail.com>',
             to: 'ekn.eie@rmkec.ac.in',
             subject: "hello",
             text: "hello",
          html: '<h4>hello from gmail</h4>',
         }
         const result = transport.sendMail(mailoption)
         return result;

     }catch (error){
         return error
     }
 }

 sendmail()
    .then((result)=>console.log('Email sent...',result) )
    .catch((error)=>console.log(errormessage));

    // //////

      