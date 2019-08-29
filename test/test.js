const QRlogo = require('../index.js');
//const qrlogo_class = new QRlogo();

const qr_data = {
    type: "connect",
    data: {
        name: "MikeArtegasGymPoughkeepsieNY",
        url: "https://MikeArtegasGymPoughkeepsieNY:@ad42a1c557e7375aedaa373c0cce46db5d0a14c463ab2e13c65f11d0.staging-cloud-agents.us-east.containers.appdomain.cloud"
    },
    uuid: '12345678910abc'
};

const string_qr_data = JSON.stringify(qr_data);


async function createPNGWithLogo(){
    await qrlogo.generateQR(string_qr_data, async function(b64){
        await qrlogo.saveAsPNG(b64, 'qr_code.png', async function (filename){
            console.log('!! File name: ' + filename);
            await qrlogo.addLogo(filename, 'mike.png', async function(qr_with_logo_b64){
                console.log(qr_with_logo_b64);
                await qrlogo.saveAsPNG(qr_with_logo_b64, 'combined_file.png', async function(filename){
                    console.log('Saved final pic as: ' + filename);
                });
            })
        })
    })
}

///createPNGWithLogo();


/**
 * NEEDS TO BE FIXED
 *
 * Error being thrown is in object form
 * @returns {Promise<void>}
 */
async function waitForImage(){
   await QRlogo.generateQRWithLogo(JSON.stringify(qr_data), "PNG", "Mike.png", async function(){
        console.log("Done");
    });
}


async function create(){
    await QRlogo.generateQRWithLogo(JSON.stringify(qr_data), "images/mike_mini_long_logo.png", "PNG", "qr_mike.png", async function(){
        console.log('It is done');
    });
}

create();


//waitForImage();

//qrlogo_class.addLogoToQRImage("images/qr_code.png", "images/mike_mini_long_logo.png", "PNG", "images/mike_qr.png");



