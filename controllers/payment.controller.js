// const mercadopago = require('mercadopago');
// require('dotenv').config();

// exports.createOrder = async (req, res) => {
//     mercadopago.configure({
//         access_token: process.env.MERCADOPAGO_ACCESS_TOKEN_PRUEBA
//     })

//     const result = await mercadopago.preferences.create({
//         items: [
//             {
//                 title: 'Camisa de lino para niño',
//                 quantity: 1,
//                 currency_id: 'COP',
//                 unit_price: 180000
//             }
//         ]
//     })

//     console.log(result);
//     res.send('Creating order/Creando orden');
// }

// exports.success = (req, res) => res.send('The payment was successful');
// exports.webhook = (req, res) => res.send('Webhook: Pending of payment');