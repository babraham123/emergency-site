require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'Ethiopian COVID-19 Emergency Site',
    url: META_URL || 'http://status.ethiopia-covid19.com',
    description: META_DESC || 'Emergency updates about the COVID-19 outbreak in Ethiopia.',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#DB0000',
    email: META_EMAIL || 'ethiopia.covid19@gmail.com',
    telephone: META_TELEPHONE || '+01 234 567 890',
    dateFormat: 'dd LLLL yyyy'
}
